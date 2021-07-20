import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import apiService from "../services/api-service";

const CrearEvento = () => {
  const [paises, setPaises] = useState([]);
  const [evento, setEvento] = useState({});
  const [organizaciones, setOrganizaciones] = useState({});
  const [planificadores, setPlanificadores] = useState([]);

  const loadData = async () => {
    const resPaises = await apiService.getPaises();
    setPaises(resPaises);

    const resOrganizaciones = await apiService.getOrganizaciones();
    setOrganizaciones(resOrganizaciones);
  };

  useEffect(() => loadData(), []);

  const onSubmit = (e) => {
    e.preventDefault();
    evento.planificadores = planificadores.filter(
      (el) => typeof el === "number"
    );
    evento.fecha = new Date(evento.fechaString)
      .toLocaleDateString()
      .replaceAll("/", "-");
    const { fechaString, ...eventoClean } = evento;
    console.log(eventoClean);

    apiService.crearEvento(eventoClean);
    console.log(evento);
  };

  const onClickAgregar = () => {
    if (planificadores.length >= organizaciones.length) return;
    setPlanificadores([...planificadores, {}]);
    console.log(planificadores);
  };

  const onChangeInputs = (e) => {
    const value = e.target.value;
    switch (e.target.id) {
      case "inscripcionCliente":
        setEvento({ ...evento, inscripcionCliente: value });
        break;
      case "inscripcionClienteNuevo":
        setEvento({ ...evento, inscripcionClienteNuevo: value });
        break;
      case "fecha":
        setEvento({ ...evento, fechaString: value });
        break;
      case "tipo":
        setEvento({ ...evento, tipo: value });
        break;
      case "tipoPuja":
        setEvento({ ...evento, tipoPuja: value });
        break;
      case "duracionHoras":
        setEvento({ ...evento, duracionHoras: value });
        break;
      case "lugar":
        setEvento({ ...evento, lugar: value });
        break;
      case "pais":
        setEvento({ ...evento, id_pais: value });
        break;
      default:
        break;
    }
  };

  const onChangePlanificador = (e) => {
    const value = e.target.value;
    planificadores[e.target.id] = parseInt(value);
  };

  return (
    <main className="container">
      <h2>Crear Evento</h2>
      <Card>
        <form className="w-100" onSubmit={onSubmit}>
          <div className="form-group">
            <div className="row">
              <select
                required
                onChange={onChangeInputs}
                value={evento.tipo}
                className="form-control col"
                id="tipo"
              >
                <option value="">Tipo</option>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
              </select>
              <select
                required
                onChange={onChangeInputs}
                value={evento.tipoPuja}
                className="form-control col"
                id="tipoPuja"
              >
                <option value="">Tipo de Puja</option>
                {evento.tipo === "presencial" ? (
                  <option value="sobre cerrado">Sobre Cerrado</option>
                ) : (
                  ""
                )}
                <option value="ascendente">Ascendente</option>
              </select>
            </div>
            <div className="row">
              <input
                onChange={onChangeInputs}
                value={evento.inscripcionCliente}
                required
                className="form-control col"
                id="inscripcionCliente"
                min="1"
                type="number"
                placeholder="Precio Inscripción"
              />

              <input
                onChange={onChangeInputs}
                value={evento.inscripcionClienteNuevo}
                className="form-control col"
                id="inscripcionClienteNuevo"
                min="1"
                type="number"
                placeholder="Precio Nuevo"
              />
            </div>
            <div className="row">
              <input
                onChange={onChangeInputs}
                value={evento.fechaString}
                required
                className="form-control col"
                id="fecha"
                type="date"
              />

              <input
                required
                onChange={onChangeInputs}
                value={evento.duracionHoras}
                type="number"
                className="form-control col"
                min="4"
                max="6"
                id="duracionHoras"
                placeholder="Duración (horas)"
              />
            </div>
            {evento.tipo === "presencial" ? (
              <div className="row">
                <select
                  required
                  onChange={onChangeInputs}
                  value={evento.pais}
                  className="form-control col"
                  id="pais"
                >
                  <option value="">País</option>
                  {paises.map((pais) => (
                    <option key={pais.id} value={pais.id}>
                      {pais.nombre}
                    </option>
                  ))}
                </select>
                <input
                  required
                  onChange={onChangeInputs}
                  value={evento.lugar}
                  className="form-control col"
                  id="lugar"
                  min="1"
                  type="text"
                  placeholder="Lugar"
                />
              </div>
            ) : (
              ""
            )}
            {evento.tipo === "virtual" ? (
              <div>
                <div className="d-flex">
                  {planificadores.map((planificador, index) => {
                    console.log(planificador);
                    return (
                      <select
                        key={index}
                        id={index}
                        className="form-control"
                        value={planificador[index]}
                        onChange={onChangePlanificador}
                      >
                        <option value="">Organizacion {index + 1}</option>
                        {organizaciones.map((organizacion) => (
                          <option key={organizacion.id} value={organizacion.id}>
                            {organizacion.nombre}
                          </option>
                        ))}
                      </select>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClickAgregar}
                >
                  <b>Agregar organizacion planificadora</b>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="container mt-3">
            <button className="btn btn-primary" type="submit">
              Crear
            </button>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default CrearEvento;
