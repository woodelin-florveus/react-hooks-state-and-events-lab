import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, darkMode] = useState(false)

  // this data will be passed down to the ShoppingList as a prop
  // console.log(items);

  function toggleBtn(){
        darkMode((isDark) => !isDark)
  }

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleBtn}>{isDark ? "Dark" : "Light"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
