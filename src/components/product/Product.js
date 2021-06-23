import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Product.css";

const imagePlaceholder =
  "https://lh3.googleusercontent.com/proxy/ZA6UzC2ytH-2RDzB0ySKK97yUTL99Div8fTvzLz3k1NPZ4pw4Bg81Q0X_dH49xAI7ufSPKMupimEJcBwwrgEFm3ZF1vmYDsLXrFHia0HZT7k-4mq_0n9AZw";

const Product = (props) => {
  const history = useHistory();

  const { id, nombre, descripcion, imagen, precio } = props.item;

  const onDelete = props.onDelete;

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imagen ? `http://localhost:8000/${imagen}` : imagePlaceholder}
        alt={nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="badge badge-pill badge-success">${precio}</p>
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
