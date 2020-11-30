import React, { useState} from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';
//import {fetchRequirements} from '/redux/actions/requerimentAction.js';

function SendRequirement(props) {
	
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [developer, setDeveloper] = useState('');
	const [price, setPrice] = useState('');
	
	const [project, setProject] = useState('');
	const [estado, setEstado] = useState('');
	

	const handleName = (e) => {
		setName(e.target.value);
	}

	const handleDescription = (e) => {
		setDescription(e.target.value);
	}

	const handleDeveloper = (e) => {
		setDeveloper(e.target.value);
	}

	const handlePrice = (e) => {
		setPrice(e.target.value);
	}

	
	const handleProject = (e) => {
		setProject(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/analyst/requirement/add", {
			name: name,
			description: description,
			developer: developer,
			price: price,
			project: project
		
		}).then((data) => {

			setEstado('OK');
			console.log(data);
			
		}).catch((error) => {
			setEstado('ERROR')
		});
	}

	return (
		<Form>
			{estado !== '' && (
				<Alert variant={estado === 'OK' ? 'success' : 'danger'}>
					{estado}
				</Alert>
			)}

		  <Form.Group >
		    <Form.Label>Name</Form.Label>
		    <Form.Control onChange={handleName} type="text" placeholder="Name" />
		  </Form.Group>	

		  <Form.Group>
		    <Form.Label>Description</Form.Label>
		    <Form.Control onChange={handleDescription} type="text" placeholder="Enter Description" />
		  </Form.Group>

		  <Form.Group>
		    <Form.Label>Developer</Form.Label>
		    <Form.Control onChange={handleDeveloper} type="text" placeholder="Developer" />
		  </Form.Group>

	      <Form.Group>
		    <Form.Label>Price</Form.Label>
		    <Form.Control onChange={handlePrice} type="text" placeholder="Price" />
		  </Form.Group>

		  <Form.Group>
		    <Form.Label>Proyect</Form.Label>
		    <Form.Control onChange={handleProject} type="text" placeholder="Proyect" />
		  </Form.Group>

		  <Button onClick={handleSubmit} variant="primary" type="submit">
		    Agregar
		  </Button>
		</Form>
	);
}



export default SendRequirement;
