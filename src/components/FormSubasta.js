import React, { useState } from "react";

import Card from "./Card";

const FormSubasta = (props) => {
  const [subasta, setSubasta] = useState({});
  const { catalogoMonedas, catalogoPinturas, index } = props;

  return (
    <Card className="col-3">
      <select
        required
        value={subasta.objeto}
        className="form-control"
        onChange={(e) => {
          const value = e.target.value;
          setSubasta({ ...subasta, objeto: value });
          props.setSubasta(index, { ...subasta, objeto: value });
        }}
      >
        <option value="">Objeto a subastar</option>
        <option value="moneda">Moneda</option>
        <option value="pintura">Pintura</option>
      </select>
      {subasta.objeto === "moneda" ? (
        <select
          required
          value={subasta.nur_moneda}
          className="form-control"
          onChange={(e) => {
            const value = e.target.value;
            const { id_pintura, ...subastaClean } = subasta;
            setSubasta({ ...subastaClean, nur_moneda: value });
            props.setSubasta(index, { ...subastaClean, nur_moneda: value });
          }}
        >
          <option value="">Selecciona la moneda</option>
          {catalogoMonedas.map((moneda) => (
            <option key={moneda.nur} value={moneda.nur}>
              {moneda.moneda.nombre}
            </option>
          ))}
        </select>
      ) : (
        ""
      )}
      {subasta.objeto === "pintura" ? (
        <select
          required
          value={subasta.id_pintura}
          className="form-control"
          onChange={(e) => {
            const value = e.target.value;
            const { nur_moneda, ...subastaClean } = subasta;
            setSubasta({ ...subastaClean, id_pintura: value });
            props.setSubasta(index, { ...subastaClean, id_pintura: value });
          }}
        >
          <option value="">Selecciona la pintura</option>
          {catalogoPinturas.map((pintura) => (
            <option key={pintura.nur} value={pintura.nur}>
              {pintura.titulo}
            </option>
          ))}
        </select>
      ) : (
        ""
      )}
      <input
        required
        type="number"
        value={subasta.precio}
        placeholder="Precio"
        name="precio"
        min="1"
        id="precio"
        onChange={(e) => {
          const value = e.target.value;
          setSubasta({ ...subasta, precio: value });
          props.setSubasta(index, { ...subasta, precio: value });
        }}
        className="form-control"
      />
      <input
        required
        type="number"
        value={subasta.porcentajeGananciaMin}
        placeholder="% Ganancia mínima"
        max="99999.99"
        step="0.01"
        name="gananciaMin"
        min="0.01"
        id="gananciaMin"
        onChange={(e) => {
          const value = e.target.value;
          setSubasta({ ...subasta, porcentajeGananciaMin: value });
          props.setSubasta(index, { ...subasta, porcentajeGananciaMin: value });
        }}
        className="form-control"
      />
      <input
        required
        type="number"
        value={subasta.duracionmin}
        placeholder="Duración mínima (horas)"
        name="duracionmin"
        max="6"
        min="1"
        id="duracionmin"
        onChange={(e) => {
          let value = e.target.value;
          console.log(value);
          setSubasta({ ...subasta, duracionmin: value });
          console.log(subasta);
          props.setSubasta(index, { ...subasta, duracionmin: value });
        }}
        className="form-control"
      />
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => props.onDelete(index)}
      >
        Eliminar
      </button>
    </Card>
  );
};

export default FormSubasta;
