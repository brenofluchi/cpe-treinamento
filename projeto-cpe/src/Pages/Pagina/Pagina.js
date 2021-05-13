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
                            <h1>14x de R$ 1.095,00</h1></p>

                    
                    </div>

                </div>    

                <div className = "Madrid">
            
            
                    <div className = "caixama">
                                            
                            <p><h1>Espanhol em Madrid</h1>
                            <h4>3 semanas de curso de Espanhol na Escuela Trazoz, com acomodação e refeições inclusas e passeios para Plaza Puerta Del Sol, Gran Via, Templo de Debod, Museu do Prado e mais!</h4>
                            <h1>10x de R$ 1.998,00</h1></p>

                            <img src = "./imagespag/madrid.png" alt = "Madrid"/>

                    
                    </div>
                    

                </div>

                <div className = "Malta">
            
            
                <div className = "caixamt">
                    <img src = "./imagespag/malta2.jpg" alt = "Malta"/>

                    
                        <p><h1>Inglês na Ilha de Malta</h1>
                        <h4>5 semanas de curso de Inglês na escola ACE English Malta, com acomodação, refeições, SIM Card e health care inclusos + passeios para Blue Lagoon, ilha de Gozo, Valletta e Three Cities.</h4>
                        <h1>12x de R$ 2.145,00</h1></p>

                
                </div>

            </div> 
        
                <div className = "NovaYork">
                
                
                <div className = "caixany">
                                        
                        <p><h1>Inglês em Nova York</h1>
                        <h4>6 semanas de curso de inglês na renomada LSI New York + refeições, acomodação e health care + passeio para Central Park, Brooklyn Bridge, Empire State Building e outros!</h4>
                        <h1>14x de R$ 2.998,00</h1></p>

                        <img src = "./imagespag/nyc.png" alt = "Nova York"/>

                
                </div>
                

            </div>

            <div className = "Paris">
            
            
                <div className = "caixapa">
                    <img src = "./imagespag/paris.png" alt = "Paris"/>

                    
                        <p><h1>Francês em Paris</h1>
                        <h4>5 semanas de curso de francês na École de langues Accord, com refeição, acomodação e health care inclusos. Além de passeios ao Arco do Triunfo, Torre Eiffel, Euro Disney e outros!</h4>
                        <h1>12x de R$ 2.895,00</h1></p>

                
                </div>

            </div>

            <div className = "Vancouver">
            
            
            <div className = "caixavanc">
                                
                    <p><h1>Inglês em Vancouver</h1>
                    <h4>3 semanas de curso de Inglês na escola ILAC, com acomodação e refeições inclusas e passeios para Vancouver Aquarium, Ski Trip, Whistler e muito mais!</h4>
                    <h1>12x de R$ 2.098,00</h1></p>

                    <img src = "./imagespag/vanc.png" alt = "Vancouver"/>

            
            </div>

        </div>
        
        </div>

    )   
    
}

export default Intercambios;
