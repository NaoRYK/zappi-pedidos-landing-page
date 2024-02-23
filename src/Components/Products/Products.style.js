import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductsWrapper = styled.section`
  padding-top:30px;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  max-width:1300px;
  margin:2rem 1rem;

  @media (max-width:768px){
    text-align:center;
  }
`;

export const ProductsContainerStyled = styled.div`
  display:grid;
  place-items:center;
  justify-content:center;
  grid-template-columns:repeat(auto-fit,400px);
  row-gap:3.5rem;
  width:100%;
  max-width:1300px;
  padding:1rem 0;
`;

export const ProductCard = styled(motion.div)`
    background: ${(props) => (props.color ? "var(--nucbaBlueBlackGradientReversed)" : "var(--nucbaRedBlackGradient)" ) };
    width:300px;
    border-radius:15px;
    padding:1rem;
    img{
        width:100%;
        margin-bottom:1rem;
        margin-top:1rem;

    }
    h2{
        font-weight:600;
        margin:0;
    }
    p{
        background:var(--nucbaBlue);
        background-clip:text;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        font-size:1.1rem;
    }
    @media (max-width: 768px){
        width:250px;
        text-align:left;
    }
`

export const CardPrice = styled.span`
  font-weight:800;
  font-size:1.75rem;
  background:var(--nucbaBlue);
  background-clip:text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
`;
export const ContainerPrice = styled.div`
  display:flex;
  justify-content:space-between;
`;
export const DivisorStyled = styled.div`
    height:10px;
    width:90%;
    border-radius:15px;
    background: ${(props)=> (props.color ? "var(--nucbaRedBlueGradient)" : "var(--nucbaRedBlackGradient)"   )};

`

export const ButtonContainerStyled = styled.div`
  display:flex;
  justify-content:center;
  gap:20px;
  margin-top:3rem;
`;