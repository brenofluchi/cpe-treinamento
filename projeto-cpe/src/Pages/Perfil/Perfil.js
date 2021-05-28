import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Perfil.css";
import {Form, Col, Button, Container, Row} from "react-bootstrap";
import api from "../../services/api";

function Perfil() {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState();
    const [sonho, setSonho] = useState();
    const [password, setPassword] = useState();

    async function handlePerfil(e){
        e.preventDefault();
        const body = { nome, email, telefone, estado, cidade, cep, logradouro, sonho, password,
        };
        try{
    //console.log(body);
        const response = await api.get('/user', body);

        }catch (err) {
            alert(err);
        } 
    }

     return (
        <div className= "a1">
            <div className= "a2">       
                <div className= "a3">


                    <div className= "a4">
                        <h1 className= "t1"><b>Perfil</b></h1>
                        <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="editNome">
                            <Form.Label><b>Nome Completo</b></Form.Label>
                            <Form.Control type="text" placeholder="Nome Completo" />
                            </Form.Group>
                        </Form.Row> 
                            <Form.Group  controlId="editEmail">
                            <Form.Label><b>Email</b></Form.Label>
                            <Form.Control type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group controlId="editTelefone">
                            <Form.Label><b>Número de Telefone</b></Form.Label>
                            <Form.Control type="text" placeholder="Telefone" />
                            </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="editState">
                            <Form.Label><b>Estado</b></Form.Label>
                            <Form.Control as="select" defaultValue="Estado">
                                <option>Estado</option>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                                
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="editCidade">
                            <Form.Label><b>Cidade</b></Form.Label>
                            <Form.Control type="text" placeholder="Cidade"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="editCEP">
                            <Form.Label><b>CEP</b></Form.Label>
                            <Form.Control placeholder="CEP"/>
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Group controlId="editEndereco">
                        <Form.Label><b>Logradouro</b></Form.Label>
                            <Form.Control type=" " placeholder="Logradouro" />
                        </Form.Group>
                        
                        <Form.Group controlId="editInteresse">
                        <Form.Label><b>Intercâmbio dos Sonhos</b></Form.Label>
                            <Form.Control type="textarea " placeholder="Qual o seu intercâmbio dos sonhos?" />
                        </Form.Group>
                       
                        <div className="editar">
                        <Button variant="outline-info">Confirmar Edição</Button>
                        </div>
                        <br />
                        <Form.Group  controlId="editPassword">
                        <Form.Label><b>Nova Senha</b></Form.Label>
                            <Form.Control type="password" placeholder="Digite sua Nova Senha" />
                        </Form.Group>
                        <div className="changePassword">
                        <Button variant="outline-info">Trocar Senha</Button>
                        </div>
                        <br />
                        </Form>
                </div>
            </div> 
        </div>
    </div> 

        );
}

export default Perfil;