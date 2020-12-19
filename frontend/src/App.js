import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Header, Navigation, Drawer, Content, Grid, Cell } from 'react-mdl'
import Cookies from "universal-cookie"
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Login from "./Login.js";
import Cliente from "./Cliente.js";
import Analista from "./Analista.js";
import DesarrolladorInterno from "./DesarrolladorInterno.js";
import DesarrolladorExterno from "./DesarrolladorExterno.js";
import JefeDeProyecto from "./JefeDeProyecto.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component{
  render(){
    let cookies = new Cookies();
    return (    
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Inicio</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/Login">Iniciar Sesion</Nav.Link>
          </Nav>
        </Navbar>
        
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/Cliente">
            <Cliente />
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male-256.png"
              alt="avatar_client"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>
              Bienvenido/a Cliente
              </h1>
            <hr/>

            <p> Aquí podrás observar y supervisar tus proyectos. </p>

            </div>
          </Cell>
        </Grid>
      </div>
          </Route>

          <Route path="/Analista">
            <Analista />
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
              alt="avatar_analista"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>
              Bienvenido/a Analista
              </h1>
            <hr/>

            <p> Aquí podrás realizar tus tareas como la gestión de proyectos y requisitos, además de un registro al cliente. </p>

            </div>
          </Cell>
        </Grid>
      </div>
          </Route>

          <Route path="/DesarrolladorExterno">
            <DesarrolladorExterno />
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png"
              alt="avatar_client"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>
              Bienvenido/a Desarrollador Externo
              </h1>
            <hr/>

            <p> Aquí podrás observar y supervisar tus proyectos. </p>

            </div>
          </Cell>
        </Grid>
      </div>
          </Route>

          <Route path="/DesarrolladorInterno">
            <DesarrolladorInterno />
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male_2-256.png"
              alt="avatar_client"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>
              Bienvenido/a Desarrollador Interno
              </h1>
            <hr/>

            <p> Aquí podrás observar y supervisar tus proyectos. </p>

            </div>
          </Cell>
        </Grid>
      </div>
          </Route>

          <Route path="/JefeDeProyecto">
            <JefeDeProyecto />
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"
              alt="avatar_jp"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>
              Bienvenido/a Jefe de Proyecto
              </h1>
            <hr/>

            <p> Aquí podrás realizar tus tareas como la gestión de proyectos y requisitos. </p>

            </div>
          </Cell>
        </Grid>
      </div>
          </Route>

          <Route path="/">
          <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.pixabay.com/photo/2016/09/30/19/30/monitor-1706153_960_720.png"
              alt="logo"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Proyecto Analisis y Diseño de Software</h1>

            <hr/>

            <p> Roberto Abarca | Phillipa Paredes | Daniel Roco </p>

            </div>
          </Cell>
        </Grid>
      </div>
          </Route>
        </Switch>
     
      </Router>
      </div>
      
  );
  }
  
}

export default App;
