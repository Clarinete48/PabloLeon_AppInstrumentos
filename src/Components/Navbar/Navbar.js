import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    return(
      <nav className="NavBar" >
          <div className='NavBar'>
            <Link to='/'>
              <h3 className='WebTitle'>MusicApp</h3>
            </Link>
          </div>
          <div className="Categories">
              <NavLink to='/category/guitarras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guitarras</NavLink>
              <NavLink to='/category/bajos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bajos</NavLink>
              <NavLink to='/category/baterias' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Baterías</NavLink>
          </div>
        <div>
            <CartWidget />
        </div>
        </nav>
    )
}

export default Navbar