import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';

function Ofertas(props){
	
	const [message, setMessage] = useState('');
	const [estado, setEstado] = useState('');
	//quizas haya que agregar  client y project, no estoy segura
	const handleMessage = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/comment", {
			message: message
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

			<Form.Group>
				<Form.Label>Message</Form.Label>
				<Form.Control type="text" as="textarea" rows={3} placeholder="Message" />
			</Form.Group>

			<Button variant="primary" type="submit">
				Enviar Comentario
			</Button>
		</Form>
		  
	);
}

export default Ofertas;
