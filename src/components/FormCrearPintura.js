import React, { useState, useEffect } from "react";
import apiService from "../services/api-service";

import Card from "./Card";
import "./styles/Form.css";
const FormCrearPintura = (props) => {
  const [pintura, setPintura] = useState({ ...props.pintura });
  const [organizaciones, setOrganizaciones] = useState([]);

  const loadData = async () => {
    const dataOrganizaciones = await apiService.getOrganizaciones();
    setOrganizaciones(dataOrganizaciones);
  };

  useEffect(() => loadData(), []);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(pintura);
  };

  const onChangeInputs = (e) => {
    const value = e.target.value;
    switch (e.target.id) {
      case "titulo":
        setPintura({ ...pintura, titulo: value });
        break;
      case "dimensiones":
        setPintura({ ...pintura, dimensionescm: value });
        break;
      case "dueno":
        setPintura({ ...pintura, id_organizacion: parseInt(value) });
        break;
      case "estilo":
        setPintura({ ...pintura, estilo: value });
        break;
      case "ano":
        setPintura({ ...pintura, ano: value });
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <form className="Form" onSubmit={onSubmit}>
        <div className="row form-group">
          <input
            onChange={onChangeInputs}
            required
            type="text"
            maxlength="100"
            minlength="1"
            placeholder="Título"
            id="titulo"
            value={pintura.titulo}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            onChange={onChangeInputs}
            required
            type="text"
            pattern="[0-9]+x[0-9]"
            maxlength="30"
            minlength="1"
            placeholder="Dimensiones (#x#)"
            id="dimensiones"
            value={pintura.dimensiones}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <select
            required
            onChange={onChangeInputs}
            id="dueno"
            value={pintura.id_organizacion}
            className="form-control"
          >
            <option value="">Organización</option>
            {organizaciones.map((organizacion) => (
              <option key={organizacion.id} value={organizacion.id}>
                {organizacion.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="row form-group">
          <input
            onChange={onChangeInputs}
            required
            type="text"
            maxlength="30"
            minlength="1"
            placeholder="Estilo"
            id="estilo"
            value={pintura.estilo}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            onChange={onChangeInputs}
            required
            type="number"
            max="2021"
            placeholder="Año"
            id="ano"
            value={pintura.ano}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Crear</button>
      </form>
    </Card>
  );
};

export default FormCrearPintura;
