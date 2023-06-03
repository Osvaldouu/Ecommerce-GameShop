import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const UseCart = () => {
  const context = useContext(CartContext);
  return context;
};

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isIncart(item.id)) {
      const index = cart.findIndex((prod) => prod.id === item.id);
      const aux = [...cart];
      aux[index].quantity = quantity;
      setCart(aux);
    } else {
      const newProduct = {
        ...item,
        quantity,
      };

      setCart([...cart, newProduct]);
    }
  };

  const removeItem = (id) => {
    const aux = [...cart];
    const index = aux.findIndex((prod) => prod.id === id);
    aux.splice(index, 1);
    setCart(aux);
  };

  const getItemQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const getCartItemCount = () => {
    const distinctItems = new Set(cart.map((prod) => prod.id));
    return distinctItems.size;
  };

  const getTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isIncart = (itemId) => {
    return cart.find((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isIncart,
        getItemQuantity,
        getTotal,
        getCartItemCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export { CartProvider, CartContext };
