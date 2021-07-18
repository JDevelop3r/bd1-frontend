import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const OrganizacionPreview = (props) => {
  const { id, imgURL, nombre, proposito, fundacion, pagWeb, direccion } =
    props.organizacion;

  const onClickVerOrganizacion = () => {
    console.log(id);
  };

  return (
    <Card>
      <div className="row align-items-center">
        <div className="col-5">
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

        <div className="col-3">
          <Link to={`/organizacion/${id}`} className="btn btn-secondary btn-sm">
            VER
            <br />
            ORGANIZACIÓN
          </Link>
        </div>
        <div className="col-4 ">
          <img className="img-fluid" src={imgURL} alt={nombre} />
        </div>
      </div>
    </Card>
  );
};

export default OrganizacionPreview;
