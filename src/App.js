import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import './App.css';
import './Components/InstrumentsJsx';
// import InstrumentsJsx from './Components/InstrumentsJsx';
// import Button from './Components/Button/Button';
// import Counter from './Components/Counter/Counter';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>BIENVENIDOS</h1>
        {React.createElement (InstrumentsJsx, {name: 'Batería', id:2, desc: ' Fiddler FD-DD02 Módulo MIDI'})}
        <InstrumentsJsx name= 'Guitarra' id='1' desc=' Freeman FRE40 LP - Color negro'/>
        <Button Label={'cancelar'} background='red' action={() => console.log('cancele')}/>
        <Button Label={'aceptar'} background='green' action={() => console.log('acepte')}/>
        <Counter/> */}
        <Navbar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
      </header>
    </div>
  );
}

export default App;
