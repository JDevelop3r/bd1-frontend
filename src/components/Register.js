import React, { useState } from "react";
import Card from "./Card";

const Register = () => {
  const [type, setType] = useState(false);
  const [empresa, setEmpresa] = useState({});
  const [coleccionista, setColeccionista] = useState({});

  const handleChangeType = (e) => {
    setType(!type);
    setColeccionista({});
    setEmpresa({});
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (type) {
      console.log(coleccionista);
    } else {
      console.log(empresa);
    }
  };

  const onChangeEmail = (e) => {
    if (type) setColeccionista({ ...coleccionista, email: e.target.value });
    else setEmpresa({ ...empresa, email: e.target.value });
  };

  const onChangeName = (e) => {
    if (type) setColeccionista({ ...coleccionista, nombre: e.target.value });
    else setEmpresa({ ...empresa, nombre: e.target.value });
  };

  const onChangeProposito = (e) =>
    setEmpresa({ ...empresa, proposito: e.target.value });

  const onChangeFundacion = (e) =>
    setEmpresa({ ...empresa, fundacion: e.target.value });

  const onChangePagWeb = (e) =>
    setEmpresa({ ...empresa, pagWeb: e.target.value });

  const onChangeDireccion = (e) =>
    setEmpresa({ ...empresa, direccion: e.target.value });

  const onChangeAlcance = (e) =>
    setEmpresa({ ...empresa, alcance: e.target.value });

  const onChangeEnvioNacional = (e) =>
    setEmpresa({ ...empresa, envNacional: e.target.value });

  const onChangeEnvioInternacional = (e) =>
    setEmpresa({ ...empresa, envInternacional: e.target.value });

  const onChangeSegundoNombre = (e) =>
    setColeccionista({ ...coleccionista, segundoNombre: e.target.value });

  const onChangePrimerApellido = (e) =>
    setColeccionista({ ...coleccionista, primerApellido: e.target.value });

  const onChangeSegundoApellido = (e) =>
    setColeccionista({ ...coleccionista, segundoApellido: e.target.value });

  const onChangeDNI = (e) =>
    setColeccionista({ ...coleccionista, dni: e.target.value });

  const onChangeFechaNacimiento = (e) =>
    setColeccionista({ ...coleccionista, fechaNacimiento: e.target.value });

  const onChangeCodeTlf = (e) =>
    setColeccionista({ ...coleccionista, codeTlf: e.target.value });

  const onChangeTelefono = (e) =>
    setColeccionista({ ...coleccionista, telefono: e.target.value });

  const onChangeResidencia = (e) =>
    setColeccionista({ ...coleccionista, residencia: e.target.value });

  const renderEmpresaFormInputs = () => {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre"
          value={empresa.nombre}
          onChange={onChangeName}
          required
        />
        <div className="d-flex justify-content-center">
          <input
            className="Authenticate__container-input form-control"
            type="text"
            placeholder="Proposito"
            value={empresa.proposito}
            onChange={onChangeProposito}
            required
          />
          <input
            className="Authenticate__container-input form-control"
            type="text"
            placeholder="Fundación"
            value={empresa.fundacion}
            onChange={onChangeFundacion}
            required
          />
        </div>
        <input
          className="form-control"
          type="text"
          placeholder="Página web"
          value={empresa.pagWeb}
          onChange={onChangePagWeb}
          required
        />
        <input
          className="form-control"
          type="text"
          placeholder="Dirección"
          value={empresa.direccion}
          onChange={onChangeDireccion}
          required
        />
        <select
          name="alcance"
          value={empresa.alcance}
          onChange={onChangeAlcance}
          required
        >
          <option value="">Alcance</option>
          <option value="nacional">Nacional</option>
          <option value="internacional">Internacional</option>
        </select>
        <div className="d-flex justify-content-center">
          <input
            className="Authenticate__container-input form-control"
            type="number"
            placeholder="Envio Nacional"
            value={empresa.envNacional}
            onChange={onChangeEnvioNacional}
            required
          />
          {empresa.alcance === "internacional" ? (
            <input
              className="Authenticate__container-input form-control"
              type="number"
              placeholder="Envio Internacional"
              value={empresa.envInternacional}
              onChange={onChangeEnvioInternacional}
              required
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  const renderColeccionistaFormInputs = () => {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <input
            className="Authenticate__container-input form-control"
            type="text"
            placeholder="Primer Nombre"
            value={coleccionista.nombre}
            onChange={onChangeName}
            required
          />
          <input
            className="Authenticate__container-input form-control"
            type="text"
            placeholder="Segundo Nombre"
            value={coleccionista.segundoNombre}
            onChange={onChangeSegundoNombre}
          />
        </div>
        <div className="d-flex justify-content-center">
          <input
            className="Authenticate__container-input form-control"
            type="text"
            placeholder="Primer Apellido"
            value={coleccionista.primerApellido}
            onChange={onChangePrimerApellido}
            required
          />
          <input
            className="Authenticate__container-input form-control"
            type="text"
            placeholder="Segundo Apellido"
            value={coleccionista.segundoApellido}
            onChange={onChangeSegundoApellido}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <input
            className="Authenticate__container-input form-control"
            type="number"
            placeholder="DNI"
            value={coleccionista.dni}
            onChange={onChangeDNI}
            required
          />
          <input
            className="form-control"
            type="date"
            placeholder="Fecha de Nacimiento"
            value={coleccionista.fechaNacimiento}
            onChange={onChangeFechaNacimiento}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <input
            className="Authenticate__container-input form-control"
            type="number"
            max="999"
            pattern="[0-9]{3}"
            placeholder="Cod de área"
            value={coleccionista.codeTlf}
            onChange={onChangeCodeTlf}
            required
          />
          <input
            className="form-control"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Número de teléfono"
            value={coleccionista.telefono}
            onChange={onChangeTelefono}
            required
          />
        </div>
        <select
          className="form-control"
          value={coleccionista.residencia}
          onChange={onChangeResidencia}
          required
        >
          <option value="">Ciudad de Residencia</option>
          <option value="caracas">Caracas</option>
          <option value="valencia">Valencia</option>
          <option value="maracay">Maracay</option>
          <option value="Maracaibo">Maracaibo</option>
        </select>
      </div>
    );
  };

  return (
    <Card>
      <h2>Registro {type ? "Coleccionista" : "Empresa"}</h2>
      <form
        className="d-flex flex-column align-items-center"
        action=""
        onSubmit={handleRegister}
      >
        <button
          type="reset"
          className="btn btn-light"
          onClick={handleChangeType}
        >
          Registro {type ? "Empresa" : "Coleccionista"}
        </button>
        <div className="my-2"></div>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Correo electrónico"
            value={type ? coleccionista.email : empresa.email}
            onChange={onChangeEmail}
            required
          />
          {type ? renderColeccionistaFormInputs() : renderEmpresaFormInputs()}
        </div>
        <button className="btn btn-primary mb-4" click={handleRegister}>
          Registrarme
        </button>
      </form>
      <span>
        <b>
          ¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a>
        </b>
      </span>
    </Card>
  );
};

export default Register;
