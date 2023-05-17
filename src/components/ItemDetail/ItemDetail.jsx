import ItemCount from "../ItemCount/ItemCount"
import "../ItemDetail/itemdetail.css"

 const ItemDetail = ({name,img,price,category,stock})=>{
    // const {name,price,img,stock, category} = products
    return(
        <article>
            <header className="header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="price">Precio: {price}</p>
                <p className="category">Categoria:{category}</p>
            </section>
            <footer>
                <ItemCount initialState={1} stock={stock} onAdd={(quantity)=> console.log("cantidad agregada " + quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail