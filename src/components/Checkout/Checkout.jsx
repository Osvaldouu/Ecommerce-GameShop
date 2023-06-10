import { useState } from "react";
import "./checkout.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../../firebase/firebase";
import { UseCart } from "../../context/CartContext";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [orderId, setOrderId] = useState("");
  const { cart, getTotal, clearCart } = UseCart();

  const datBuyer = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const buyFinish = (e) => {
    e.preventDefault();
    const ventas = collection(database, "orders");
    addDoc(ventas, {
      buyer,
      items: cart,
      total: getTotal(),
      date: serverTimestamp()
    })
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <h1>Checkout</h1>
        <h3>Por favor, ingrese sus datos!</h3>
        <form className="form-container" onSubmit={buyFinish}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={datBuyer}
          />
          <input
            type="number"
            placeholder="+52-592933"
            name="phone"
            onChange={datBuyer}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={datBuyer}
          />
          <button type="submit">Finalizar Compra</button>
        </form>
      </div>
      <div>
        <h2>Muchas gracias por su compra!</h2>
        <h3>Su orden es: {orderId}</h3>
      </div>
    </div>
  );
};

export default Checkout;
