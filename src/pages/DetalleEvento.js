import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import ArticuloPreview from "../components/ArticuloPreview";

const DetalleEvento = () => {
  const { id } = useParams();

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

  const evento = {
    id: "0",
    imgURL:
      "https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg",
    fecha: "27/07/2021",
    organizadores: "Organizador 1",
    tipo: "Presencial",
    duracion: "90",
    entrada: "50",
    entradaNuevo: "75",
    lugar: "Calle 1 Ciudad 1 Pais 1",
    articulos,
  };

  return (
    <main className="container">
      <h2>Detalle Evento {id}</h2>

      <Card>
        <div className="col-12">
          <h4>{evento.fecha}</h4>
          <p>
            <b>Organizador(es): </b> {evento.organizadores}
          </p>
          <div className="row">
            <div className="col-3">
              <p>
                <b>Tipo: </b>
                {evento.tipo}
              </p>
            </div>
            <div className="col-2">
              <p>
                <b>Duración: </b>
                {evento.duracion}
              </p>
            </div>
            <div className="col-7">
              <p>
                <b>Lugar: </b>
                {evento.lugar}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <p>
                <b>Entrada: </b>${evento.entrada}
              </p>
            </div>
            <div className="col-3">
              <p>
                <b>Entrada nuevo: </b>${evento.entradaNuevo}
              </p>
            </div>
            <div className="col-3">
              <p>
                <b>Articulos: </b>
                {articulos.length}
              </p>
            </div>
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
