import React from "react";
import "./Depoimentos.css";
import {Avatar} from "@material-ui/core";

function Depoimentos({depoimentos}){
    return(
        <div className = "total">
            <div className = "avatarCliente">
                <Avatar alt = {depoimentos.id} src = "/images/avatar/1.jpg" />
            </div>
            <div className = "nome">{depoimentos.title}</div>
            <div className = "fala">{depoimentos.description}</div>
        </div>
    );
}

export default Depoimentos;