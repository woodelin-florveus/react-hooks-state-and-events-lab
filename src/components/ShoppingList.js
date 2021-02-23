import Item from "./Item";
import React, { useState } from "react";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  // console.log(items)
  
  // const foodList = selectedCategory.map((item) => {
  //   return <li key={item.id} onClick={() => }>
  // })


  function handleFilterChange(event){
    setSelectedCategory(event.target.value)
    // console.log(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if(selectedCategory === "All"){
      return true
    } else {
      return item.category === selectedCategory
    }
  });

  // console.log(selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
