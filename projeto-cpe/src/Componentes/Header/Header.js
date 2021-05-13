import React from "react";
import "./Header.css";
import {Button} from "react-bootstrap";

function Header() {
    return (
    
    <div className= "baseHeader">
        <div className="HeaderLogo">
            <a href="./home" ><img src = "/images/logonovo.png"  title="Home" alt = "Volare Intercâmbios"/></a>
        </div>
        <nav id="menu">
            <ul>
                <li>
                    <a href ="/home" title="Home">HOME</a>
                </li>
                <li>
                    <a href ="/pagina" title="Destinos">DESTINOS</a>
                </li>
                <li>
                    <a href ="/historia" title="Quem somos">QUEM SOMOS</a>
                </li>     
            </ul>
        </nav>
        <div className="Header-botoes">
            <div className="HeaderLogin">
                <p><a href="/login" title="Login" target="_blank" rel="noreferrer">Login</a></p>
            </div>
            <div className="HeaderCadastrar">
                <p><a href="/cadastro" title="Cadastro" target="_blank" rel="noreferrer">Cadastrar</a></p>
            </div>
        </div>    
    </div>
    )
}
export default Header;