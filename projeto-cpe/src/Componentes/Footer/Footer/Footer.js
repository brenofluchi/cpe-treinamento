import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons/lib";
import { FaFacebookF, FaInstagram, FaSpotify, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer(props) {
   return (

      <div className="body">
         <div className="baseFooter">
            <div className="Footer">
               <div className="Footer-RedesSociais">
                  <div class="RedesSociais">
                     <p><a href="https://www.facebook.com/" title="facebook" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#219EBC", size: "1.6rem" }}>
                           <FaFacebookF />
                        </IconContext.Provider>
                     </a></p>

                     <p><a href="https://www.instagram.com/" title="instagram" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                           <FaInstagram />
                        </IconContext.Provider>
                     </a></p>

                     <p><a href="https://www.spotify.com/br/" title="spotify" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                           <FaSpotify />
                        </IconContext.Provider>
                     </a></p>

                     <p><a href="https://www.linkedin.com/" title="facebook" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                           <FaLinkedinIn />
                        </IconContext.Provider>
                     </a></p>

                  </div>
               </div>
               <div className="Footer-Contatos">
                  <h2 className="ContatosH"><b>Contatos</b></h2>
                  <ul className="Contatos">
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                        <FaPhone />
                     </IconContext.Provider> <b>(xx) xxxx-xxxx</b> </li>
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                        <FaWhatsapp />
                     </IconContext.Provider> <b>(xx) x xxxx-xxxx</b></li>
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                        <FaEnvelope />
                     </IconContext.Provider> <b>volare@cpejr.com.br</b></li>
                  </ul>

               </div>
               <div className="Footer-Links">
                  <h2 className="LinksUteisH"><b>Links Utéis</b></h2>
                  <ul className="LinksUteis">
                     <li><b>Política de Privacidade</b></li>

                  </ul>

               </div>







               





            </div>
            <div className="copyright">
                  <hr className="hr" />
                     &copy;{new Date().getFullYear()} <b>    VOLARE INTERCÂMBIOS. Todos os direitos reservados</b>
                 </div>
         </div>
      </div>
   )

}

export default Footer;