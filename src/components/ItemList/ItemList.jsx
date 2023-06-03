import { Item } from "../Item/Item";
import "../ItemList/itemlist.css";

export const ItemList = ({ currentProds }) => {
  return (
      <>
      {currentProds?.map((producto) => (
        <Item key={producto.id} prod={producto} />
      ))}
    </>
  );
};