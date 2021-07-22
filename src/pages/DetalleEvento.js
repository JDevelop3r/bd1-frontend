import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "../components/Card";
import ArticuloPreview from "../components/ArticuloPreview";
import apiService from "../services/api-service";

const DetalleEvento = () => {
  const { id } = useParams();
  const history = useHistory();
  const [evento, setEvento] = useState({});
  const [articulos, setArticulos] = useState([]);
  const [inscrito, setInscrito] = useState(false);

  const loadData = async () => {
    try {
      const resEvento = await apiService.getEvento(id);
      setEvento(resEvento);
      setInscrito(resEvento.inscrito ?? false);
    } catch (error) {
      history.push("/404");
    }
    const listaObjeto = await apiService.getListaObjeto(id);
    setArticulos(listaObjeto);
  };

  useEffect(() => loadData(), []);

  const onClickInscribirme = async () => {
    if (inscrito === false) {
      try {
        const res = await apiService.inscribirEnEvento(id);
        if (res.status === 200 || res.status === 201) {
          alert.show("Te has inscrito en este evento");
          setInscrito(true);
        }
      } catch (error) {
        alert.show("Error al inscribirse en este evento");
      }
    }
    console.log(id);
  };

  return (
    <main className="container">
      <h2>Detalle Evento {id}</h2>

      <Card>
        <div className="row">
          <div className="col-9">
            <h4>{evento.fecha}</h4>
            <p>
              <b>Organizador(es):</b>{" "}
              {evento.planificadores?.map((planificador, index) => (
                <span className="mr-1" key={planificador.id}>
                  &nbsp;&nbsp;{planificador.nombre}.
                </span>
              ))}
            </p>
            <div className="row">
              <div className="col-3">
                <p>
                  <b>Tipo: </b>
                  {evento.tipo}
                </p>
              </div>
              <div className="col-3">
                <p>
                  <b>Tipo de Puja: </b>
                  {evento.tipoPuja}
                </p>
              </div>
              <div className="col-2">
                <p>
                  <b>Duración: </b>
                  {evento.duracionHoras}
                </p>
              </div>
              <div className="col-7">
                {evento.lugar ? (
                  <p>
                    <b>Lugar:</b> {evento.lugar}, {evento.pais.nombre}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p>
                  <b>Entrada:</b> ${evento.inscripcionCliente}
                </p>
              </div>
              {evento.inscripcionClienteNuevo ? (
                <div className="col-3">
                  <p>
                    <b>Entrada nuevo:</b> ${evento.inscripcionClienteNuevo}
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className="col-3">
                <p>
                  <b>Articulos: </b>
                  {articulos.length}
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <span className="badge bg-warning rounded-pill text-dark">
              {evento.status}
            </span>
            {evento.status === "Pendiente" && evento.inscrito ? (
              <button
                onClick={onClickInscribirme}
                className="btn btn-primary my-1"
              >
                INSCRIBIRME
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </Card>

      <h2>Lista de objetos</h2>
      <div className="d-flex flex-wrap">
        {articulos.map((articulo) => (
          <ArticuloPreview
            verSubasta={evento.status === "Progreso"}
            tipoPuja={evento.tipoPuja}
            planificador={evento.planificador}
            articulo={articulo}
          />
        ))}
      </div>
    </main>
  );
};

export default DetalleEvento;
