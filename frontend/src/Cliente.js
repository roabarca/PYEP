/*ver avance del proyecto
hacer comentariios
aprobar o rechazar*/
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import Proyect from './Proyect.js';
import Commentary from './Commentary.js';
import LikeCliente from './LikeCliente.js';

function Cliente() {
    return (
      <Router>
        
        <div className="Proyecto">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Proyecto</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/Proyecto">Proyecto</Nav.Link>    
            </Nav> 
          </Navbar>
          
          <Switch>              
            <Route path="/Proyecto">
              <Proyect />
              <Commentary />
              <LikeCliente />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default Cliente;
  