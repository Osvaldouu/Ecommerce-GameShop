import { Item } from "../Item/Item"
import "../ItemList/itemlist.css"

export const ItemList = ({products}) => {
  return (
    <div className="listgroup">
    {products.map(prod=> <Item key={prod.id} {...prod} />)}
    </div>
  )
}
