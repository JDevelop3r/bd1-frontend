import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import "./styles/Articulo.css";

const ArticuloPreview = (props) => {
  const {
    id,
    imgURL,
    nombre,
    year,
    artista,
    divisa,
    lugar,
    periodo,
    dimensiones,
    bid,
    ask,
    precio,
  } = props.articulo;

  const onClickVer = () => {
    console.log(id);
  };

  return (
    <Card>
      <div className="col justify-content-center">
        <img className="img-fluid imgMaxSize" src={imgURL} alt={nombre} />
        <h4 className="text-align-center">{nombre}</h4>
        <div className="preview-content">
          <p>
            <b>Año:</b> {year}
          </p>
          <p>
            <b>Artista:</b> {artista}
          </p>
          {divisa ? (
            <p>
              <b>Divisa:</b> {divisa}
            </p>
          ) : (
            ""
          )}
          {lugar ? (
            <p>
              <b>Divisa:</b> {lugar}
            </p>
          ) : (
            ""
          )}
          {periodo ? (
            <p>
              <b>Divisa:</b> {periodo}
            </p>
          ) : (
            ""
          )}
          {dimensiones ? (
            <p>
              <b>Divisa:</b> {dimensiones}
            </p>
          ) : (
            ""
          )}
          {bid ? (
            <p>
              <b>Bid:</b> ${bid}
            </p>
          ) : (
            ""
          )}
          {ask ? (
            <p>
              <b>Ask:</b> ${ask}
            </p>
          ) : (
            ""
          )}
          {precio ? (
            <p>
              <b>precio:</b> ${precio}
            </p>
          ) : (
            ""
          )}
        </div>
        <Link to={`/objeto/${id}`} className="btn btn-primary">
          VER
        </Link>
      </div>
    </Card>
  );
};

export default ArticuloPreview;
