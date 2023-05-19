import React from "react";
import { useState } from "react";
import "../ItemCount/itemcount.css"

const ItemCount = ({ initialState, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initialState);
  
  const increment = () => {
    if (quantity < stock){
    setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1){
    setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="buton" onClick={decrement}>-</button>
        <h4 className="contador">{quantity}</h4>
        <button className="buton" onClick={increment}>+</button>
        <button className="bn632-hover bn26" onClick={()=> onAdd(quantity)}>agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
