import React from "react";
import './modal.css'
//declaring 
const ProductCard = ({id, title, price, Description}) => {
  return (
    <>
      <div className={`${id}`}>
        <p>{title}</p>
        <p>{price}</p>
        <p>{Description}</p>
      </div>
    </>
  )
}

export default ProductCard;
