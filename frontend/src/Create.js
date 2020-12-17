import React, { useState} from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';
import {createProyect} from './redux/actions/proyectActions.js';



//Analista crea proyecto
function Create(props) {
	
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [project_manager, setProject_manager] = useState('');
	const [client, setClient] = useState('');
	const [estado, setEstado] = useState('');

	const handleName = (e) => {
		setName(e.target.value);
	}

	const handleDescription = (e) => {
		setDescription(e.target.value);
	}

	const handleProject_manager = (e) => {
		setProject_manager(e.target.value);
	}

	const handleClient = (e) => {
		setClient(e.target.value);
	}




	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/register/project", {
			name: name,
			description: description,
			project_manager: project_manager,
			client: client,
			
			
			
		}).then((data) => {
			
			
			
		});
	}
	
	return (
        <Form>
			{estado !== '' && (
				<Alert variant={estado === 'OK' ? 'success' : 'danger'}>
					{estado}
				</Alert>
			)}
	

		  <Form.Group>
		    <Form.Label>Name</Form.Label>
		    <Form.Control onChange={handleName} type="text" placeholder="Name" />
		  </Form.Group>
		  <Form.Group>
		    <Form.Label>Description</Form.Label>
		    <Form.Control onChange={handleDescription} type="text" placeholder="Description" />
		  </Form.Group>
		  <Form.Group>
		    <Form.Label>Project_manager</Form.Label>
		    <Form.Control onChange={handleProject_manager} type="text" placeholder="Project_manager" />
		  </Form.Group>
		  <Form.Group>
		    <Form.Label>Client</Form.Label>
		    <Form.Control onChange={handleClient} type="text" placeholder="Client" />
		  </Form.Group>
		
		  <Button variant="outline-success" onClick={handleSubmit} variant="primary" type="submit">
		    Crear Proyecto
		  </Button>
		</Form>
	);
}

export default Create;
