import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';

function AsignarEstado(props){
	
	
	return (
		<Form>
		  <Form.Group controlId="formBasicRequisito">
		    <Form.Label>id Requisito</Form.Label>
		    <Form.Control  type="username" placeholder="id del requisito" />
		    <Form.Text className="text-muted">
		    </Form.Text>
		  </Form.Group>

		  <Form.Group controlId="formBasicEstado">
		    <Form.Label>Estado</Form.Label>
		    <Form.Control type="username" placeholder="Libre/Asignado" />
		  </Form.Group>

		  <Button variant="primary" type="submit">
		    Asignar
		  </Button>
		</Form>
	);
}

export default AsignarEstado;
