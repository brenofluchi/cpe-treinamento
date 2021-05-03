import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() 
{
    return (
    <div className = "base">
        <div className = "container">
            <div >
                <div className = "imagem">
                    <img src = "/images/logoreduzida.png" alt = "Volare Intercâmbios"/>
                </div>
                <Form className = "inputs">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Button variant="warning" >Login</Button>{''}  
                </Form>
            </div>
        </div>    
    </div>
    )
}

export default Login;