import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

import apiService from "../services/api-service";
import Card from "./Card";

const EventoPreview = (props) => {
  const alert = useAlert();
  const [inscrito, setInscrito] = useState(props.evento.inscrito);
  const {
    id,
    inscripcionCliente,
    inscripcionClienteNuevo,
    fecha,
    status,
    tipo,
    duracionHoras,
    lugar,
    pais,
    esHoy,
    planificador,
    planificadores,
  } = props.evento;

  const onClickInscribirme = async () => {
    if (inscrito === false) {
      try {
        const res = await apiService.inscribirEnEvento(id);
        if (res.status === 200 || res.status === 201) {
          alert.show("Te has inscrito en este evento");
          setInscrito(true);
        }
      } catch (error) {
        alert.show("Error al inscribirse en este evento");
      }
    }
    console.log(id);
  };

  const onComenzarSubsata = async () => {
    await apiService.comenzarSubasta(id);
  };

  return (
    <Card>
      <div className="row align-items-center">
        <div className="col-9">
          <h3>{fecha}</h3>
          <p>
            <b>Organizador(es):</b>{" "}
            {planificadores.map((planificador, index) => (
              <span className="mr-1" key={planificador.id}>
                &nbsp;&nbsp;{planificador.nombre}.
              </span>
            ))}
          </p>
          <div className="row">
            <div className="col-6 mr-1">
              <b>Tipo:</b> {tipo}
            </div>
            <div className="col-6">
              <b>Entrada:</b> ${inscripcionCliente}
            </div>
          </div>
          <div className="row">
            <div className="col-6 mr-1">
              <p>
                <b>Duración:</b> {duracionHoras}
              </p>
            </div>
            {inscripcionClienteNuevo ? (
              <div className="col-6">
                <p>
                  <b>Entrada nuevo:</b> ${inscripcionClienteNuevo}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          {lugar ? (
            <p>
              <b>Lugar:</b> {lugar}, {pais.nombre}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="col-3">
          <span className="badge bg-warning rounded-pill text-dark">
            {status}
          </span>
          {inscrito === false && status === "Pendiente" ? (
            <button
              onClick={onClickInscribirme}
              className="btn btn-primary my-1"
            >
              INSCRIBIRME
            </button>
          ) : (
            ""
          )}
          {inscrito === true && status === "Pendiente" ? (
            <button disabled className="btn btn-primary my-1">
              INSCRITO
            </button>
          ) : (
            ""
          )}
          <Link to={`/evento/${id}`} className="btn btn-secondary my-1">
            VER EVENTO
          </Link>
          {planificador && status === "Pendiente" ? (
            <Link to={`/agregar-subastas/${id}`} className="btn btn-info my-1">
              Agregar Subastas
            </Link>
          ) : (
            ""
          )}
          {planificador && esHoy && status === "Pendiente" ? (
            <Link
              to={`/evento/${id}`}
              onClick={onComenzarSubsata}
              className="btn btn-warning my-1"
            >
              Comenzar subasta
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </Card>
  );
};

export default EventoPreview;
