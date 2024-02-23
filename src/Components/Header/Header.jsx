import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyle, SpanStyled, UserContianerStyled, UserNavStyled } from "./Header.style.js";
import {motion} from "framer-motion"
import { RiHome3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";



const Header = () => {
  return (
    <NavbarContainerStyle>
      <div>
        <a href="#">
          <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png" alt="logo" />
        </a>
      </div>

      <LinksContainerStyled>
        
          <HomeContainerStyled>

            <motion.div whileTap={{scale:0.9}}>

              <a href="#">
              <span>Menu</span>
                <LinkContainerStyled >
                  <RiHome3Fill/>
                </LinkContainerStyled>
               
              </a>
            </motion.div>
          </HomeContainerStyled>

          <motion.div whileTap={{scale:0.95}}>

          <UserNavStyled>
              <a href="#" id="login">
              
              <SpanStyled>
                Iniciar Sesion
              </SpanStyled>
              <LinkContainerStyled home>
              <FaUser></FaUser>
              </LinkContainerStyled>
              
              </a>

            
            
        </UserNavStyled>
          </motion.div>
          <motion.div whileTap={{scale:0.95}}>
        <MenuContainerStyled>
          <AiOutlineMenu></AiOutlineMenu>
        </MenuContainerStyled>
        </motion.div>
      </LinksContainerStyled>
    </NavbarContainerStyle>
  );
};

export default Header;
