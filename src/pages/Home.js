import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="container row">
        <Link to="/agregar-artista" className="btn btn-primary col mx-2">
          Agregar artista
        </Link>
        <Link to="/crear-evento" className="btn btn-primary col mx-2">
          Crear Evento
        </Link>
        <Link to="/agregar-moneda" className="btn btn-primary col mx-2">
          Agregar Catalogo Moneda
        </Link>
        <Link to="/crear/moneda" className="btn btn-primary col mx-2">
          Crear Moneda
        </Link>
        <Link to="/crear/pintura" className="btn btn-primary col mx-2">
          Crear Pintura
        </Link>
        <Link to="/" className="btn btn-primary col mx-2"></Link>
      </div>
    </div>
  );
};

export default Home;
