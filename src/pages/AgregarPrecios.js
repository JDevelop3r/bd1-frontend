import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import apiService from "../services/api-service";

const AgregarPrecios = () => {
  const [paises, setPaises] = useState([]);
  const [eventos, setEventos] = useState([]);

  const loadData = async () => {
    const resPaises = await apiService.getPaises();
    console.log(resPaises);
    setPaises(resPaises);
  }

  const loadDataE = async () => {
    const resEventos = await apiService.getEventos();
    console.log(resEventos);
    setEventos(resEventos);
  }

  useEffect(() => loadData(), []);
  useEffect(() => loadDataE(), []);

  return (
    <div className="container">
      <Card>
      <h2>Agregar Costo de Envio</h2>
      <div className="row">
        <div className="col">
          <select
            className="form-control"
          >
            <option value="">Seleccione Evento</option>
            {eventos.map((eventos) => (
                    <option key={eventos.id} value={eventos.id}>
                      {eventos.fecha}
                   </option>))}
          </select>
        </div>
        <div className="col">
          <select
            className="form-control"
          >
            <option value="">Seleccione País</option>
            {paises.map((paises) => (
                    <option key={paises.id} value={paises.id}>
                      {paises.nombre}
                    </option>))}
          </select>
        </div>
      </div>
      <div>
      <input
            required
            type="number"
            id="Costo de envio"
            min="0"
            placeholder="Costo de Envio"
          />
      </div>
    </Card>
    </div>
  );
}

export default AgregarPrecios;
