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
                        <a href ="/home" title="Home"><b>HOME</b></a>
                    </li>
                    <li>
                        <a href ="/pagina" title="Destinos"><b>DESTINOS</b></a>
                    </li>
                    <li>
                        <a href ="/historia" title="Quem somos"><b>QUEM SOMOS</b></a>
                    </li>     
                </ul>
            </nav>
            <nav id="usuario">
                <ul>
                    <li>
                        <a href="/cadastro" title="Cadastro" target="_blank" rel="noreferrer"><b>Cadastre-se</b></a>
                    </li>
                    <li>
                        <a href="login" title="Login" target="_blank" rel="noreferrer"><b>Login</b></a>
                    </li>
                    <li>
                        <a href="perfil" title="Perfil" target="_blank" rel="noreferrer"><b>Perfil</b></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    )
}
export default Header;