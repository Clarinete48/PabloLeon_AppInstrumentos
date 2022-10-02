import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
      <nav className="NavBar" >
          <div className='NavBar'>
            <Link to='/'>
              <h3>Instrumentos</h3>
            </Link>
          </div>
          <div className="Categories">
              <Link to='/category/guitarra' className="Option">Guitarras</Link>
              <Link to='/category/bajo' className="Option">Bajos</Link>
              <Link to='/category/bateria' className="Option">Baterías</Link>
          </div>
        <div>
            <CartWidget />
        </div>
        </nav>
    )
}

export default Navbar