import React from "react";
import Card from "../components/Card";

const ArtistasList = (props) => {
  const artistas = props.artistas;
  return (
    <div className="container">
      <h3>Artistas</h3>
      <Card>
        <div className="list-overflow">
          <div className="row align-items-center text-center mx-3">
            <div className="col-4 ">
              <h5>Nombre</h5>
            </div>
            <div className="col-4">
              <h5>Apellido</h5>
            </div>
            <div className="col-4">
              <h5>
                Nombre
                <br />
                Artistico
              </h5>
            </div>
          </div>
          {artistas.map((artista) => (
            <div className="row text-center mx-2">
              <div className="col">
                <p>{artista.nombre}</p>
              </div>
              <div className="col">
                <p>{artista.apellido}</p>
              </div>
              <div className="col">
                {artista.nombreArtistico ? (
                  <p>{artista.nombreArtistico}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ArtistasList;
