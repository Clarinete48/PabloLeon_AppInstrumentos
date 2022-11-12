import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../service/firebase'
import { useForm } from "react-hook-form"

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: contactForm,
                items: cart,
                total
            }                                                                                    
            console.log(objOrder)
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                console.log('Hay productos sin stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Generando orden...</h1>
    }

    const form = document.getElementById('contactForm'); 

    if(form){ 
      form.addEventListener('createOrder', contactForm);
    }

    function contactForm(event) {
      event.preventDefault(); 
      const nombre = document.getElementById('nombre');
      event.preventDefault(); 
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      const buyer = {
        'name': nombre.value,
        'phone': phone.value,
        'email': email.value,
      }; 
      saveContactForm(buyer);
      form.reset(); // borrar campos. 
    }

  function saveContactForm(buyer) {
    orders.database().ref('contact').push(buyer)
      .then(function(){
        alert('orden enviada'); 
      })
      .catch(function(){
        alert('orden no enviada'); 
      });
  }


    return (
    <>
    <h1>Checkout</h1>
    <form id="contactForm">
    <div>
        <label>
        Name:
        <input type="text" name="name" />
        </label>
        </div>
    <div>
        <label>
        Phone:
        <input type="number" name="phone" />
        </label>
    </div>
        <div>
        <label>
        Email:
        <input type="text" name="email" />
        </label>  
    </div>
</form>
    <button onClick={createOrder}>Enviar orden de compra</button>     
        </>
    )
}

export default Checkout