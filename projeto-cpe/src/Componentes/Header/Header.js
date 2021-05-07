import React from "react";
import "./Header.css";
import {Button} from "react-bootstrap";

function Header() {
    return (
    
    <div className= "baseHeader">
        <div className= "Header"></div>
        
            <div className="HeaderLogo">
               <a href="./home" ><img src = "/images/logo4menorainda.png" alt = "Volare Intercâmbios"/></a>
            </div>
            <div className="Header-botoes">
            <div className="HeaderLogin">
                <p><a href="/login" title="login" target="_blank" rel="noreferrer"><Button variant="warning">Login</Button></a></p>
            </div>
           
            <div className="HeaderCadastrar">
                <p><a href="/cadastro" title="cadastro" target="_blank" rel="noreferrer"><Button variant="warning">Cadastrar</Button></a></p>
            </div>
            </div>
            
            
    </div>
    )
}
export default Header;