import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import logo from "../images/OsuDiGon_circles.png";
import apiService from "../services/api-service";
import "./styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();
  const [token, setToken] = useState(apiService.getToken());

  const logout = () => {
    apiService.Logout();
    setToken(apiService.getToken());
  };

  setInterval(() => {
    if (apiService.getToken() !== token) setToken(apiService.getToken());
  }, 500);

  return (
    <div className="Navbar">
      <Link
        className={
          location.pathname.includes("home")
            ? "Navbar__brand active"
            : "Navbar__brand"
        }
        to="/home"
      >
        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
        <h2>OSU-DI-GON</h2>
      </Link>
      <div className="Navbar__options">
        <Link
          className={
            location.pathname.includes("organizaciones")
              ? "Navbar__brand active"
              : "Navbar__brand"
          }
          to="/organizaciones"
        >
          <span>Organizaciones</span>
        </Link>
        <Link
          className={
            location.pathname.includes("eventos")
              ? "Navbar__brand active"
              : "Navbar__brand"
          }
          to="/eventos"
        >
          <span>Eventos</span>
        </Link>
        {token ? (
          <Link to="/login" className="Navbar__brand" onClick={logout}>
            <span>Cerrar Sesión</span>
          </Link>
        ) : (
          <Link
            className={
              location.pathname.includes("login")
                ? "Navbar__brand active"
                : "Navbar__brand"
            }
            to="/login"
          >
            <span>Iniciar Sesión</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
