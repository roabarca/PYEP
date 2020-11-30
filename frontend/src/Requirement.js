import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
//import {createRequirement} from './redux/actions/requerimentAction.js';

function Requirement(props) {
	
	
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [developer, setDeveloper] = useState('');
	const [price, setPrice] = useState('');
	//const [state, setState] = useState('');
	const [project, setProject] = useState('');
	const [estado, setEstado] = useState('');

	/*const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/analyst/requirement", {
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
	}*/ 
	
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/analyst/requirement", {
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
	
	return(
				<Table striped bordered hover variant="dark">
				<thead>
					<tr>
					<th>Nombre</th>
					<th>Descripcion</th>
					<th>Desarrolador</th>
					<th>Precio</th>
					<th>Estado</th>
					<th>Poryecto</th>
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

				<tbody>

					<tr>
					<td>name2</td>
					<td>description2</td>
					<td>developer2</td>
					<td>price2</td>
					<td>state2</td>
					<td>project2</td>
					</tr>
					

				</tbody>

				<tbody>

					<tr>
					<td>name3</td>
					<td>description3</td>
					<td>developer3</td>
					<td>price3</td>
					<td>state3</td>
					<td>project3</td>
					</tr>

				</tbody>
				</Table>
	
	)
}

export default Requirement;
