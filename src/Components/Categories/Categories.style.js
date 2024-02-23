import { motion } from "framer-motion";
import styled from "styled-components";


export const CategoriesWrapper =styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1300px;
    margin:2rem 1rem;
    h2{
        margin-top:2rem;
    }
    @media (max-width:768px){
        padding-top:30px;
        text-align:center;
    }
`

export const CategoriesContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  gap:20px;
  
`;

export const CardCategory = styled(motion.div)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:0.5rem;
  width:150px;
  padding:2rem 0.5rem;
  border-radius:15px;
  cursor:pointer;
  background:var(--nucbaRedBlackGradient);
  h2{
    
    font-size:1rem;
  }


`;

export const BorderDecoration = styled.div`
    height:10px;
    width:30%;
    border-radius:15px;
    background: ${(props)=> (props.color ? "var(--nucbaRedYellowGradient)" :"var(--nucbaRedBlackGradient)"  )};

`

export const DivisorStyled = styled.div`
    height:10px;
    width:90%;
    border-radius:15px;
    background: ${(props)=> (props.color ? "var(--nucbaRedYellowGradient)" :"var(--nucbaRedBlackGradient)"  )};

`