import React from 'react';
import Regla from './img/reglas.jpg';
import './App.css';

function Reglas() {
return (
    <div className="App">
      <header className="App-header">
      <div id='title'>
      <h1><strong>Eze-Game's</strong></h1>
      <h3><strong><u>Reglas</u></strong></h3>
      </div>
      <img src={Regla} className="App-logo" alt="Reglas" />
      </header>
  </div>  
  );
}

export default Reglas;
