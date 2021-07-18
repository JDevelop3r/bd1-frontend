import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";

const EventoPreview = (props) => {
  const {
    id,
    imgURL,
    fecha,
    organizadores,
    tipo,
    duracion,
    lugar,
    entrada,
    entradaNuevo,
  } = props.evento;

  const onClickInscribirme = () => {
    console.log(id);
  };

  const onClickVerEvento = () => {
    console.log(id);
  };

  return (
    <Card>
      <div className="row align-items-center">
        <div className="col-5">
          <h3>{fecha}</h3>
          <p>
            <b>Organizador(es):</b> {organizadores}
          </p>
          <div className="row">
            <div className="col-6 mr-1">
              <b>Tipo:</b> {tipo}
            </div>
            <div className="col-6">
              <b>Entrada:</b> ${entrada}
            </div>
          </div>
          <div className="row">
            <div className="col-6 mr-1">
              <p>
                <b>Duración:</b> {duracion}
              </p>
            </div>
            <div className="col-6">
              <p>
                <b>Entrada nuevo:</b> ${entradaNuevo}
              </p>
            </div>
          </div>
          <p>
            <b>Lugar:</b> {lugar}
          </p>
        </div>

        <div className="col-3">
          <button onClick={onClickInscribirme} className="btn btn-primary my-1">
            INSCRIBIRME
          </button>
          <Link to={`/evento/${id}`} className="btn btn-secondary my-1">
            VER EVENTO
          </Link>
        </div>

        <div className="col-4 ">
          <img className="img-fluid" src={imgURL} alt={lugar} />
        </div>
      </div>
    </Card>
  );
};

export default EventoPreview;
