import React from "react";
import "./Perfil.css";
import ListGroup from 'react-bootstrap/ListGroup';
import {Form, Col, Button} from "react-bootstrap";

const vini = {
email: "vvvvvv@gmail.com",
nome: "Vinícius Passos",
idade: "22",
telefone:"00000000",
estado:"DF",
cidade:"Brasília",
cep:"XXXXXXXX",

};

function Cliente(props){
    return(
        <div>
            <ListGroup>
              <ListGroup.Item>Nome: {props.cliente.nome}</ListGroup.Item>
              <ListGroup.Item>Idade: {props.cliente.idade}</ListGroup.Item>
              <ListGroup.Item>Email: {props.cliente.email}</ListGroup.Item>
              <ListGroup.Item>Telefone: {props.cliente.telefone}</ListGroup.Item>
              <ListGroup.Item>Estado: {props.cliente.estado}</ListGroup.Item>
              <ListGroup.Item>Cidade: {props.cliente.cidade}</ListGroup.Item>
              <ListGroup.Item>CEP: {props.cliente.cep}</ListGroup.Item>
            </ListGroup>
        </div>
    );

};

function AlteraSenha() {
    
}

function Perfil() {
    return (
    <div className= "base">
        <div className = "centro">
            <div className= "container">
                <div className= "outputs">
                    <h1>Perfil</h1>
                    <Cliente cliente={vini}/>
                    <Button variant="outline-info">Editar</Button>
                    <Form>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridNovaSenha">
                            
                            <Form.Control type="text" placeholder="Digite sua nova senha" />
                            </Form.Group>
                        </Form.Row> 
                        <Form>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridConfirmar">
                            
                            <Form.Control type="text" placeholder="Confirme sua nova senha" />
                            </Form.Group>
                        </Form.Row>
                        </Form> 
                    </Form>
                    <Button variant="outline-info">Mudar Senha</Button>    
                </div>
            </div>
        </div>
    </div>
        );
}

export default Perfil;