import React, { useState, useEffect } from "react";

import Card from "./Card";
import "./styles/Form.css";

const FormCrearMoneda = (props) => {
  const [moneda, setMoneda] = useState({});

  useEffect(() => {
    if (props.moneda) setMoneda(props.moneda);
  }, [props.moneda]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(moneda);
  };

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Nombre"
            id="nombre"
            value={moneda.nombre}
            className="form-control"
          />
          <input
            required
            type="text"
            id="mintage"
            placeholder="Mintage"
            value={moneda.mintage}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Nur"
            id="nur"
            value={moneda.nur}
            className="form-control"
          />
          <input
            required
            type="text"
            id="canto"
            placeholder="Canto"
            value={moneda.canto}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Anverso"
            id="anverso"
            value={moneda.anverso}
            className="form-control"
          />
          <input
            required
            type="text"
            id="denominacion"
            placeholder="Denominación"
            value={moneda.denominacion}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Peso"
            id="peso"
            value={moneda.peso}
            className="form-control"
          />
          <input
            required
            type="text"
            id="divisa"
            placeholder="Divisa"
            value={moneda.divisa}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Año"
            id="year"
            value={moneda.year}
            className="form-control"
          />
          <input
            required
            type="text"
            id="reverso"
            placeholder="Reverso"
            value={moneda.reverso}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Forma"
            id="forma"
            value={moneda.forma}
            className="form-control"
          />
          <input
            required
            type="text"
            id="acunacion"
            placeholder="Acuñación"
            value={moneda.acunacion}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Metal"
            id="metal"
            value={moneda.metal}
            className="form-control"
          />
          <input
            required
            type="text"
            id="motivo"
            placeholder="Motivo"
            value={moneda.motivo}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Dueño"
            id="owner"
            value={moneda.owner}
            className="form-control"
          />
          <input
            required
            type="text"
            id="diametro"
            placeholder="Diametro"
            value={moneda.diametro}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            required
            type="text"
            placeholder="Artista"
            id="artista"
            value={moneda.artista}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Crear</button>
      </form>
    </Card>
  );
};

export default FormCrearMoneda;
