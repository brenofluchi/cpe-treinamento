import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./Home.css";


function Home() {
    return (
    <div className="containerHome">
        <div className="header">
            <div className="foto">
                <img src = "/images/logo4menorainda.png" alt = "Volare Intercâmbios"/>
            </div>
            <div className="cadastro">
                <Button variant="light">Cadastro</Button>
                <Button variant="light">Login</Button>
            </div>
        </div>
        <div className= "botoes">
            <ButtonGroup size="lg" className="mb-2">
                <Button>Home</Button>
                <Button>História</Button>
                <Button>Intercâmbios</Button>
            </ButtonGroup>
        </div>
    </div>
    )

}

export default Home;