import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Button, TextField, Modal} from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircle';
import Cookies from 'universal-cookie';
import {makeStyles} from '@material-ui/core/styles';



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
  

function Proyect(props) {
    const styles= useStyles();
    const cookies = new Cookies();
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar]=useState(false);
    const [modalEditar, setModalEditar]=useState(false);


    const peticionesGet=async()=>{
        await axios.get('http://localhost:4000/client/project/'+cookies.get('username'))
        .then(res=>{
            setData(res.data);
        })
    }
  
    useEffect(async()=>{
        await peticionesGet();
    },[])

    const [projectSeleccionada, setProjectSeleccionada]=useState({
        message: ''

    })

    const handleChange=e=>{
        const {name, value}=e.target;
        setProjectSeleccionada(prevState=>({
          ...prevState,
          [name]: value
        }))
        console.log(projectSeleccionada);
    }

    const peticionPost=async()=>{
      console.log(projectSeleccionada.id);
      console.log(projectSeleccionada.comment);
      console.log(projectSeleccionada.client);
        await axios.post('http://localhost:4000/client/project/comment', {
          project: projectSeleccionada.id,
          message: projectSeleccionada.comment,
          client: projectSeleccionada.client
        })
        .then(res=>{
          setData(data.concat(res.data))
          abrirCerrarModalInsertar()
        })
    }

    const abrirCerrarModalInsertar=()=>{
        setModalInsertar(!modalInsertar);
    }

    const abrirCerrarModalEditar=()=>{
        setModalEditar(!modalEditar);
    }

    const seleccionarProject=(project, caso)=>{
    setProjectSeleccionada(project);
    if(caso==='Agregar'){     
      abrirCerrarModalInsertar()
    }
    else if(caso==='Aprobar'){
      axios.put('http://localhost:4000/client/project/editProgress',{
        id: projectSeleccionada.id,
        progress: true
      })
      .then(res=>{
        var dataNueva=data;
        dataNueva.map(project=>{
          if(projectSeleccionada.id===project.id){
        project.progress=true;        
         }
        })
        setData(dataNueva);
      })
    }
    else if(caso==='Rechazar'){
      
      axios.put('http://localhost:4000/client/project/editProgress',{
         
        id: projectSeleccionada.id,
        progress: false
      })
      .then(res=>{
        var dataNueva=data;
        dataNueva.map(project=>{
          if(projectSeleccionada.id===project.id){
            project.progress=false;        
         }
        })
        setData(dataNueva);
      })
      }
    }
    

    const bodyInsertar=(
        <div className={styles.modal}>
          <h3>Agregar Un Comentario al Proyecto</h3>
          <TextField name="comment" className={styles.inputMaterial} label="Comentario" onChange={handleChange}/>
          <br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPost()}>Guardar</Button>
            <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
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
                            <TableCell> ID  </TableCell>
                            <TableCell> Nombre  </TableCell>
                            <TableCell> Descripcion </TableCell>
                            <TableCell> Jefe de Proyecto </TableCell>
                            <TableCell> Cliente </TableCell>
                            <TableCell> Avance </TableCell>
                            <TableCell> Estado </TableCell>
                            &nbsp;&nbsp;&nbsp;
                            <TableCell> Agregar Comentario </TableCell>
                            <TableCell>          Aprobar/Rechazar            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map(project=>(
                            <TableRow Key={project.id}>
                                <TableCell>{project.id }</TableCell>
                                <TableCell>{project.name }</TableCell>
                                <TableCell>{project.description }</TableCell>
                                <TableCell>{project.project_manager }</TableCell>
                                <TableCell>{project.client }</TableCell>
                                <TableCell>{project.progress ? 'Aceptado' : 'Rechazado' }</TableCell>
                                <TableCell>{project.state ? 'Finalizado' : 'No finalizado' }</TableCell>
                                &nbsp;
                                <TableCell>
      
                                  <AddIcon color='secondary' className={styles.iconos} onClick={()=>seleccionarProject(project, 'Agregar')}/>
                                </TableCell>
                                <TableCell>
                                
                                <Button variant="contained" color="primary" onClick={()=>seleccionarProject(project, 'Aprobar')} >  Aprobar  </Button>
                                                                             
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="contained" color="secondary" onClick={()=>seleccionarProject(project, 'Rechazar')} >Rechazar</Button>
                                                                          
                                
                                </TableCell>  

                                
                            </TableRow>
                        ))}
                    </TableBody>
                
                </Table>
               </div>
            </TableContainer>
            
            <Modal
            open={modalInsertar}
            onClose={abrirCerrarModalInsertar}>
                {bodyInsertar}
            </Modal>
            
            
            </div>
        
    )
}

export default Proyect;