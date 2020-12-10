import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

function Game(props) {
const [PlayP, SetPlayer] =useState();
const [PlayC, SetComputer] =useState();
const [Win, SetWin] = useState('');
const [Partido, SetPartido] = useState();
const [Played, SetPlayed] = useState(false);

const plays =["lagarto.svg","papel.svg","piedra.svg","spock.svg","tijeras.svg"]
function Play(event){
SetPlayed(true)
const p = parseInt(event.currentTarget.dataset.id)
const c = Math.floor(Math.random() * plays.length)
SetPlayer(p);
SetComputer(c);
if((p===0 && (c===3 || c===1)) || (p===1 && (c===2 || c===3)) || (p===2 && (c===0 || c===4)) || (p===3 && (c===2 || c===4)) || (p===4 && (c===0 || c===1))){SetWin('Player');Change("p")}
else if (p===c) {SetWin('Empate');Change('e')}
else{SetWin('Computer');Change('c')}
}
function Change(event){
if(Partido){SetPartido(Partido + event)}
else{SetPartido(event)}  
}
useEffect(() => {
  SetPartido(props.inicial)
  // eslint-disable-next-line
  },[]);
useEffect(() => {
  props.match(Partido)
  // eslint-disable-next-line
  },[Partido]);

  return (
    <div className="App">
      <div className="App-header">
      <div id='title'>
  {Played===false?
  <Container>
  <Row className="justify-content-md-center">
  {plays.map((play,i) =>
    <Col key={i} xs="6" md="6" lg="4">
  <img data-id={i} onClick={Play} className="play" src={`/image/${play}`} alt={play}/>
  </Col>
)} 
</Row>
</Container>
:
<>
<Container>
<Row className="justify-content-md-center">
<Col xs="6" md="6" lg="6">
<div>
<h3>{props.player}</h3> 
<img className="play" src={`/image/${plays[PlayP]}`} alt={plays[PlayP]}/>
</div>
</Col>
<Col xs="6" md="6" lg="6">
<div>
<h3>Computer</h3>
<img className="play" src={`/image/${plays[PlayC]}`} alt={plays[PlayC]}/>
</div>
</Col> 
</Row>
<Row className="justify-content-md-center">
<Col xs="12" md="12" lg="12">
<Button variant="success" onClick={()=> {SetPlayed(false)}}>Volver a Jugar</Button>
</Col>
</Row>
<Row className="justify-content-md-center">
<Col xs="12" md="12" lg="12">  
{Win==='Empate'?
<h1>{Win}</h1>
:<h1>Gano: {
Win==='Player'?
' "'+props.player+'"':' "'+Win+'"'}</h1>}
</Col>
</Row>
</Container>




</>
}
      </div>  
    
      </div>
  </div>  
  );
}

export default Game;
