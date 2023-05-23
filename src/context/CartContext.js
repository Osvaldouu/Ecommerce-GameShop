import { createContext, useContext, useState } from "react"


const CartContext = createContext();

export const UseCart = () => {
    const context = useContext(CartContext);
    return context;
  }

const CartProvider = (props) =>{
    const [cart, setCart] = useState([])

    const addItem = (item, quantity)=>{
        if(!isIncart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.log("el producto ya fue agregado")
        }
    }

    const removeItem = (itemId)=>{
      const cartUpdated = cart.filter(prod => prod.id !== itemId)
      setCart(cartUpdated)
    }

    const getItemQuantity = () => {
        const quantity = cart.reduce((acc, prod) => (acc += prod.quantity), 0);
        return quantity || 0;
      };

      const getTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
      };

      const totalQuantity = () => {
        return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
      };

    const clearCart = () => {
        setCart([])
    }
   

    const isIncart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider 
        value={{
            cart, 
            addItem, 
            removeItem, 
            clearCart, 
            isIncart,
            getItemQuantity,
            getTotal,
            totalQuantity
        }}
        >
        {props.children}
        </CartContext.Provider>
    )
}
export {CartProvider, CartContext}