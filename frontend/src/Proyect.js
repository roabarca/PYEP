import React, { useState, useEffects } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import {ListGroup,Tab,Row,Col} from "react-bootstrap";

function Proyect(props) {
	
	//hay que hacer el axios
	return (
        <Table striped bordered hover variant="dark">
				<thead>
					<tr>
					{/*en la conexion debe diferenciarse usuario y
					analista, mediante los submit*/}
					<th>Nombre</th>
					<th>Estado Actual</th>
					<th>Estado Futuro</th>
					<th>Estado</th>
					<th>Proyecto</th>
					</tr>
				</thead>
				
				<tbody>

					<tr>
					<td>name</td>
					<td>actualstate</td>
					<td>futurestate</td>
					<td>state</td>
					<td>project</td>
					</tr>

				</tbody>
		</Table>
		
	);
}


export default Proyect;
