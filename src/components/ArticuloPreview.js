import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import "./styles/Articulo.css";

const ArticuloPreview = (props) => {
  const [articulo, setArticulo] = useState({});
  const { id, duracionmin, ask, bid, precio } = props.articulo;

  useEffect(() => {
    const { moneda, pintura, objeto } = props.articulo;
    if (!moneda && !pintura) return;
    let imagen, nombre, ano, id;
    if (moneda) {
      imagen = moneda.moneda.imagen;
      nombre = moneda.moneda.nombre;
      ano = moneda.moneda.ano;
      id = moneda.moneda.nur;
    } else {
      imagen = pintura.imagen;
      nombre = pintura.titulo;
      ano = pintura.ano;
      id = pintura.nur;
    }
    setArticulo({ imagen, nombre, ano, objeto, id });
  }, [props.articulo]);

  return (
    <Card>
      <div className="col justify-content-center">
        <img
          className="img-fluid imgMaxSize"
          src={`http://localhost:8000/` + articulo.imagen}
          alt={articulo.nombre}
        />
        <h4 className="text-align-center">{articulo.nombre}</h4>
        <div className="preview-content">
          <p>
            <b>Año:</b> {articulo.ano}
          </p>
          {articulo.objeto ? (
            <p>
              <b>Objeto:</b> {articulo.objeto}
            </p>
          ) : (
            ""
          )}
          {duracionmin ? (
            <p>
              <b>Duración:</b> {duracionmin}min
            </p>
          ) : (
            ""
          )}
          {props.precio ? (
            <p>
              <b>Precio:</b> {props.precio}
            </p>
          ) : (
            ""
          )}
          {(props.planificador &&
            (props.tipoPuja !== "Ascendente" ||
              props.tipoPuja !== "ascendente")) ||
          props.tipoPuja === "Ascendente" ? (
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
          {/* {precio ? ( Cambio de alfredo, revisar
            <p>
              <b>precio:</b> ${precio}
            </p>
          ) : (
            ""
          )} */}
        </div>
        <Link
          to={`objeto/${articulo.objeto}/${articulo.id}`}
          className="btn btn-primary"
        >
          VER
        </Link>
        {props.verSubasta ? (
          <Link to={`/subasta/${id}`} className="btn btn-secondary ml-2">
            Subasta
          </Link>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
};

export default ArticuloPreview;
