import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import './App.css';

function Posiciones(props) {
const [Player, SetPlayer] = useState();
const [Computer, SetComputer] = useState();
const [Empate, SetEmpate] = useState();

function Tabla(cadena){
var C = [];
var E = [];
var P = [];
if(cadena){
for(var i = 0; i < cadena.length; i++) {
if (cadena[i] === 'p') P.push(i);
if (cadena[i] === 'c') C.push(i);
if (cadena[i] === 'e') E.push(i);
}}
SetPlayer(P.length);SetEmpate(E.length);SetComputer(C.length)
}

useEffect(() => {
Tabla(props.match)
// eslint-disable-next-line
},[]);

  return (
    <div className="App">
      <div className="App-header">
      <div id='title'>
      <Table striped bordered hover variant="dark" size="sm">
  <thead>
    <tr>
      <th>Player</th>
      <th>Partidos Ganados</th>
      <th>Partidos Perdidos</th>
      <th>Empates</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>{props.player}</td>
    <td>{Player}</td>
    <td>{Computer}</td>
    <td>{Empate}</td>
    </tr>
    <tr>
    <td>Computer</td>
    <td>{Computer}</td>
    <td>{Player}</td>
    <td>{Empate}</td>
    </tr>
  </tbody>
</Table>
{Player ===0 && Computer===0?
<h1>DEBE HACER LA PRIMERA JUGADA</h1>:
Player === Computer?
<h1>Empate</h1>
:<h1>Va ganando:  
{Player > Computer?
' "'+props.player+'"':' "Computer"'}
</h1>
}
</div>  
</div>
</div>  
  );
}

export default Posiciones;
