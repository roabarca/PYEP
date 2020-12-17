import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Requirement(props) {
	
	
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [developer, setDeveloper] = useState('');
	const [price, setPrice] = useState('');
	const [state, setState] = useState('');
	const [project, setProject] = useState('');

	/*axios.get("http://localhost:4000/...requirementsRoute), {

		name: name,
        description: description,
        developer: developer,
        price: price,
        state: state,
        project: project
	}*/ 
	
	
	
	return(
				<Table striped bordered hover variant="dark">
				<thead>
					<tr>
					<th>Nombre</th>
					<th>Descripcion</th>
					<th>Desarrolador</th>
					<th>Precio</th>
					<th>Estado</th>
					<th>Proyecto</th>
					</tr>
				</thead>
				
				<tbody>

					<tr>
					<td>name</td>
					<td>description</td>
					<td>developer</td>
					<td>price</td>
					<td>state</td>
					<td>project</td>
					</tr>

				</tbody>
				</Table>
	
	)
}

export default Requirement;
