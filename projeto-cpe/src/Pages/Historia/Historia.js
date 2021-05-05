import React from "react";
import Depoimentos from "../../Components/Depoimentos";
import "./Historia.css";

const depoimentos = [
    {
        id: 1,
        title: "Breno, 21, Vancouver",
        description: "Fui para o Canadá aprender francês",
    },
    {
        id:2,
        title: "Lampinho, 24, Paris",
        description: "A Volare mais legal",
    },
    {
        id:3,
        title: "Lucas, 21, Malta",
        description: "Ainda não entendi direito",
        foto: "/images/avatar/ph_lucas.jpg",
    },
    {
        id:4,
        title: "Pedro, 20, Brighton",
        description: "Acho que vai ser legal",
    },
    {
        id:5,
        title: "Vinícius, 22, Nova York",
        description: "Eu gosto de Física",
    },
    {
        id:6,
        title: "Bruna, 20, Madri",
        description: "NÚMEROS!!!!",
    },
]

function Historia(){
    return(
        <div className = "nossaHist">
            <div className = "texto">
                <h1>História</h1>
                <p>A Volare, referência em praticidade e atendimento ao consumidor no mercado brasileiro de intercâmbios.dasdasdasdasdasdasdasdasdassadasdaskldklasdklaskdlaslkdfnklasklfadklnfklandklnfkla...</p>
            </div>
                <div className = "depoContainer">
                    {depoimentos.map((depoimentos) => (<Depoimentos key = {depoimentos.id} depoimentos = {depoimentos}/>))}
                </div>
        </div>
    )
}

export default Historia;