import { ButtonContainerStyled, DivisorStyled, ProductsContainerStyled, ProductsWrapper } from "./Products.style";
import {products} from "../../data/Products";
import Product from "./Product";
import Button from "../UI/Button/Button";
//import {  } from "./Products.style.js";
const Products = () => {
  return (
    <ProductsWrapper>
        <DivisorStyled color></DivisorStyled>
      <h2>Nuestros productos</h2>
      
      <ProductsContainerStyled>
        {
            products.map((product) =>{

                return <Product key={product.id} color {...product}></Product>
            })
        }
      </ProductsContainerStyled>
      <ButtonContainerStyled>
        <Button disabled={true} bgColor={"--nucbaRedYellowGradient"}>
            Página Anterior
        </Button>
        <Button bgColor={"--nucbaRedYellowGradient"}>
            Página Siguiente
        </Button>
      </ButtonContainerStyled>
    </ProductsWrapper>
  );
};

export default Products;
