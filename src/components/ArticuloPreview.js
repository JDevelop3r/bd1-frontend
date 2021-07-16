import React from "react";
import Card from "./Card";

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
  } = props;

  const onClickVer = () => {
    console.log(id);
  };

  return (
    <Card>
      <div className="col justify-content-center">
        <img src={imgURL} alt={nombre} />
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
        </div>
        <button onClick={onClickVer} className="btn btn-primary">
          VER
        </button>
      </div>
    </Card>
  );
};

export default ArticuloPreview;
