import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import Cookies from 'universal-cookie';


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function Aceptados() {
const styles= useStyles();
  const [data, setData]=useState([]);  
  const cookies = new Cookies();

  
  const peticionGet=async()=>{
    await axios.get('http://localhost:4000/InternalDeveloper/requirement/'+cookies.get('username'))
    .then(res=>{
      setData(res.data);
    })
  }

	useEffect(async()=>{
		await peticionGet();
	},[])

  return (
    <div className="App-header">
      <div className="container p-3 my-3 bg-light text-white rounded">
     <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
				<TableCell>ID</TableCell>
				<TableCell> Nombre  </TableCell>
				<TableCell> Descripcion </TableCell>
				<TableCell> Desarrollador </TableCell>
				<TableCell> Precio </TableCell>
				<TableCell> Proyecto </TableCell>			
				<TableCell> Finalizado  </TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {data.map(project=>(
             <TableRow key={project.id}>
               <TableCell>{project.id}</TableCell>
               <TableCell>{project.name}</TableCell>
               <TableCell>{project.description}</TableCell>
               <TableCell>{project.developer}</TableCell>
			   <TableCell>{project.price}</TableCell>
               <TableCell>{project.project}</TableCell>
               
			   <TableCell>{project.finished ? 'Si' : 'No'}</TableCell>              
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     </div>
    </div>
  );
}

export default Aceptados;