import React from 'react'
import { BorderDecoration, CardCategory } from './Categories.style'

const Category = ({img,title,category}) => {
  return (
    <CardCategory whileTap={{scale:1.1}}>
        <img src={img} alt={category} />
        <h2>{title}</h2>
        <BorderDecoration color></BorderDecoration>
    </CardCategory>
  )
}

export default Category