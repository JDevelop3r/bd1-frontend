import React, { useState } from "react";

import Card from "./Card";
import "./styles/Form.css";

const FormCrearArtista = (props) => {
  const [artista, setArtista] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(artista);
  };

  const onChangeInputs = (e) => {
    const value = e.target.value;
    switch (e.target.id) {
      case "nombre":
        setArtista({ ...artista, nombre: value });
        break;
      case "apellido":
        setArtista({ ...artista, apellido: value });
        break;
      case "nombreArtistico":
        setArtista({ ...artista, nombreArtistico: value });
        break;
      default:
        break;
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          onChange={onChangeInputs}
          id="nombre"
          type="text"
          placeholder="Nombre"
          required
        />
        <input
          className="form-control"
          onChange={onChangeInputs}
          id="apellido"
          type="text"
          placeholder="Apellido"
          required
        />
        <input
          className="form-control"
          onChange={onChangeInputs}
          id="nombreArtistico"
          type="text"
          placeholder="Nombre artistico"
        />
        <button className="btn btn-primary">Crear</button>
      </form>
    </Card>
  );
};

export default FormCrearArtista;
