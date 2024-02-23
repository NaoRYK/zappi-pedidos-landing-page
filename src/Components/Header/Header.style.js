import styled from "styled-components";

 export const NavbarContainerStyle = styled.header`
  display: flex;
  height: 100px;
  background:var(--nucbaBlackReduced);
  justify-content:space-between;
  align-items:center;
  padding:1rem 4rem;
 `;

 export const LinksContainerStyled = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    gap:40px;
    a{
        padding:1rem 1.5rem;

    }

    a:first-child{
        background:var(--nucbaTransparentOrange);
        border-radius:1rem;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5px;
    }
    #login{
        background:var(--nucbaTransparentRose)
    }

 `;

 export const LinkContainerStyled = styled.div`
 font-size:1.2rem;
 color: ${(props) =>(props.home ? "var(--nucbaRose)" : "var(--nucbaOrange)")} ;
 align-items:center;
 display:flex;

 `


export const HomeContainerStyled = styled(LinkContainerStyled)`

    @media (max-width:769px) {
        display:none;
    }
`

export const MenuContainerStyled = styled(LinkContainerStyled)`
    display:none;
    cursor:pointer;
    font-size:2rem;
    @media (max-width: 769px) {
        display: flex;
    }
`

export const UserNavStyled = styled.div`
    display:flex;
    
    gap:15px;
    cursor:pointer;

    span{
        color:white;
        font-size:1.2rem;
        margin-right:20px;
        
    }
    a{
      // background:transparent !important;
    }
    @media (max-width:769px){
        display:none;
    }
`

export const SpanStyled = styled.span`
transition:all 0.2s ease-in;
color :${(props) =>(props.home ? "var(--nucbaRose)" : "white")} !important;
&:hover{
    text-decoration:underline;
}`