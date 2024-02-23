import { CategoriesContainer, CategoriesWrapper, DivisorStyled } from "./Categories.style";
import {categories} from "../../data/Categories"
import Category from "./Category";
//import {  } from "./Categories.style.js";
const Categories = () => {
  return (
    <CategoriesWrapper>
      <DivisorStyled color></DivisorStyled>
      <h2>Categorias</h2>
      <CategoriesContainer>
        {
          categories.map((category) =>{
            return <Category key={category.id} {...category}></Category>
          })
        }
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};

export default Categories;
