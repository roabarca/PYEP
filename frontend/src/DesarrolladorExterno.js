import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';

import Ofertas from "./Ofertas.js";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function DesarrolladorExterno() {
  return (
    <Router>
      
      <div className="Externo">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Desarrollador Externo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Ofertas">Ofertas</Nav.Link>    
          </Nav> 
        </Navbar>
        
        <Switch>              
          <Route path="/Ofertas">
            <Ofertas />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default DesarrolladorExterno;
