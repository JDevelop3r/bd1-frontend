import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import apiService from "../services/api-service";
import Card from "./Card";

const Login = () => {
  const history = useHistory();

  const [type, setType] = useState("organizacion");
  const [cuenta, setCuenta] = useState();
  const [organizaciones, setOrganizaciones] = useState([]);
  const [coleccionistas, setColeccionistas] = useState([]);

  const onSetType = () => {
    if (type === "organizacion") {
      setType("coleccionista");
      return;
    }
    setType("organizacion");
  };

  const loadData = async () => {
    const resOrganizaciones = await apiService.getOrganizaciones();
    setOrganizaciones(resOrganizaciones);

    const resColeccionistas = await apiService.getColeccionistas();
    setColeccionistas(resColeccionistas);
  };

  useEffect(() => loadData(), []);

  const onChangeCuenta = (e) => {
    const value = e.target.value;
    setCuenta(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!cuenta) return;
    const res = await apiService.login({ id: cuenta, tipo: type });
    if (res.status === 200 || res.status === 201) {
      history.push("/");
    }
  };

  return (
    <Card>
      <h2>Iniciar Sesión</h2>
      <p>Cambiar a</p>
      <button className="btn btn-secondary" onClick={onSetType}>
        {type === "organizacion" ? "Coleccionista" : "Organización"}
      </button>
      <div className="my-2"></div>
      <h5 htmlFor="cuenta">Selecciona una cuenta</h5>
      <form
        className="d-flex flex-column justify-content-center"
        onSubmit={handleLogin}
      >
        <div className="form-group mb-3">
          <select
            className="Authenticate__container-input form-control"
            name="cuenta"
            id="selectCuenta"
            onChange={onChangeCuenta}
          >
            <option value="">
              {type === "organizacion" ? "Organizacion" : "Coleccionista"}
            </option>
            {type === "organizacion"
              ? organizaciones.map((organizacion) => (
                  <option key={organizacion.id} value={organizacion.id}>
                    {organizacion.nombre}
                  </option>
                ))
              : coleccionistas.map((coleccionista) => (
                  <option key={coleccionista.id} value={coleccionista.id}>
                    {coleccionista.nombre}
                  </option>
                ))}
          </select>
        </div>
        <button className="btn btn-primary mb-4">Iniciar Sesion</button>
      </form>
      <span>
        <b>
          ¿No tienes una cuenta todavía? <a href="/register">Registrate</a>
        </b>
      </span>
    </Card>
  );
};

export default Login;
