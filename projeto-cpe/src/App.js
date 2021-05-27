import React from "react";
import Routes from "./routes";

import "./global.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import  "./App.css";

function App() {
  return  (
   <div className= "page-container">
     <Header/> 
      <Routes/>
    <Footer/>
  </div>
  )
}

export default App;
