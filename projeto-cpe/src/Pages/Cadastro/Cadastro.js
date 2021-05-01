import React from "react";
import "./Cadastro.css";
import {Form, Col,Button} from "react-bootstrap";


function Cadastro() {
    
    return (
    <div className= "base">
        <div className= "centro">       
            <div className= "Container">
                  
            
                <div className= "inputs">
                    <h1>Cadastro</h1>
                        <Form>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridNome">
                            
                            <Form.Control type="text" placeholder="Nome Completo" />
                            </Form.Group>
                        </Form.Row> 
                            
                            <Form.Group  controlId="formGridEmail">
                            
                            <Form.Control type="email" placeholder="E-mail" />
                            </Form.Group>

                            <Form.Group  controlId="formGridTelefone">
                            
                            <Form.Control type="text" placeholder="Telefone" />
                            </Form.Group>
                        

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select"  placeholder="Estado">
                                <option>...</option>
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
                            <Form.Control type="text" placeholder="Cidade"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCEP">
                            <Form.Control placeholder="CEP"/>
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Group controlId="formGridEndereco">
                            <Form.Control type=" " placeholder="Logradouro" />
                        </Form.Group>
                        
                        <Form.Group controlId="formGridInteresse">
                            <Form.Control type="textarea " placeholder="Qual o seu intercâmbio dos sonhos?" />
                        </Form.Group>
                       
                        <Form.Group  controlId="formGridPassword">
                            
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group  controlId="formGridConfirmPassword">
                            
                            <Form.Control type="password" placeholder="Confirmar Senha" />
                        </Form.Group>

                            <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Concordo com os termos e condições" />
                        </Form.Group> 
                        <div className="cadastrar">
                        <Button variant="outline-primary" >Cadastrar</Button>
                        </div>
                        </Form>
                    
                </div>
            </div>  
        </div>
    </div> 
    
)    
}

export default Cadastro;