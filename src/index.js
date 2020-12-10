import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './componentes/App'
import Reglas from './componentes/Reglas'
import Game from './componentes/Game'
import Posiciones from './componentes/Posiciones'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from 'react-bootstrap/Dropdown'
import TextField from '@material-ui/core/TextField';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav =()=> {
  const classes = useStyles();
  const [Player, SetPlayer] = useState('');
  const [Add, SetAdd] = useState(false);
  const [PathRegla, SetPath] = useState(false);
  const [PathPositions, SetPathP] = useState(false);
  const [Match, SetMatch] = useState();

  function Set (e){return SetMatch(e)}

  console.log(Match)
  return (
  <Router>
  <div className={classes.root}>
  <AppBar position="static" id='nav' >
  <Toolbar>
  
  <Dropdown className={classes.menuButton}>
  <Dropdown.Toggle id="dropdown-basic" variant="secondary" className={classes.menuButton}>
  <MenuIcon />
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Typography variant="h6" className={classes.title}>
          {Add===true && Player.length>0? "Hola "+Player:null}
          </Typography>
    {Add===true?
    <>
    <span onClick={()=> {SetPath(false);SetPathP(false)}}><Dropdown.Item>Game</Dropdown.Item></span>
    <span onClick={()=> {SetPath(false);SetPathP(true)}}><Dropdown.Item>Posiciones</Dropdown.Item></span>
    <span onClick={()=> SetPath(true)}><Dropdown.Item>Reglas</Dropdown.Item></span>
    </>
    :
    <>
    <span onClick={()=> {SetPath(false);SetPathP(false)}}><Dropdown.Item>Home</Dropdown.Item></span>
    <span onClick={()=> SetPath(true)}><Dropdown.Item>Reglas</Dropdown.Item></span>
    </>}
    </Dropdown.Menu>
</Dropdown>
    {Add===false?
        <div className='user'>
        <TextField id="outlined-basic" autoComplete="off" onChange={Nick=> SetPlayer(Nick.target.value)} label="Player Nickname..." variant="outlined" />
        <Button style={{marginLeft:'2%'}} onClick={()=> Player.length>0?SetAdd(true):null} variant="outlined" >Add</Button>
      </div>
      :
      <div className='user'>
      <Button onClick={()=> {SetAdd(false);SetPlayer('');SetMatch('')}} variant="outlined" >Change Player</Button>
      </div>
      }
        </Toolbar>
      </AppBar>
    </div>
   <Switch>
   <Route exact path="/">
   {Add===true && Player.length>0? 
    PathRegla===false? 
    PathPositions===false?
    <Game match={Set} player={Player} inicial={Match}/>
    // Si el User esta logeado pero accede a las Posiciones
    :<Posiciones match={Match} player={Player}/>
    // Si el User esta logeado pero accede a las reglas
    :<Reglas /> 
    // Si no se cumple que el Player este logeado
    :PathRegla===false? <App/>:<Reglas />}
   </Route> 
   </Switch>
   </Router>  
  );
}


ReactDOM.render(
  <React.StrictMode>
  <Nav />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
