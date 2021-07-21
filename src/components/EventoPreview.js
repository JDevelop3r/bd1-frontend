import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";

const EventoPreview = (props) => {
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
    planificadores,
  } = props.evento;

  const onClickInscribirme = () => {
    console.log(id);
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
          <button onClick={onClickInscribirme} className="btn btn-primary my-1">
            INSCRIBIRME
          </button>
          <Link to={`/evento/${id}`} className="btn btn-secondary my-1">
            VER EVENTO
          </Link>

          <Link to={`/agregar-subastas/${id}`} className="btn btn-info my-1">
            Agregar Subastas
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default EventoPreview;
