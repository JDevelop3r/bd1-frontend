import React from "react";
import Card from "./Card";

const OrganizacionPreview = (props) => {
  const { id, imgURL, nombre, proposito, fundacion, pagWeb, direccion } = props;

  const onClickVerOrganizacion = () => {
    console.log(id);
  };

  return (
    <Card>
      <div className="d-flex">
        <div className="col mr-4">
          <h3>{nombre}</h3>
          <p>
            <b>Proposito:</b> {proposito}
          </p>
          <p>
            <b>Fundacion:</b> {fundacion}
          </p>
          <p>
            <b>Página Web:</b> {pagWeb}
          </p>
          <p>
            <b>Dirección:</b> {direccion}
          </p>
        </div>

        <div className="col">
          <button
            onClick={onClickVerOrganizacion}
            className="btn btn-secondary"
          >
            VER
            <br />
            ORGANIZACIÓN
          </button>
        </div>

        <img src={imgURL} alt={nombre} />
      </div>
    </Card>
  );
};

export default OrganizacionPreview;
