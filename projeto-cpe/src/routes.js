import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import Historia from "./Pages/Historia";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Pagina from "./Pages/Pagina";
import Perfil from "./Pages/Perfil";

function Routes(){
    console.log(Routes)
    return (
    // eslint-disable-next-line no-unreachable
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/historia" component={Historia}/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/pagina" component={Pagina}/>
            <Route path="/perfil" component={Perfil}/>
        </Switch>
    </BrowserRouter>
    )
}


export default Routes;