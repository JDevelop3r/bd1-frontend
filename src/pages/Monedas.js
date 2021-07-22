import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";

import Card from "../components/Card";
import apiService from "../services/api-service";

const Monedas = () => {
  const alert = useAlert();
  const [monedas, setMonedas] = useState([]);
  const [seleccionado, setSeleccionado] = useState([]);

  const loadData = async () => {
    const resMonedas = await apiService.getSoloMonedas();
    console.log(resMonedas);
    setMonedas(resMonedas);
  };

  useEffect(() => loadData(), []);

  const onAgregar = async () => {
    try {
      const res = await apiService.setCatalogoMonedas(seleccionado);
      alert.show("Moneda agregada al catalogo");
    } catch (error) {
      alert.show("Error al agregar moneda al catalogo");
    }
  };

  return (
    <div className="container mt-2">
      <Card>
        <h2>Agregar Moneda</h2>
        <div className="row">
          <div className="col">
            <select
              className="form-control"
              value={seleccionado}
              onChange={(e) => {
                setSeleccionado(e.target.value);
              }}
              id=""
            >
              <option value="">Selecciona una moneda</option>
              {monedas.map((monedas) => (
                <option key={monedas.id} value={monedas.id}>
                  {monedas.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={onAgregar}>
          Agregar
        </button>
      </Card>
    </div>
  );
};

export default Monedas;
