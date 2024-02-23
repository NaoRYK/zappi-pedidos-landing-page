import Button from "../UI/Button/Button";
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from "./Hero.style";

//import {  } from "./Hero.style.js";
const Hero = () => {
  return (
    <>
      <HeroContainerStyled>
        <HeroTextContainerStyled>

          <h1>Si tenés <span>Zappi</span>,</h1>
          <h2>tenés tu <span>pedido</span>.</h2>
          <p>Buscá lo que quieras y zappi te lo lleva.</p>
          <Button radius={15} bgColor={"--nucbaRedYellowGradient"}  disabled={false}>Ver más</Button>
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
          <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png" alt="imagen del hero" />
        </HeroImageContainerStyled>
      </HeroContainerStyled>
    </>
  );
};

export default Hero;
