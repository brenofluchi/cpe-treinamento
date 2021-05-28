import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "./Perfil.css";
import { Form, Col, Button, Container, Row } from "react-bootstrap";
import api from "../../services/api";

function Perfil() {
    const history = useHistory();
    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/profile');
            console.log(response.data);
            const { data } = response;
            setNome(data.nome);
            setEmail(data.email);
            setTelefone(data.telefone);
            setEstado(data.estado);
            setCidade(data.cidade);
            setCep(data.cep);
            setLogradouro(data.logradouro);
            setSonho(data.sonho);
        }
        fetchData();
    }, []);

    const [edicao, setedicao] = useState(false);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState();
    const [sonho, setSonho] = useState();
    const [password, setPassword] = useState();

    async function editar() {
        const body = { nome, email, telefone, estado, cidade, cep, logradouro, sonho }
        const response = await api.put('/user', body);
        console.log(response.data);
        const { data } = response;
        alert("Dados cadastrais alterados com sucesso!")
        history.push("perfil");
    }

    return (
        <div className="a1">
            <div className="a2">
                <div className="a3">
                    <div className="a4">
                        <h1 className="t1"><b>Perfil</b></h1>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="editNome">
                                    <Form.Label><b>Nome Completo</b></Form.Label>
                                    <Form.Control type="text" value={nome} disabled={edicao} onChange={(e) => setNome(e.target.value)} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="editEmail">
                                <Form.Label><b>Email</b></Form.Label>
                                <Form.Control type="email" placeholder="E-mail" value={email} disabled={edicao} onChange={(e) => setEmail(e.target.value)}  />
                            </Form.Group>
                            <Form.Group controlId="editTelefone">
                                <Form.Label><b>Número de Telefone</b></Form.Label>
                                <Form.Control type="text" value={telefone} disabled={edicao} onChange={(e) => setTelefone(e.target.value)} />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="editState">
                                    <Form.Label><b>Estado</b></Form.Label>
                                    <Form.Control type="text" value={estado} disabled={edicao} onChange={(e) => setEstado(e.target.value)} >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="editCidade">
                                    <Form.Label><b>Cidade</b></Form.Label>
                                    <Form.Control type="text" value={cidade} disabled={edicao} onChange={(e) => setCidade(e.target.value)}  />
                                </Form.Group>

                                <Form.Group as={Col} controlId="editCEP">
                                    <Form.Label><b>CEP</b></Form.Label>
                                    <Form.Control placeholder="CEP" value={cep} disabled={edicao} onChange={(e) => setCep(e.target.value)} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="editEndereco">
                                <Form.Label><b>Logradouro</b></Form.Label>
                                <Form.Control type=" " placeholder="Logradouro" value={logradouro} disabled={edicao} onChange={(e) => setLogradouro(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="editInteresse">
                                <Form.Label><b>Intercâmbio dos Sonhos</b></Form.Label>
                                <Form.Control type="textarea " placeholder="Qual o seu intercâmbio dos sonhos?" value={sonho} disabled={edicao} onChange={(e) => setSonho(e.target.value)}  />
                            </Form.Group>

                            <div className="editar">
                                <Button variant="outline-info" onClick={editar}>Confirmar Edição</Button>
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
