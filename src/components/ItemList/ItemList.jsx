import { Item } from "../Item/Item";
import "../ItemList/itemlist.css";

export const ItemList = ({ productsList }) => {
  return (
      <>
      {productsList.map((producto) => (
        <Item key={producto.id} prod={producto} />
      ))}
    </>
  );
};
