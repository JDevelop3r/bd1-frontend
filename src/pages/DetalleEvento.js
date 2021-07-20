import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "../components/Card";
import ArticuloPreview from "../components/ArticuloPreview";
import apiService from "../services/api-service";

const DetalleEvento = () => {
  const { id } = useParams();
  const history = useHistory();
  const [evento, setEvento] = useState({});

  const loadData = async () => {
    try {
      const resEvento = await apiService.getEvento(id);
      setEvento(resEvento);
    } catch (error) {
      history.push("/404");
    }
  };

  useEffect(() => loadData(), []);

  const articulos = [
    {
      nombre: "Moneda",
      imgURL:
        "https://www.elindependiente.com/wp-content/uploads/2021/01/Es_au_LXIAcQmFg-e1612029749136-1080x808.jpg",
      year: "1873",
      artista: "Artista",
      divisa: "Dólar",
      lugar: "EEUU",
    },
    {
      nombre: "Moneda",
      imgURL:
        "https://www.elindependiente.com/wp-content/uploads/2021/01/Es_au_LXIAcQmFg-e1612029749136-1080x808.jpg",
      year: "1873",
      artista: "Artista",
      divisa: "Dólar",
      lugar: "EEUU",
    },
    {
      nombre: "Moneda",
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      year: "1873",
      artista: "Artista",
      periodo: "Renacimiento",
      dimensiones: "180x180",
    },
    {
      nombre: "Moneda",
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      year: "1873",
      artista: "Artista",
      periodo: "Renacimiento",
      dimensiones: "180x180",
    },
  ];

  const onClickInscribirme = () => {
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
            {evento.status === "Pendiente" ? (
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

      <h2>Artículos</h2>
      <div className="d-flex flex-wrap">
        {articulos.map((articulo) => (
          <ArticuloPreview articulo={articulo} />
        ))}
      </div>
    </main>
  );
};

export default DetalleEvento;
