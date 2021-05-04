import React from "react";
import "./Footer.css";

function Footer(props) {
   return( 
     
    <div className= "baseFooter">  
        <div className= "descricao">
                
                    <p>Facebook</p>  
                    <p>Instagram</p>
                    <p>Linkedin</p>
                    <p>Spotify</p>
                    <p>Fale Conosco (xx) xxxx-xxxx </p>
                
         
                 <hr/>
                &copy;{new Date().getFullYear()} VOLARE INTERCÂMBIOS | Todos os direitos reservados | Política de Privacidade
           
                   
        
       
        
        </div>
   </div>  
)

}

export default Footer;