import React, { useState, useEffects } from 'react';
import axios from 'axios';
import {ListGroup,Tab,Row,Col} from "react-bootstrap";

function Proyect(props) {
	
	//hay que hacer el axios
	return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  			<Row>
    			<Col sm={4}>
      				<ListGroup>
        				<ListGroup.Item action href="#proyecto">
          					Informacion Proyecto
        				</ListGroup.Item>
						<ListGroup.Item action href="#requerimiento">
         					Requerimientos
        				</ListGroup.Item>
        				<ListGroup.Item action href="#comentario">
         					Comentarios
        				</ListGroup.Item>
      				</ListGroup>
    			</Col>
    			<Col sm={8}>
      				<Tab.Content>
        				<Tab.Pane eventKey="#proyecto">
          					"agregar clase"
        				</Tab.Pane>
						<Tab.Pane eventKey="#requerimiento">
          					"agregar clase"
        				</Tab.Pane>
        				<Tab.Pane eventKey="#comentario">
							"agregar clase"
        				</Tab.Pane>
      				</Tab.Content>
    			</Col>
  			</Row>
		</Tab.Container>
	);
}



export default Proyect;
