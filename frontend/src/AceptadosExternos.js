
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
  

function AceptadosExternos(props) {
    const styles= useStyles();
    const cookies = new Cookies();
	const [data, setData] = useState([]);
	const [modalEliminar, setModalEliminar]=useState(false);

  const peticionesGet=async()=>{
    await axios.get('http://localhost:4000/ExternalDeveloper/requirement/list/'+cookies.get('username'))
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

	const peticionPut=async()=>{
    console.log(projectSeleccionada.price);
    await axios.put('http://localhost:4000/ExternalDeveloper/requirement/delete/'+projectSeleccionada.id, {
      developer: cookies.get('username'),
    
    })
    .then(res=>{
      var dataNueva=data;
      dataNueva.map(project=>{
        if(projectSeleccionada.id===project.id){			
			project.developer='';
			project.price='';			
        }
      })
      setData(dataNueva);
      abrirCerrarModalEliminar();
    })
  }

	const bodyEliminar=(
		<div className={styles.modal}>
		  <p>Estás seguro que deseas abandonar este requisito ? </p>
		  <div align="right">
			<Button color="secondary" onClick={()=>peticionPut()} >Sí</Button>
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
          <TableCell>ID</TableCell>
				<TableCell> Nombre  </TableCell>
				<TableCell> Descripcion </TableCell>
				<TableCell> Desarrollador </TableCell>
				<TableCell> Precio </TableCell>
				<TableCell> Proyecto </TableCell>			
				<TableCell> Finalizado  </TableCell>
        <TableCell> Eliminar  </TableCell>
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
            <TableCell>								
								<Delete  className={styles.iconos} onClick={()=>seleccionarProject(project, 'Eliminar')}/>
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

export default AceptadosExternos;