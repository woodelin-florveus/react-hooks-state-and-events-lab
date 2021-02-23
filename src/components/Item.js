import React, { useState } from "react"

function Item({ name, category }) {
    const [insideCart, cart] = useState(false)
  // In the Item component, when the user clicks the <button> element, the item should be added to their virtual cart. The way we'll show the user that the item is in the cart is by changing the className on the <li> element:

  function itemBtn(){
      cart((insideCart) => !insideCart)
  }

  return (
    <li className= {insideCart ? "in-cart" : ""} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  className={insideCart ? "reduce" : "add"} onClick={itemBtn}className="add">{insideCart ? "reduce" : "add"} Cart</button>
    </li>
  );
}

export default Item;
