import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return(
        <nav>
        <div>
            <h1>Instrumentos</h1>
        </div>
        <div>
         <button>Guitarras</button>
            <button>Bajos</button>
            <button>Baterías</button>
        </div>
        <div>
            <CartWidget />
        </div>
        </nav>
    )
}

export default Navbar