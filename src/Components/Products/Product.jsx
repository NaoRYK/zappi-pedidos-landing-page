import React from 'react'
import { CardPrice, ContainerPrice, ProductCard } from './Products.style'
import Button from '../UI/Button/Button'

const Product = ({img,title,desc,price}) => {
  return (
    <ProductCard color>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <ContainerPrice>
            <CardPrice>
                ${price}
            </CardPrice>
            <Button bgColor={"--nucbaBlue"} >Comprar</Button>
        </ContainerPrice>
    </ProductCard>
  )
}

export default Product