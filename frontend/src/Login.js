import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import {  useDispatch } from 'react-redux';
import {login, logout} from './redux/actions/authActions.js';




function Login(props) {
	//Variables para manejar el estado del formulario
	const [username, setUsername] = useState('');
	const [password, setPass] = useState('');
	const [type, setType] = useState('');
	const dispatch = useDispatch();
	//Funciones que manejen los cambios en las variables
	

	const handleUsername = (e) => {
		setUsername(e.target.value);
	}

	const handlePass = (e) => {
		setPass(e.target.value);
	}

	const handleType = (e) => {
		setType(e.target.value);
	}

	const handleLogout = (e) => {
		dispatch(logout());
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/login", {
			username: username,
			password: password
			

		}).then((data)=> {
			
			if(type=="Cliente"){
				window.location.href = "/Cliente";	
			}
			if(type=="Analista"){
				window.location.href = "/Analista";				
			}			
			if(type=="Desarrollador Externo"){
				window.location.href = "/DesarrolladorExterno";
			}
			if(type=="Desarrollador nterno"){
				window.location.href = "/DesarrolladorInterno";
			}
			if(type=="Jefe De Proyecto"){
				window.location.href = "/JefeDeProyecto";
			}

			
			dispatch(login());
			localStorage.setItem('token', data.data.token);
			
		})
	}

	return (
		<Form>
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

		  <Form.Group>
		    <Form.Label>Type</Form.Label>
		    <Form.Control onChange={handleType} type="text" placeholder="Type" />
		  </Form.Group>

		  <Button  onClick={handleSubmit} variant="primary" type="submit">
		    Enviar
		  </Button>

		  <Button  onClick={handleLogout} variant="danger" type="button">
		    Volver
		  </Button>
		</Form>
	);
}

export default Login;