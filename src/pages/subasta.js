import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BotonOfertar from "../components/BotonOfertar";
import Card from "../components/Card";
import ArticuloPreview from "../components/ArticuloPreview";
import apiService from "../services/api-service";

const Subasta = () => {
  const { id } = useParams();
  let interval;
  const [evento, setEvento] = useState({});
  const [subasta, setSubasta] = useState({});
  const [articulo, setArticulo] = useState({});
  const [logs, setLogs] = useState([]);

  const loadData = async () => {
    const res = await apiService.getEventoBySubastaId(id);
    const resArticulo = await apiService.getListaObjetoSubasta(id);
    setArticulo(resArticulo);
    setEvento(res);
    console.log(res);
    await recargarPujas(res);
    initInterval();
  };

  const recargarPujas = async (res) => {
    await apiService.actualizar();
    if (res.tipoPuja === "ascendente") {
      console.log("ascendente");
      const resSubasta = await apiService.getPujaDinamica(id);
      console.log(resSubasta);
      setSubasta(resSubasta);
      setLogs(resSubasta.logs);
    } else if (res.tipoPuja === "sobre cerrado") {
      console.log("cerrado");
      const resSubasta = await apiService.getPujaSobreCerrado(id);
      console.log(resSubasta);
      setSubasta(resSubasta);
      setLogs(resSubasta.logs);
    }
  };

  const initInterval = () => {
    interval = setInterval(() => recargarPujas(evento), 1500);
  };

  const enviarPujaSobreCerrado = async (precio) => {
    await apiService.enviarOfertaSobreCerrado(precio, id);
  };

  const enviarPujaDinamica = async (precio) => {
    await apiService.enviarOfertaDinamica(precio, id);
  };

  useEffect(() => {
    loadData();
    return () => {
      clearInterval(interval);
    };
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <h2>
              Subasta{" "}
              <span className="badge bg-warning">
                {subasta.activa ? "Activa" : "Finalizada"}
              </span>
            </h2>
            <p>
              <b>Hora inicio: </b>
              {subasta.hora_inicio}
            </p>
            <p>
              <b>Hora fin: </b>
              {subasta.hora_fin}
            </p>
          </div>
          <ArticuloPreview
            verSubasta={false}
            precio={subasta.precio}
            articulo={articulo}
            tipoPuja={evento.tipoPuja}
            planificador={subasta.planificador}
          />
        </div>
        <div className="col">
          {evento.tipoPuja === "ascendente" || subasta.planificador ? (
            <div>
              <h3>Pujas</h3>
              <Card>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h4>Coleccionista</h4>
                    </div>
                    <div className="col">
                      <h4>Oferta</h4>
                    </div>
                  </div>
                </div>
                {logs?.map((coleccionista, index) => (
                  <div key={index} className="container">
                    <div className="row justify-content-center">
                      <div className="col">
                        <p>
                          {coleccionista.nombre} {coleccionista.apellido}
                        </p>
                      </div>
                      <div className="col">
                        <p>${coleccionista.precio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          ) : (
            ""
          )}
          {!subasta.planificador ? (
            <div>
              <h3>Ofertar</h3>
              <BotonOfertar
                pujo={subasta.pujo}
                enviarOferta={
                  evento.tipoPuja === "ascendente"
                    ? enviarPujaDinamica
                    : enviarPujaSobreCerrado
                }
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Subasta;
