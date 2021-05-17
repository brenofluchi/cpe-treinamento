import React from "react";
import "./Header.css";


function Header() {
    return (
    
    <div className= "baseHeader">
        <div className="header">
            <div className="headerLogo">
                <a href="./home" ><img src = "/images/logonovoheader.png"  title="Home" alt = "Volare Intercâmbios"/></a>
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
            <nav id="usuario">
                <ul>
                    <li>
                        <a href="/cadastro" title="Cadastro" target="_blank" rel="noreferrer">Cadastre-se</a>
                    </li>
                    <li>
                        <a href="login" title="Login" target="_blank" rel="noreferrer">Login</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    )
}
export default Header;