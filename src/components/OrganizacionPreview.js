import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const OrganizacionPreview = (props) => {
  const { id, nombre, proposito, fundacion, paginaWeb } = props.organizacion;

  return (
    <Card>
      <div className="row align-items-center">
        <div className="col-9">
          <h3>{nombre}</h3>
          <p>
            <b>Proposito:</b> {proposito}
          </p>
          <div className="row">
            <p>
              <span className="mx-2">
                <b>Fundacion:</b> {fundacion}
              </span>
              <span className="mr-2">
                <b>Página Web:</b> {paginaWeb}
              </span>
            </p>
          </div>
        </div>

        <div className="col-3">
          <Link to={`/organizacion/${id}`} className="btn btn-secondary btn-sm">
            VER
            <br />
            ORGANIZACIÓN
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default OrganizacionPreview;
