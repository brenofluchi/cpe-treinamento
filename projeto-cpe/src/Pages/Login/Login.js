import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import api from "../../services/api";
import { login } from "../../services/auth";
import "./Login.css";


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email, password });
            alert("Bem vindo " + response.data.user.nome)
            login(response.data.accessToken)
            history.push("home")
        } catch (error) {
            if (error.response.status === 403) { alert("Credenciais inválidas!"); }
            else { alert(error.response.data.notification); }
            console.warn(error);
        }
    }
    return (
        <div className="base">
            <div className="container">
                <div className="entry">
                    <div className="imagem">
                        <a href="./Home" title="Home" > <img src="/images/logo4menor.png" alt="Volare Intercâmbios" /> </a>
                    </div>
                    <Form className="inputs">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="warning" style={{ backgroundColor: "rgb(255, 183, 3)" }} onClick={handleLogin}>Login</Button>{''}
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;