import React, { useState } from "react";

import Card from "./Card";
import "./styles/Form.css";

const FormContacto = (props) => {
  const [contacto, setContacto] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(contacto);
  };

  const onChangeInputs = (e) => {
    const value = e.target.value;
    switch (e.target.id) {
      case "nombre":
        setContacto({ ...contacto, nombre: value });
        break;
      case "apellido":
        setContacto({ ...contacto, apellido: value });
        break;
      case "segundoNombre":
        setContacto({ ...contacto, segundoNombre: value });
        break;
      case "segundoApellido":
        setContacto({ ...contacto, segundoApellido: value });
        break;
      case "dni":
        setContacto({ ...contacto, dni: value });
        break;
      case "telefono":
        setContacto({ ...contacto, telefono: value });
        break;
      case "email":
        setContacto({ ...contacto, email: value });
        break;
      case "cargo":
        setContacto({ ...contacto, cargo: value });
        break;
      default:
        break;
    }
  };

  return (
    <Card>
      <h3>Agregar contacto</h3>
      <form onSubmit={onSubmit}>
        <div className="row">
          <input
            className="form-control col"
            onChange={onChangeInputs}
            id="nombre"
            type="text"
            maxLength="30"
            value={contacto.nombre}
            placeholder="Nombre"
            required
          />
          <input
            className="form-control col"
            onChange={onChangeInputs}
            id="segundoNombre"
            type="text"
            maxLength="30"
            value={contacto.segundoNombre}
            placeholder="Segundo Nombre"
          />
        </div>
        <div className="row">
          <input
            className="form-control col"
            onChange={onChangeInputs}
            id="apellido"
            type="text"
            maxLength="30"
            value={contacto.apellido}
            placeholder="Apellido"
            required
          />
          <input
            className="form-control col"
            onChange={onChangeInputs}
            id="segundoApellido"
            type="text"
            maxLength="30"
            value={contacto.segundoApellido}
            placeholder="Segundo Apellido"
            required
          />
        </div>
        <div className="row">
          <input
            className="form-control col"
            onChange={onChangeInputs}
            id="dni"
            maxLength="20"
            type="number"
            value={contacto.dni}
            placeholder="DNI"
            required
          />
          <input
            className="form-control col"
            onChange={onChangeInputs}
            id="cargo"
            type="text"
            maxLength="50"
            value={contacto.cargo}
            placeholder="Cargo"
            required
          />
        </div>
        <div className="row">
          <input
            className="form-control col"
            type="tel"
            id="telefono"
            maxLength="20"
            pattern="[0-9\s]{2,3}[0-9]{3,}-[0-9]{3,}-[0-9]{4,}"
            placeholder="Teléfono: (58 426-111-2233)"
            value={contacto.telefono}
            onChange={onChangeInputs}
            required
          />
          <input
            className="form-control col"
            onChange={onChangeInputs}
            id="email"
            type="email"
            maxLength="50"
            value={contacto.email}
            placeholder="Email"
            required
          />
        </div>
        <button className="btn btn-primary">Crear</button>
      </form>
    </Card>
  );
};

export default FormContacto;
