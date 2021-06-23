import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Product.css";

const imagePlaceholder =
  "https://lh3.googleusercontent.com/proxy/ZA6UzC2ytH-2RDzB0ySKK97yUTL99Div8fTvzLz3k1NPZ4pw4Bg81Q0X_dH49xAI7ufSPKMupimEJcBwwrgEFm3ZF1vmYDsLXrFHia0HZT7k-4mq_0n9AZw";

const Product = (props) => {
  const history = useHistory();

  const { id, habitaciones, banos, balcon, gas, imagen } = props.item;

  const onDelete = props.onDelete;

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imagen ? `http://localhost:8000/${imagen}` : imagePlaceholder}
        alt={id}
      />
      <div className="card-body">
        <p className="card-text">
          <b>Habitaciones:</b> {habitaciones}
        </p>
        <p className="card-text">
          <b>Baños:</b> {banos}
        </p>
        <div className="row">
          <p
            className={`mx-2 badge badge-pill ${
              balcon ? "badge-success" : "badge-danger"
            }`}
          >
            Balcon
          </p>
          <p
            className={`mx-2 badge badge-pill ${
              gas ? "badge-success" : "badge-danger"
            }`}
          >
            Gas
          </p>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-danger mx-1" onClick={() => onDelete(id)}>
            Eliminar
          </button>
          <button
            className="btn btn-warning mx-1"
            onClick={() => history.push(`/editar/${id}`)}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
