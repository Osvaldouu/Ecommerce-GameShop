import React from "react";
import { useState } from "react";

const ItemCount = ({ initialState, stock }) => {
  const [quantity, setQuantity] = useState(initialState);
  
  const onAdd = (quantity) =>{
    console.log("cantidad agregada", quantity);
  }
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
        <button className="button" onClick={decrement}>-</button>
        <h4>{quantity}</h4>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={()=> onAdd(quantity)}>agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
