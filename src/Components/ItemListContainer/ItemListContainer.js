import './ItemListContainer'
import { useState, useEffect, useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
// import { getProductsByCategory } from '../asyncMock'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'
import { NotificationContext } from '../../notification/Notification'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { setNotification } = useContext(NotificationContext)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
                ? query(collection(db, 'products'), where('category', '==', categoryId))
                : collection(db, 'products')
  

        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        })
        .catch(error => {
            setNotification('error', 'No se puede obtener el producto')
        })
        .finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if(loading && true) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer