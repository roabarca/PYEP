import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';

function AsignarDesarrollador(props){
	
	
	return (
		<Form>
		  <Form.Group controlId="formBasicRequisito">
		    <Form.Label>id Requisito</Form.Label>
		    <Form.Control  type="username" placeholder="id del requisito" />
		    <Form.Text className="text-muted">
		    </Form.Text>
		  </Form.Group>

		  <Form.Group controlId="formBasicDesarrollador">
		    <Form.Label>id Desarrollador</Form.Label>
		    <Form.Control  type="username" placeholder="id del desarrollador" />
		  </Form.Group>

		  <Button  variant="primary" type="submit">
		    Asignar
		  </Button>
		</Form>
	);
}

export default AsignarDesarrollador;
