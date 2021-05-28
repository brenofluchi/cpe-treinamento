import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Cadastro.css";
import {Form, Col,Button} from "react-bootstrap";
import api from "../../services/api";


function Cadastro() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState();
    const [sonho, setSonho] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    
    async function handleCadastrar(e) { 
        e.preventDefault();
     
        try{   
            const body = {
                nome,
                email,
                telefone,
                estado,
                cidade,
                cep,
                logradouro,
                sonho,
                password,
            };   
            console.log(body);
        const response = await api.post("/cadastro", body);
               
        }catch (error) {
            console.error(error);
        } 
        //history.push("login");
    }

    return (
       
    <div className= "base">
        <div className= "centro">       
            <div className= "Container">
                <div className= "inputs">
                    <h1 className= "CadastroH1">Cadastro</h1>
                        <Form>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridNome">
                            
                            <Form.Control type="text" placeholder="Nome Completo" onChange = {(e) => setNome(e.target.value)}/>
                            </Form.Group>
                        </Form.Row> 
                            
                            <Form.Group  controlId="formGridEmail">
                            
                            <Form.Control type="email" placeholder="E-mail" onChange = {(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group  controlId="formGridTelefone">
                            
                            <Form.Control type="text" placeholder="Telefone" onChange = {(e) => setTelefone(e.target.value)}/>
                            </Form.Group>
                        

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="Estado" onChange = {(e) => setEstado(e.target.value)}>
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

                            <Form.Group as={Col} controlId="formGridCidade">
                            <Form.Control type="text" placeholder="Cidade" onChange = {(e) => setCidade(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCEP">
                            <Form.Control placeholder="CEP" onChange = {(e) => setCep(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Group controlId="formGridEndereco">
                            <Form.Control type=" " placeholder="Logradouro" onChange = {(e) => setLogradouro(e.target.value)}/>
                        </Form.Group>
                        
                        <Form.Group controlId="formGridInteresse">
                            <Form.Control type="textarea " placeholder="Qual o seu intercâmbio dos sonhos?" onChange = {(e) => setSonho(e.target.value)}/>
                        </Form.Group>
                       
                        <Form.Group  controlId="formGridPassword">
                            
                            <Form.Control type="password" placeholder="Senha"  onChange = {(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                            <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Concordo com os termos e condições." />
                        </Form.Group> 
                        <div className="cadastrar">
                        <Button variant="outline-info" onClick={handleCadastrar}>Cadastrar</Button>
                        </div>
                        </Form>    
                </div>
            </div> 
        </div>
    </div> 

)    
}

export default Cadastro;