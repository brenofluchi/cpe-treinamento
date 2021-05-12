import React from "react";
import "./Pagina.css";


function Intercambios() {
    return (
        <div className = "Intercambios">

            <div className = "titulo"> 

                <h1>Nossos destinos</h1>

            </div>  

            <div className = "Brighton">
            
            
                <div className = "caixab">
                    <img src = "./imagespag/brighton.png" alt = "Brighton"/>

                    
                        <p><h1>Inglês em Brighton</h1>
                        <h4>3 semanas de curso de Inglês na escola Ardmore, com acomodação e refeições inclusas e passeios para Brighton Pier, Londres, Harry Potter Studios e muito mais!</h4>
                        <h1>12x de R$ 1.000,00</h1></p>

                
                </div>

            </div>    

            <div className = "Madrid">
            
            
                <div className = "caixama">
                    <img src = "./imagespag/madrid.png" alt = "Madrid"/>

                    
                        <p><h1>Inglês em Brighton</h1>
                        <h4>3 semanas de curso de Inglês na escola Ardmore, com acomodação e refeições inclusas e passeios para Brighton Pier, Londres, Harry Potter Studios e muito mais!</h4>
                        <h1>12x de R$ 1.000,00</h1></p>

                
                </div>
                    

            </div>

        </div>

    )   
    
}

export default Intercambios;
