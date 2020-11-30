import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Login from "./Login.js";
import Cliente from "./Cliente.js";
import Analista from "./Analista.js";
//import DesarrolladorInterno from "./DesarrolladorInterno.js";
//import DesarrolladorExtern from "./DesarrolladorExtern.js";
//import JefeDeProyecto from "./JefeDeProyecto.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    
      
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link  href="/login">Login</Nav.Link>
          </Nav> 
         
        </Navbar>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/Cliente">
            <Cliente />
          </Route>

          <Route path="/Analista">
            <Analista />
          </Route>

          
        
          
          <Route path="/">
            <div>Desarrolladores de Software</div>
          </Route>
        </Switch>
     
      </Router>
      </div>
      
  );
}

export default App;
