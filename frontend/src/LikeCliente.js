import React, { useState, useEffects } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';

function LikeCliente(props) {
	const [state, setState] = useState('');
	const [estado, setEstado] = useState('');
	
	const handleStateA = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/projects", {
			state : true
		}).then((data) => {
			
			setEstado('OK');
			console.log(data);
		}).catch((error) => {
			setEstado('ERROR')
		});
	}

	const handleStateR = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/register/project", {
			state : false
		}).then((data) => {
			
			setEstado('OK');
			console.log(data);
		}).catch((error) => {
			setEstado('ERROR')
		});
	}

	return (
		  <Form>
			  
		  <Button onClick={handleStateA} variant="primary" type="submit">
		    Aceptar estado actual
		  </Button>

		  <Button onClick={handleStateR} variant="primary" type="submit">
		    Rechazar estado actual
		  </Button>

		  </Form>
	);
}



export default LikeCliente;
