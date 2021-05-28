import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Home.css";


function Home() {
    return (
        <div className="paginahome">
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100" src="./images/brighton.png" alt="Brighton" />
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
            <div className="texto">
                <h1>
                    Por que fazer um intercâmbio?
            </h1>
                <div className="paragrafo">
                    <p>
                        Você já pensou em como fazer um intercâmbio pode ser importante para a sua carreira e para o seu desenvolvimento pessoal? Há algumas décadas, esse tipo de viagem poderia ser considerado uma experiência própria de adolescentes que desejavam aprender um novo idioma. Atualmente, isso mudou. Fazer intercâmbio já é parte dos planos de pessoas de várias faixas etárias.
                        Isso porque a importância dessa experiência para o mercado de trabalho é enorme. Você passa a ser mais valorizado pelos empregadores por ter tido que superar o desafio de viver imerso em outra cultura, distante da família e de sua zona de conforto. Além disso, o desenvolvimento pessoal que o intercâmbio promove tem sido mais um ponto de atração para pessoas em busca de ampliar seu olhar sobre o mundo e si mesmo. A Volare Intercâmbios tem ótimas oportunidades para você!
            </p>
                </div>
            </div>
        </div>
    )

}

export default Home;