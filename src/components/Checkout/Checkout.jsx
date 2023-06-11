import { useState } from "react";
import "./checkout.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../../firebase/firebase";
import { UseCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();
  const { cart, getTotal, clearCart } = UseCart();

  const datBuyer = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const buyFinish = (e) => {
    e.preventDefault();
    if (Object.values(buyer).length !== 3) {
      Swal.fire({
        title: "Completar el campo",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }else {
      const ventas = collection(database, "orders");
      addDoc(ventas, {
        buyer,
        items: cart,
        total: getTotal(),
        date: serverTimestamp(),
      })
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {!orderId ? (
        <div className="checkout-container">
          <h1 className="title-checkout">Checkout</h1>
          <h3 className="subtitle-checkout">Por favor, ingrese sus datos!</h3>
          <form className="form-container" onSubmit={buyFinish}>
            <input
              className="input-checkout"
              type="text"
              placeholder="Nombre"
              name="name"
              value={buyer.name}
              onChange={datBuyer}
            />
            <input
              className="input-checkout"
              type="number"
              placeholder="+52-592933"
              name="phone"
              value={buyer.phone}
              onChange={datBuyer}
            />
            <input
              className="input-checkout"
              type="email"
              placeholder="Email"
              name="email"
              value={buyer.email}
              onChange={datBuyer}
            />
            <button type="submit" className="buton1-check">
              Finalizar Compra
            </button>
          </form>
        </div>
      ) : (
        <div className="ckt-container">
          <h2 className="title-checkout">Muchas gracias por su compra!</h2>
          <h3 className="orden-checkout">Su orden es: {orderId}</h3>
          <button onClick={() => navigate("/")} className="buton2-check">
            Volver a comprar!
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
