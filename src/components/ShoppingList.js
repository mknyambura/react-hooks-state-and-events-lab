import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectCategory, setSelectCategory] = useState('All');

  function changeCategory(event){
    setSelectCategory(event.target.value)
  }

  let newCategory = []
  if (selectCategory !== 'All'){
    newCategory = items.filter(item => item.category === selectCategory)
  } else {
    newCategory = items
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
