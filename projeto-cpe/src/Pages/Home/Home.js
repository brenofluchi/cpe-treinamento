import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Home.css";


function Home() {
    return (
    <div className="containerHome">
        <div className="header">
            <div className="foto">
               <a href="./home" ><img src = "/images/logo4menorainda.png" alt = "Volare Intercâmbios"/></a>
            </div>
            <div className="cadastro">
                <Button variant="light">Cadastro</Button>
                <Button variant="light">Login</Button>
            </div>
        </div>
        <div>
        <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src="./images/brighton.png"   alt="Brighton"/>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src="./images/madrid.png" alt="Madrid" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src="./images/malta.png" alt="Malta" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src="./images/nyc.png" alt="Malta" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src="./images/paris.png" alt="Malta" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src="./images/vancouver.png" alt="Malta" />
                </Carousel.Item>
            </Carousel>
        </div>
        <div className= "botoes">
            <div className="historia">
                <h2>História</h2>
            </div>
            <div className="intercambio">
                <h2>Intercâmbio</h2>
            </div>
        </div>
    </div>
    )

}

export default Home;