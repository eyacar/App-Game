import React from 'react';
import logo from './img/logo.gif';
import './App.css';

function App() {
return (
    <div className="App">
      <header className="App-header">
      <div id='title'>
      <h1><strong>Eze-Game's</strong></h1>
      <h3><strong>Piedra, Papel o Tijera</strong></h3>
      <h3><strong>Big Bang Theory style</strong></h3>
      <p><strong>El mejor juego de la historia reversionado!!!</strong></p>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  </div>  
  );
}

export default App;
