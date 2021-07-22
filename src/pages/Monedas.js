import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import apiService from "../services/api-service";


const Monedas = () => {

  const [monedas, setMonedas] = useState([]);

  const loadData = async () => {
    const resMonedas = await apiService.getMonedas();
    console.log(resMonedas);
    setMonedas(resMonedas);
  }

  useEffect(() => loadData(), []);

  return(
    <div className="container mt-2">
      <Card>
        <h2>Agregar Moneda</h2>
        <div className="row">
          <div className="col">
            <select
                className="form-control"
                value={null}
                id=""
              >
                <option value="">Selecciona una moneda</option>
                {monedas.map((monedas) => (
                  <option key={monedas.id} value={monedas.id}>
                    {monedas.nur}
                  </option>
                ))}
              </select>
          </div>
        </div>
        <button className="btn btn-primary">
          Agregar
        </button>
      </Card>
    </div>
  );
};

export default Monedas;