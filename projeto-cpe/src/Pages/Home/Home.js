import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./Home.css";


function Home() {
    return <div className="container">
        <div className="header">
            <div className="foto">
            <img src = "/images/logo4menor.png" alt = "Volare Intercâmbios"/>
            </div>
            <Button variant="light">Cadastre-se</Button>
            <Button variant="light">Login</Button>
        </div>
        <div className= "botoes">
            <ButtonGroup size="lg" className="mb-2">
                <Button>Home</Button>
                <Button>História</Button>
                <Button>Intercâmbios</Button>
            </ButtonGroup>
        </div>
    
    </div>;

}

export default Home;