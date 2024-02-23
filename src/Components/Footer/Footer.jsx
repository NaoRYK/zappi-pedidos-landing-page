
import { FooterContainerStyled, LinksContainerStyled } from "./Footer.style";

//import {  } from "./Footer.style.js";
const Footer = () => {
  return (
    <FooterContainerStyled>
        <LinksContainerStyled>
            
                <a href="#"><span>Terms of use</span></a>
                <a href="#">Work With Us</a>
                <a href="#">Support</a>
           
        </LinksContainerStyled>
        <p>Made with 💜 by <span>Nao</span>.</p>
    </FooterContainerStyled>
  );
};

export default Footer;
