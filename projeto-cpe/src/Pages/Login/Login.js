import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { useHistory } from 'react-router-dom';

function Login() 
{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    function login()
    {
        alert("Bem vindo!\n" + email)
        history.push("home")
    }
    return (
    <div className = "base">
        <div className = "container">
            <div className="entry">
                <div className = "imagem">
                    <a href="./Home" title = "Home" > <img src = "/images/logo4menor.png" alt = "Volare Intercâmbios"/> </a>
                </div>
                <Form className = "inputs">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" onChange = {(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="Senha" onChange = {(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="warning" style = {{backgroundColor: "rgb(255, 183, 3)"}} onClick={login}>Login</Button>{''}  
                </Form>
            </div>
        </div>    
    </div>
    )
}

export default Login;