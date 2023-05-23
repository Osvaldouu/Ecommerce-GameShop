const CartItem = ({id, name,price,img, quantity}) =>{
    return(
        <div className="cartitem-container">
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{quantity}</p>
        </div>
    )
}

export default CartItem