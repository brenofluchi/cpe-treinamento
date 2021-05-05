import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons/lib";
import { FaFacebookF, FaInstagram, FaSpotify, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer(props) {
   return (

      <div className="body">
         <div className="baseFooter">
            <div className="conjunto">
               <div className="colunaum">
                  <ul class="links">
                     <li><a href="https://www.facebook.com/" title="facebook" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#219EBC", size: "1.5rem" }}>
                           <FaFacebookF />
                        </IconContext.Provider>
                     </a></li>

                     <li><a href="https://www.instagram.com/" title="instagram" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#219EBC", size: "1.5rem" }}>
                           <FaInstagram />
                        </IconContext.Provider>
                     </a></li>

                     <li><a href="https://www.spotify.com/br/" title="spotify" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#219EBC", size: "1.5rem" }}>
                           <FaSpotify />
                        </IconContext.Provider>
                     </a></li>

                     <li><a href="https://www.linkedin.com/" title="facebook" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#219EBC", size: "1.5rem" }}>
                           <FaLinkedinIn />
                        </IconContext.Provider>
                     </a></li>

                  </ul>
               </div>
               <div className="colunadois">
                  <h2 className="contatos">Contatos</h2>
                  <ul className="c2">
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.5rem" }}>
                        <FaPhone />
                     </IconContext.Provider> (xx) xxxx-xxxx </li>
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.5rem" }}>
                        <FaWhatsapp />
                     </IconContext.Provider> (xx) x xxxx-xxxx</li>
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.5rem" }}>
                        <FaEnvelope />
                     </IconContext.Provider> volfhuaifafare@cpejr.com.br</li>
                  </ul>

               </div>
               <div className="coluna3">
                  <h2>Links Utéis</h2>
                  <ul className="c3">
                     <li>Política de Privacidade</li>

                  </ul>

               </div>







               





            </div>
            <div className="copyright">
                  <hr className="hr" />
                     &copy;{new Date().getFullYear()} VOLARE INTERCÂMBIOS. Todos os direitos reservados
                 </div>
         </div>
      </div>
   )

}

export default Footer;