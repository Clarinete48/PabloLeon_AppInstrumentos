import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../service/firebase'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'))

    getDocs(collectionRef).then(response => {
      console.log(response)

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })

      setCategories(categoriesAdapted)
    })
  }, [])

  console.log(categories)

  return (
    <nav className="NavBar" >
        <Link to='/'>
          <h3 className='WebTitle'>MusicApp</h3>
        </Link>
        <div className="Categories">
            { categories.map(cat => (
                <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            ))}
            {/* <NavLink to='/category/guitarras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guitarras</NavLink>
            <NavLink to='/category/bajos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bajos</NavLink>
            <NavLink to='/category/baterias' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Baterias</NavLink> */}
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar