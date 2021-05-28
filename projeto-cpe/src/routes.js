import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import Footer from "./Componentes/Footer/Footer"
import Historia from "./Pages/Historia";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Pagina from "./Pages/Pagina";
import Perfil from "./Pages/Perfil";
import Header from "./Componentes/Header";
import { isAuthenticated } from "./services/auth";
import { Component } from "react";

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to= {{pathname: "/login", state: {from: props.location}}}
                />
            )
        }
    />    
);


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
            <Route path="/footer" component={Footer}/>
            <Route path="/header" component={Header}/>
            <Route component={()=> <Redirect to= "/home" />}/>
        </Switch>
    </BrowserRouter>
    )
}

    



export default Routes;