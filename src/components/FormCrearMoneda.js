import React, { useState, useEffect } from "react";
import apiService from "../services/api-service";

import Card from "./Card";
import "./styles/Form.css";

const FormCrearMoneda = (props) => {
  const [moneda, setMoneda] = useState({ ...props.moneda });
  const [divisas, setDivisas] = useState([]);
  const [paises, setPaises] = useState([]);

  const loadData = async () => {
    const dataDivisas = await apiService.getDivisas();
    setDivisas(dataDivisas);

    const dataPaises = await apiService.getPaises();
    setPaises(dataPaises);
  };

  useEffect(() => loadData(), []);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(moneda);
  };

  const onChangeInputs = (e) => {
    const value = e.target.value;
    switch (e.target.id) {
      case "nombre":
        setMoneda({ ...moneda, nombre: value });
        break;
      case "denominacion":
        setMoneda({ ...moneda, denominacion: value });
        break;
      case "mintage":
        setMoneda({ ...moneda, mintage: value });
        break;
      case "forma":
        setMoneda({ ...moneda, forma: value });
        break;
      case "metal":
        setMoneda({ ...moneda, metal: value });
        break;
      case "diametro":
        setMoneda({ ...moneda, diametromm: value });
        break;
      case "canto":
        setMoneda({ ...moneda, canto: value });
        break;
      case "peso":
        setMoneda({ ...moneda, pesogr: value });
        break;
      case "ano":
        setMoneda({ ...moneda, ano: value });
        break;
      case "motivo":
        setMoneda({ ...moneda, motivo: value });
        break;
      case "acunacion":
        setMoneda({ ...moneda, acunacion: value });
        break;
      case "anverso":
        setMoneda({ ...moneda, anverso: value });
        break;
      case "reverso":
        setMoneda({ ...moneda, reverso: value });
        break;
      case "divisa":
        setMoneda({
          ...moneda,
          id_divisa: divisas[value].id,
          id_pais_divisa: divisas[value].id_pais,
        });
        break;
      case "paises":
        setMoneda({ ...moneda, id_pais: value });
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
            maxLength="30"
            minLength="1"
            placeholder="Nombre"
            id="nombre"
            value={moneda.nombre}
            className="form-control"
          />
          <input
            onChange={onChangeInputs}
            required
            type="number"
            min="1"
            id="mintage"
            placeholder="Mintage"
            value={moneda.mintage}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <select
            onChange={onChangeInputs}
            required
            id="canto"
            value={moneda.canto}
            className="form-control"
          >
            <option value="">Canto</option>
            <option value="liso">Liso</option>
            <option value="estriado">Estriado</option>
          </select>
          <select
            onChange={onChangeInputs}
            required
            type="text"
            placeholder="Metal"
            id="metal"
            value={moneda.metal}
            className="form-control"
          >
            <option value="">Metal</option>
            <option value="plata">Plata</option>
            <option value="oro">Oro</option>
            <option value="platino">Platino</option>
          </select>
        </div>
        <div className="row form-group">
          <input
            onChange={onChangeInputs}
            required
            type="number"
            step="0.01"
            id="denominacion"
            placeholder="Denominación"
            value={moneda.denominacion}
            className="form-control"
          />
          <input
            onChange={onChangeInputs}
            required
            type="number"
            max="2021"
            placeholder="Año"
            id="ano"
            value={moneda.ano}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <input
            onChange={onChangeInputs}
            required
            type="number"
            placeholder="Peso (gr)"
            min="0.1"
            step="0.1"
            id="peso"
            value={moneda.peso}
            className="form-control"
          />
          <select
            onChange={onChangeInputs}
            required
            id="divisa"
            value={moneda.divisa}
            className="form-control"
          >
            <option value="">Divisa</option>
            {divisas.map((divisa, index) => (
              <option key={divisa.id} value={index}>
                {divisa.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="row form-group">
          <select
            onChange={onChangeInputs}
            required
            id="forma"
            value={moneda.forma}
            className="form-control"
          >
            <option value="">Forma</option>
            <option value="circular">Circular</option>
            <option value="cuadrada">Cuadrada</option>
          </select>
          <input
            onChange={onChangeInputs}
            required
            type="text"
            id="acunacion"
            maxLength="100"
            placeholder="Acuñación"
            value={moneda.acunacion}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <select
            onChange={onChangeInputs}
            className="form-control"
            id="paises"
            value={moneda.pais}
          >
            <option value="">País</option>
            {paises.map((pais) => (
              <option key={pais.id} value={pais.id}>
                {pais.nombre}
              </option>
            ))}
          </select>
          <input
            onChange={onChangeInputs}
            required
            type="number"
            id="diametro"
            min="0"
            placeholder="Diametro"
            value={moneda.diametro}
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <textarea
            onChange={onChangeInputs}
            required
            type="text"
            placeholder="Anverso"
            id="anverso"
            value={moneda.anverso}
            className="form-control"
          ></textarea>
        </div>
        <div className="row form-group">
          <textarea
            onChange={onChangeInputs}
            required
            type="text"
            id="reverso"
            placeholder="Reverso"
            value={moneda.reverso}
            className="form-control"
          ></textarea>
        </div>
        <div className="row form-group">
          <textarea
            onChange={onChangeInputs}
            required
            id="motivo"
            maxLength="100"
            placeholder="Motivo"
            value={moneda.motivo}
            className="form-control completo"
          ></textarea>
        </div>
        <button className="btn btn-primary">Crear</button>
      </form>
    </Card>
  );
};

export default FormCrearMoneda;
