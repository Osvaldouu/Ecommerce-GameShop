// import { useEffect } from "react";
import "../notice/notice.css";
import Swal from "sweetalert2";
import { useState } from "react";

const Notice = () => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
  });

  const showAlert = () => {
    if (inputs.email && inputs.name) {
      Swal.fire({
        title: "Enviado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <div className="notice-container">
      <div className="info-notice">
        <h2 className="subtitle-notice">¡Enterate los nuevos ingresos!</h2>
        <p className="p-notice">
          Recibe las notificaciones de las nuevas novedades
        </p>
      </div>
      <div className="input-notice">
        <form onSubmit={handleSubmit} className="input-button">
          <input
            required
            type="text"
            name="email"
            className="input"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="name"
            className="input"
            placeholder="Nombre"
            value={inputs.name}
            onChange={handleChange}
          />
          <button className="bn60" type="submit" onClick={showAlert}>
            Recibir noticia
          </button>
        </form>
        <p className="p-notice">Te llegara un mensaje en tu correo</p>
      </div>
    </div>
  );
};

export default Notice;
