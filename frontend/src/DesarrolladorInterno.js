import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Aceptados from "./Aceptados.js";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function DesarrolladorInterno() {
    return (
        <Router>
          
          <div className="Interno">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Desarrollador Interno</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/Aceptados">Trabajos Asignados</Nav.Link>    
              </Nav> 
            </Navbar>
            
            <Switch>              
              <Route path="/Aceptados">
                <Aceptados />
              </Route>
              
            </Switch>
          </div>
        </Router>
    );
}

export default DesarrolladorInterno;
