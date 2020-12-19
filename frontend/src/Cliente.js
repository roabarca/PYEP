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

import Proyect from './ProyectoCliente.js';
import Commentary from './Commentary.js';


function Cliente() {
    return (
      <Router>
        
        <div className="Proyecto">
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/Cliente/Project">Proyecto</Nav.Link> 
              <Nav.Link as={Link} to="/Cliente/Comment">Comentario</Nav.Link>  
            </Nav> 
          </Navbar>
          
          <Switch>              
            <Route path="/Cliente/Project">
              <Proyect />              
            </Route>
            <Route path="/Cliente/Comment">
                   <Commentary/>        
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default Cliente;
  