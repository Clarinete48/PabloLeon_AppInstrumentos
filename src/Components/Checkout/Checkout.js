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
                buyer: {
                    name: 'Pablo León',
                    phone: '965673973',
                    email: 'contact@musicapp.cl'
                },
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

    const { register, formState: { errors } } = useForm

    return (
    <>
    <h1>Checkout</h1>
    <div>
    <form>
        <div>
            <label>Nombre</label>
            <input type="text" {...register('name', {
                required: true,
            })} />
            {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
        </div>
                        <div>
            <label>Email</label>
            <input type="text" {...register('email', {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
        </div>
        <div>
            <label>Teléfono</label>
            <input type="number" {...register('phone')} />
        </div>
    </form>
</div>
    <button onClick={createOrder}>Agregar documento</button>
            
        </>
    )
}

export default Checkout