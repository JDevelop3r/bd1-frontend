import React from "react";
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
  } = props;

  const onClickInscribirme = () => {
    console.log(id);
  };

  const onClickVerEvento = () => {
    console.log(id);
  };

  return (
    <Card>
      <div className="d-flex">
        <div className="col mr-4">
          <h3>{fecha}</h3>
          <p>
            <b>Organizador(es):</b> {organizadores}
          </p>
          <div className="d-flex">
            <p className="mr-3">
              <b>Tipo:</b> {tipo}
            </p>
            <p>
              <b>Entrada:</b> ${entrada}
            </p>
          </div>
          <div className="d-flex">
            <p className="mr-3">
              <b>Duración:</b> {duracion}
            </p>
            <p>
              <b>Entrada nuevo:</b> ${entradaNuevo}
            </p>
          </div>
          <p>
            <b>Lugar:</b> {lugar}
          </p>
        </div>

        <div className="col">
          <button onClick={onClickInscribirme} className="btn btn-primary">
            INSCRIBIRME
          </button>
          <button onClick={onClickVerEvento} className="btn btn-secondary">
            VER EVENTO
          </button>
        </div>

        <img src={imgURL} alt={lugar} />
      </div>
    </Card>
  );
};

export default EventoPreview;
