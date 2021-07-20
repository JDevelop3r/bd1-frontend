import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import apiService from "../services/api-service";

const ArtistaObjeto = () => {
  let objId;
  let artistaId;
  const [type, setType] = useState("pintura");
  const [pinturas, setPinturas] = useState([]);
  const [monedas, setMonedas] = useState([]);
  const [artistas, setArtistas] = useState([]);

  const loadData = async () => {
    const [resPinturas, resMonedas, resArtistas] = await Promise.all([
      apiService.getPinturas(),
      apiService.getMonedas(),
      apiService.getArtistas(),
    ]);
    setPinturas(resPinturas);
    setMonedas(resMonedas);
    setArtistas(resArtistas);
  };

  useEffect(() => loadData(), []);

  const onClickAgregar = async () => {
    if (!objId || !artistaId) return;
    console.log(objId);
    let res;
    if (type === "moneda") {
      res = await apiService.agregarArtistaMoneda({
        id_artista: artistaId,
        id_moneda: objId,
      });
    }
    res = await apiService.agregarArtistaPintura({
      id_artista: artistaId,
      id_moneda: objId,
    });
    console.log(res);
  };

  const onClickType = () => {
    if (type === "pintura") {
      setType("moneda");
      return;
    }
    objId = null;
    artistaId = null;
    setType("pintura");
  };

  const onChangeObjeto = (e) => {
    objId = e.target.value;
  };

  const onChangeArtista = (e) => {
    objId = e.target.value;
  };

  return (
    <main className="container mt-2">
      <Card>
        <h2>Agregar artista a {type}</h2>
        <div className="row">
          <button className="btn btn-secondary" onClick={onClickType}>
            Cambiar a {type === "pintura" ? "moneda" : "pintura"}
          </button>
        </div>
        <div className="row">
          <div className="col">
            <select
              className="form-control"
              value={objId}
              id="selectObjeto"
              onChange={onChangeObjeto}
            >
              <option value="">Selecciona una {type}</option>
              {type === "moneda"
                ? monedas.map((moneda) => (
                    <option key={moneda.id} value={moneda.id}>
                      {moneda.nombre}
                    </option>
                  ))
                : pinturas.map((pintura) => (
                    <option key={pintura.id} value={pintura.id}>
                      {pintura.titulo}
                    </option>
                  ))}
            </select>
          </div>
          <div className="col">
            <select
              className="form-control"
              value={artistaId}
              id="selectObjeto"
              onChange={onChangeArtista}
            >
              <option value="">Selecciona un Artista</option>
              {artistas.map((artista) => (
                <option key={artista.id} value={artista.id}>
                  {artista.nombre} {artista.apellido}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={onClickAgregar}>
          Agregar
        </button>
      </Card>
    </main>
  );
};

export default ArtistaObjeto;
