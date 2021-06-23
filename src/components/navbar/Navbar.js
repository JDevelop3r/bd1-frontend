import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

let Navbar = () => {
  return (
    <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/home">
            {/* <img className="Navbar__brand-logo" src={logo} alt="Logo" /> */}
            <span className="font-weight-light">LOGO</span>
          </Link>
          <Link className="Navbar__brand" to="/home">
            {/* <img className="Navbar__brand-logo" src={logo} alt="Logo" /> */}
            <span className="font-weight-light">Productos</span>
          </Link>
        </div>
      </div>
  )
}

export default Navbar;