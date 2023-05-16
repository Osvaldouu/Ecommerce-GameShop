import ItemCount from "../ItemCount/ItemCount"
import "../ItemDetail/itemdetail.css"

export const ItemDetail = ({id, name,price,img,category, stock})=>{
    return(
        <article>
            <header className="header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="price">Precio: ${price}</p>
                <p className="category">Categoria:{category}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log("cantidad agregada"+ quantity)}>1</ItemCount>
            </footer>
        </article>
    )
}