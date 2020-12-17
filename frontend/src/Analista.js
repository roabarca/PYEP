import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Register from "./Register.js";
import Requirement from "./Requirement.js";
import Create from './Create.js';
import LikeAnalista from './LikeAnalista.js';
import SendRequirement from './SendRequirement.js';
import Proyect from './Proyect.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Analista() {
  return (
    <Router>
      
      <div className="Analista">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Analista</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Proyecto">Proyecto</Nav.Link>    
            <Nav.Link as={Link} to="/Requerimiento">Requerimientos</Nav.Link>
            <Nav.Link as={Link} to="/Analista/RegistrarCliente">Registrar cliente</Nav.Link>
          </Nav> 
        </Navbar>
        
        <Switch>              
          <Route path="/Proyecto">
            <Proyect />
            <Create />
            <LikeAnalista />
          </Route>
          
          <Route path="/Requerimiento">
            <Requirement />
            <SendRequirement />
          </Route>

          <Route path="/Analista/RegistrarCliente">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Analista;
