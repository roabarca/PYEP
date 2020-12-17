import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Requirement from "./Requirement.js";
import AsignarDesarrollador from './AsignarDesarrollador.js';
import AsignarValor from './AsignarValor.js';
import AsignarEstado from './AsignarEstado.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function JefeDeProyecto() {
  return (
    <Router>
      
      <div className="Analista">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Jefe de Proyecto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Requisitos">Requisitos</Nav.Link>    
          </Nav> 
        </Navbar>
        
        <Switch>              
          <Route path="/Requisitos">
            <Requirement />
            <AsignarValor />
            <AsignarEstado />
            <AsignarDesarrollador />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default JefeDeProyecto;
