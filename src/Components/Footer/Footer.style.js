import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:5rem;
  padding:2rem 0 2rem 0;
  p span{
    font-weight:800;
  }
  background-color:var(--nucbaBlackReduced);
`;


export const LinksContainerStyled = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:2rem;
  margin-bottom:2rem;

  a{
    background:var(--nucbaRedYellowGradient);
  background-clip:text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  }
    @media (max-width:760px){
    flex-direction:column;

    a{
        padding:0.5rem 0;
        color:var(--nucbaRose) ;
    }
  }
`;