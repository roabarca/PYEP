import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';

function AsignarValor(props){
	{/* No se cuantos valores se pueden cambiar, pero debe ser la idea general */}
	return (
		<Form>
		  <Form.Group controlId="formBasicRequisito">
		    <Form.Label>id Requisito</Form.Label>
		    <Form.Control  type="username" placeholder="id del requisito" />
		    <Form.Text className="text-muted">
		    </Form.Text>
		  </Form.Group>

		  <Form.Group controlId="formBasicValor">
		    <Form.Label>Valor</Form.Label>
		    <Form.Control  type="username" placeholder="Valor del recurso" />
		  </Form.Group>

          <Form.Group controlId="formBasicTiempo">
		    <Form.Label>Tiempo</Form.Label>
		    <Form.Control  type="username" placeholder="Tiempo requerido" />
		  </Form.Group>

		  <Button  variant="primary" type="submit">
		    Asignar
		  </Button>
		</Form>
	);
}

export default AsignarValor;
