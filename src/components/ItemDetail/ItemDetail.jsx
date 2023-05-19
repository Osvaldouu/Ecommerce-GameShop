import ItemCount from "../ItemCount/ItemCount"
import "../ItemDetail/itemdetail.css"

 const ItemDetail = ({name,img,price,category,stock, logo})=>{
    // const {name,price,img,stock, category} = products
    return(
        <div className="container-detail">
            <div>
                <img src={img} alt={name} className="item-img" />
            </div>
            <div className="header">
                <h2 className="item-name">{name}</h2>
                <p className="price">{price}</p>
                <div className="datos-detail">
                    <p className="category">Stock: {stock}</p>
                    <p>||</p>
                    <p className="category"> {logo} Categoria: {category} </p>
                </div>
                <ItemCount initialState={1} stock={stock} onAdd={(quantity)=> console.log("cantidad agregada " + quantity)} />
            </div>
        </div>
    )
}

export default ItemDetail