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
                  <h2 className="ContatosH">Contatos</h2>
                  <ul className="Contatos">
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                        <FaPhone />
                     </IconContext.Provider> (xx) xxxx-xxxx </li>
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                        <FaWhatsapp />
                     </IconContext.Provider> (xx) x xxxx-xxxx</li>
                     <li>  <IconContext.Provider value={{ color: "#219EBC", size: "1.4rem" }}>
                        <FaEnvelope />
                     </IconContext.Provider> volare@cpejr.com.br</li>
                  </ul>

               </div>
               <div className="Footer-Links">
                  <h2 className="LinksUteisH">Links Utéis</h2>
                  <ul className="LinksUteis">
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