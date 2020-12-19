
import React, { useState, Component } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import {  useDispatch } from 'react-redux';
import {login, logout} from './redux/actions/authActions.js';
import Cookies from 'universal-cookie';

function Login(props) {
	//Variables para manejar el estado del formulario
	const [username, setUsername] = useState('');
	const [password, setPass] = useState('');
	const dispatch = useDispatch();
	//Funciones que manejen los cambios en las variables
	
	const cookies = new Cookies();

	const handleUsername = (e) => {
		setUsername(e.target.value);
	}

	const handlePass = (e) => {
		setPass(e.target.value);
	}

	const handleLogout = (e) => {
		dispatch(logout());
	}

	const handleDev = async (e) => {
        await axios.get('http://localhost:4000/login/getDev/'+cookies.get('username'))
        .then(res => {
            if(res.data==='de'){
                cookies.set('type', 'external_developer', {path: "/"});
                window.location.href = "/DesarrolladorExterno";
            }
            else{
                cookies.set('type', 'internal_developer', {path: "/"});
                window.location.href = "/DesarrolladorInterno";
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/login', {
            username: username,
            password: password
        })
        .then(res => {
            return res.data;
        })
        .then(res => {
            cookies.set('username', res.username, {path: "/"});
            if(res.client){
                cookies.set('type', 'client', {path: "/"});
                window.location.href = "/Cliente";
            }
            else if(res.developer){
                handleDev();
            }
            else if(res.analyst){
                cookies.set('type', 'analyst', {path: "/"});
                window.location.href = "/Analista";
            }
            else if(res.pm){
                cookies.set('type', 'project_manager', {path: "/"});
                window.location.href = "/JefeDeProyecto";
            }
        })
    }
	

	return (
		<div className="App-header">
		<Form>
		<div className="container-sm p-3 bg-dark text-white">
			
			<Form.Group controlId="formBasicUsername">
			  <Form.Label>Username</Form.Label>
			  <Form.Control onChange={handleUsername} type="username" placeholder="Username" />
			  <Form.Text className="text-muted">
			  </Form.Text>
			</Form.Group>
  
			<Form.Group controlId="formBasicPassword">
			  <Form.Label>Password</Form.Label>
			  <Form.Control onChange={handlePass} type="password" placeholder="Password" />
			</Form.Group>
  
			<Button  onClick={handleSubmit} variant="primary" type="submit">
			  Enviar
			</Button>
  
			<Button  onClick={handleLogout} variant="danger" type="button">
			  Volver
			</Button>
		  </div>
		</Form>
		</div>
	);
}

export default Login;