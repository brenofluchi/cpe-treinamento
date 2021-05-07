import React from "react";
import "./Depoimentos.css";

function Depoimentos({depoimentos}){
    return(
        <div className = "total">
            <div>
                <img src = {depoimentos.foto} alt = {depoimentos.id}/>
            </div>
            <div className = "nome">{depoimentos.title}</div>
            <div className = "fala">{depoimentos.description}</div>
        </div>
    );
}

export default Depoimentos;