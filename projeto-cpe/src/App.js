
import React from "react";
import Routes from "./routes";
import "./global.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Componentes/Footer/Footer";
import  "./App.css";


function App() {
  return  (
   <div className= "page-container"> 
    <div className= "conteudo">
      <Routes/>
    </div>
  
  <Footer/>
  </div>
  )
}

export default App;
