import React from "react";
import "./Perfil.css";
import ListGroup from 'react-bootstrap/ListGroup';
import {Form, Col, Button, Container, Row} from "react-bootstrap";

const vini = {
email: "vvvvvvxxxxxxx@gmail.com",
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


function Perfil() {
    return (
    <div className= "a1">
        <div className = "a2">
            <div className= "a3">
                <div className= "a4">
                    <h1>Perfil</h1>
                        <div className= "a5">
                            <Container>
                                <Col>
                                    <Cliente cliente={vini}/>
                                    <br />
                                    <Button variant="outline-info">Editar</Button>
                                </Col>
                            </Container>
                            <Container>
                                <Col>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridNovaSenha">
                                            
                                            <Form.Control type="text" placeholder="Digite sua nova senha" />
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>       
                                    <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridConfirmar">
                                        <Form.Control type="text" placeholder="Confirme sua nova senha" />
                                        </Form.Group>
                                    </Form.Row>
                                    </Form>
                                    <Button variant="outline-info">Mudar Senha</Button>
                                </Col>
                            </Container>
                        </div>     
                </div>
            </div>
        </div>
    </div>
        );
}

export default Perfil;