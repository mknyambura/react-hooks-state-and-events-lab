import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);

  const buttonTitle = addToCart ? "Remove From Cart" : "Add To Cart"
  const classLabel = addToCart? "in-cart" : ""
  function handleClick(){
    setAddToCart(!addToCart)
  }

  return (
    <li className={classLabel}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonTitle}</button>
    </li>
  );
}

export default Item;
