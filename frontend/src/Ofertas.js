import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircle';
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

function Ofertas() {
const styles= useStyles();
  const [data, setData]=useState([]);   
  const [modalEditar, setModalEditar]=useState(false);
  const [projectSeleccionada, setProjectSeleccionada]=useState({
    name: '',
    description:'',
    developer: '',
    price: '',
    project: ''
  }) 

  const handleChange=e=>{
    const {name, value}=e.target;
    setProjectSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }))
  }
  

  
  const peticionGet=async()=>{
    await axios.get('http://localhost:4000/ExternalDeveloper/requirement/available/')
    .then(res=>{
      setData(res.data);
    })
  }

  const seleccionarProject=(project, caso)=>{
    setProjectSeleccionada(project);
    if(caso==='Agregar'){     
      abrirCerrarModalEditar()
    }
  }


	useEffect(async()=>{
		await peticionGet();
  },[])

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }
  const cookies = new Cookies();
  const peticionPut=async()=>{
    console.log(projectSeleccionada.price);
    await axios.put('http://localhost:4000/ExternalDeveloper/requirement/get/'+projectSeleccionada.id, {
      
      developer: cookies.get('username'),
      price: projectSeleccionada.price
    })
    .then(res=>{
      var dataNueva=data;
      dataNueva.map(project=>{
        if(projectSeleccionada.id===project.id){			
			project.developer=cookies.get('username');
			project.price=projectSeleccionada.price;			
        }
      })
      setData(dataNueva);
      abrirCerrarModalEditar();
    })
  }
  
  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Crear Cotizacion </h3>     
     
      <TextField name="price" className={styles.inputMaterial} label="Precio" onChange={handleChange} value={projectSeleccionada && projectSeleccionada.price}/>    
	  <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Aceptar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
    )


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
        <TableCell> Cotizar  </TableCell>
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
          <Button variant="contained" color="primary" onClick={()=>seleccionarProject(project, 'Agregar')} >  Agregar  </Button>
         </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     </div>
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
            {bodyEditar}
        </Modal>
    </div>
  );
}

export default Ofertas;