import React from "react";

const Login = () => {
  const handleLogin = () => {};

  return (
    <div className="Authenticate__container">
      <h2>Iniciar Sesión</h2>
      <div className="my-2"></div>
      <h5 htmlFor="cuenta">Selecciona una cuenta</h5>
      <div className="form-group mb-3">
        <select
          className="Authenticate__container-input form-control"
          name="cuenta"
          id="selectCuenta"
        >
          <option value="cuenta1">Cuenta1</option>
          <option value="cuenta2">Cuenta2</option>
          <option value="cuenta3">Cuenta3</option>
        </select>
      </div>
      <button className="btn btn-primary mb-4" click={handleLogin}>
        Iniciar Sesion
      </button>
      <span>
        <b>
          ¿No tienes una cuenta todavía? <a href="/register">Registrate</a>
        </b>
      </span>
    </div>
  );
};

export default Login;
