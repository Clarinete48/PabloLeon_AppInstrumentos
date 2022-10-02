import React from 'react';
import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {
  // const [page, setPage] = useState('list')

  return (
    <div className="App">
      {/* <div>
        <button onClick={() => setPage('list')}>listado</button>
        <button onClick={() => setPage('detail')}>detalle</button>
      </div>
      {page === 'list' && <ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>}
      {page === 'detail' && <ItemDetailContainer /> } */} 
      <BrowserRouter>
        <Navbar />
        {/*<div>
          <Link to='/'>Productos</Link>
          <Link to='/detail'>Detalle</Link>
    </div> */}
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;