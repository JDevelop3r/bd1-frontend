import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/OsuDiGon_circles.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link className="Navbar__brand" to="/home">
        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
        <h2>OSU-DI-GON</h2>
      </Link>
      <div className="Navbar__options">
        <Link className="Navbar__brand" to="/home">
          <span>Organizaciones</span>
        </Link>
        <Link className="Navbar__brand" to="/home">
          <span>Eventos</span>
        </Link>
        <Link className="Navbar__brand" to="/login">
          <span>Iniciar Sesión</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
