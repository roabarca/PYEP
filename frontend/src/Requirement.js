import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';

const baseUrl='http://localhost:4000/analyst/requirement'
const baseUrl2='http://localhost:4000/analyst/requirement/add'
const baseUrl3='http://localhost:4000/analyst/requirement/edit/'
const baseUrl4='http://localhost:4000/analyst/requirement/delete/'

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

function Requirement() {
const styles= useStyles();
  const [data, setData]=useState([]);
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);
  const [modalEliminar, setModalEliminar]=useState(false);

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
    console.log(projectSeleccionada);
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(res=>{
      setData(res.data);
    })
  }

  const peticionPost=async()=>{
    if(projectSeleccionada.developer== '' && projectSeleccionada.developer== '' ){
      await axios.post(baseUrl2, {
        name: projectSeleccionada.name,
        description: projectSeleccionada.description,
        project: projectSeleccionada.project        
      })
      .then(res=>{
      setData(data.concat(res.data))
      abrirCerrarModalInsertar()
    })
    }

    else if(projectSeleccionada.developer== ''){
      await axios.post(baseUrl2, {
        name: projectSeleccionada.name,
        description: projectSeleccionada.description,
        price: projectSeleccionada.price,
        project: projectSeleccionada.project        
      })
      .then(res=>{
      setData(data.concat(res.data))
      abrirCerrarModalInsertar()
    })
    }
    
    else if(projectSeleccionada.price== ''){
      await axios.post(baseUrl2, {
        name: projectSeleccionada.name,
        description: projectSeleccionada.description,
        developer: projectSeleccionada.developer,
        project: projectSeleccionada.project        
      })
      .then(res=>{
      setData(data.concat(res.data))
      abrirCerrarModalInsertar()
    })
    }

    else{
      await axios.post(baseUrl2, projectSeleccionada)
      .then(res=>{
      setData(data.concat(res.data))
      abrirCerrarModalInsertar()
    })
    }
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl3+projectSeleccionada.id, projectSeleccionada)
    .then(res=>{
      var dataNueva=data;
      dataNueva.map(project=>{
        if(projectSeleccionada.id===project.id){
			project.name=projectSeleccionada.name;
			project.description=projectSeleccionada.description;
			project.developer=projectSeleccionada.developer;
			project.price=projectSeleccionada.price;
			project.project=projectSeleccionada.project;
        }
      })
      setData(dataNueva);
      abrirCerrarModalEditar();
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseUrl4+projectSeleccionada.id)
    .then(res=>{
      setData(data.filter(project=>project.id!==projectSeleccionada.id));
      abrirCerrarModalEliminar();
    })
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarProject=(project, caso)=>{
    setProjectSeleccionada(project);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }

  useEffect(async()=>{
    await peticionGet();
  },[])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Requisito</h3>
      <TextField name="name" className={styles.inputMaterial} label="Nombre" onChange={handleChange}/>
      <br />
	  <TextField name="description" className={styles.inputMaterial} label="Descripcion" onChange={handleChange}/>
      <br />
      <TextField name="developer" className={styles.inputMaterial} label="Desarrollador" onChange={handleChange}/>
      <br />
      <TextField name="price" className={styles.inputMaterial} label="Precio" onChange={handleChange}/>
      <br />
      <TextField name="project" className={styles.inputMaterial} label="Proyecto" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Requisito </h3>
      
      
	  <TextField name="name" className={styles.inputMaterial} label="Nombre" onChange={handleChange} value={projectSeleccionada && projectSeleccionada.name}/>
      <br />
      <TextField name="description" className={styles.inputMaterial} label="Descripcion" onChange={handleChange} value={projectSeleccionada && projectSeleccionada.description}/>
      <br />
      <TextField name="developer" className={styles.inputMaterial} label="Desarrolador" onChange={handleChange} value={projectSeleccionada && projectSeleccionada.developer}/>
      <br />
      <TextField name="price" className={styles.inputMaterial} label="Precio" onChange={handleChange} value={projectSeleccionada && projectSeleccionada.price}/>
      <br />
	  <TextField name="project" className={styles.inputMaterial} label="Proyecto" onChange={handleChange} value={projectSeleccionada && projectSeleccionada.project}/>
	  <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el requisito  ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )


  return (
    <div className="App-header">
      <div className="container p-3 my-3 bg-light text-white rounded">
      <br />
    <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button>
      <br /><br />
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
				<TableCell> Acciones </TableCell>	
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
                 <Edit className={styles.iconos} onClick={()=>seleccionarProject(project, 'Editar')}/>
                 &nbsp;&nbsp;&nbsp;
                 <Delete  className={styles.iconos} onClick={()=>seleccionarProject(project, 'Eliminar')}/>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     </div>
     
     <Modal
     open={modalInsertar}
     onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
     </Modal>

     <Modal
     open={modalEditar}
     onClose={abrirCerrarModalEditar}>
        {bodyEditar}
     </Modal>

     <Modal
     open={modalEliminar}
     onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
     </Modal>
    </div>
  );
}

export default Requirement;