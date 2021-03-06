import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Button, TextField, Modal} from '@material-ui/core';
import Cookies from 'universal-cookie';
import {makeStyles} from '@material-ui/core/styles';
import {Delete} from '@material-ui/icons';



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
  

function Commentary(props) {
    const styles= useStyles();
    const cookies = new Cookies();
	const [data, setData] = useState([]);
	const [modalEliminar, setModalEliminar]=useState(false);

	const peticionesGet=async()=>{
        await axios.get('http://localhost:4000/client/project/comment/'+cookies.get('username'))
        .then(res=>{
            setData(res.data);
        })
    }

  
    useEffect(async()=>{
        await peticionesGet();
	},[])
	
	const abrirCerrarModalEliminar=()=>{
		setModalEliminar(!modalEliminar);
	}

	const seleccionarProject=(project, caso)=>{
		setProjectSeleccionada(project);
		if(caso==='Eliminar'){
			abrirCerrarModalEliminar()
		}
	}

	const [projectSeleccionada, setProjectSeleccionada]=useState({
		id: '',
		project:'',
		client: '',
		message: ''
	})

	const peticionDelete=async()=>{
		console.log(projectSeleccionada.id);
		await axios.delete('http://localhost:4000/client/project/comment/delete/'+projectSeleccionada.id)
		.then(res=>{
		  setData(data.filter(project=>project.id!==projectSeleccionada.id));
		  abrirCerrarModalEliminar();
		})
	}

	const bodyEliminar=(
		<div className={styles.modal}>
		  <p>Estás seguro que deseas eliminar este comentario ? </p>
		  <div align="right">
			<Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
			<Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
	
		  </div>
	
		</div>
	)

     
    return(
		<div className="App-header">
            
		<TableContainer>
		<div className="container p-3 my-3 bg-light text-white rounded">
			<Table>
			
				<TableHead>
					<TableRow>
						<TableCell> Proyecto  </TableCell>
						<TableCell> Comentarios  </TableCell>
						<TableCell> Eliminar Comentario </TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{data.map(message=>(
						<TableRow Key={message.id}>
							<TableCell>{message.project }</TableCell>
							<TableCell>{message.message }</TableCell>
							<TableCell>								
								<Delete  className={styles.iconos} onClick={()=>seleccionarProject(message, 'Eliminar')}/>
							</TableCell>
											
						</TableRow>
					))}
				</TableBody>
			
			</Table>
		   </div>
		</TableContainer>
		<Modal
		open={modalEliminar}
		onClose={abrirCerrarModalEliminar}>
			{bodyEliminar}
		</Modal>
		
		
		</div>
        
    )
}

export default Commentary;