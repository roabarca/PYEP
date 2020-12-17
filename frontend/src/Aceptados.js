import React, { useState, useEffects } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import {ListGroup,Tab,Row,Col} from "react-bootstrap";

function Aceptados(props) {
	
	//hay que hacer el axios
	return (
        <Table striped bordered hover variant="dark">
				<thead>
					<tr>
					{/*en la conexion debe diferenciarse usuario y
					analista, mediante los submit*/}
					<th>N° Requisito</th>
					<th>Estado Actual</th>
					<th>Descripcion</th>
					<th>Proyecto</th>
					</tr>
				</thead>
				
				<tbody>

					<tr>
					<td>name</td>
					<td>actualstate</td>
					<td>description</td>
					<td>project</td>
					</tr>

				</tbody>
		</Table>
		
	);
}


export default Aceptados;
