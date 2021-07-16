import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../images/OsuDiGon_circles.png";
import "./styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="Navbar">
      <Link
        className={
          location.pathname.includes("home")
            ? "Navbar__brand"
            : "Navbar__brand active"
        }
        to="/home"
      >
        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
        <h2>OSU-DI-GON</h2>
      </Link>
      <div className="Navbar__options">
        <Link
          className={
            location.pathname.includes("home")
              ? "Navbar__brand"
              : "Navbar__brand active"
          }
          to="/home"
        >
          <span>Organizaciones</span>
        </Link>
        <Link
          className={
            location.pathname.includes("home")
              ? "Navbar__brand"
              : "Navbar__brand active"
          }
          to="/home"
        >
          <span>Eventos</span>
        </Link>
        <Link
          className={
            location.pathname.includes("login")
              ? "Navbar__brand"
              : "Navbar__brand active"
          }
          to="/login"
        >
          <span>Iniciar Sesión</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
