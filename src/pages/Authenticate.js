import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./styles/Authenticate.css";
import logo from "../images/OsuDiGon.png";
import Login from "../components/Login";
import Register from "../components/Register";

const Authenticate = () => {
  const location = useLocation();

  return (
    <main className="Authenticate">
      <div>
        <img className="Authenticate__logo" src={logo} alt="OsuDiGon" />
      </div>
      {location.pathname.includes("login") ? (
        <Login></Login>
      ) : (
        <Register></Register>
      )}
    </main>
  );
};

export default Authenticate;
