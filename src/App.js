import React from 'react';
import './App.css';
import './Components/InstrumentsJsx';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import { NotificationProvider } from './notification/Notification';

function App() {
  // const [page, setPage] = useState('list')

  return (
    <div className="App">
    <NotificationProvider>
     <CartContextProvider>
       <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting='Nuestros Instrumentos'/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting='Lista de '/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
                <Route path='/cart' element={<h1>CART</h1>} />
                  <Route path='*' element={<h1>404 NOT FOUND</h1>} />  
        </Routes>
       </BrowserRouter>
      </CartContextProvider>
     </NotificationProvider>
    </div>
  );
}

export default App;