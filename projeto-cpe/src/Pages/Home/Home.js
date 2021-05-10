import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Home.css";


function Home() {
    return (
    <div className="containerHome">
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
    </div>
    )

}

export default Home;