import React from "react";
import Card from "../components/Card";


const artistas = () => {
   
  const artista = [
    {
    nombre: "Satoshi",
    apellido: "Uraraka",
    pseudonimo: "SIU",
  },
  {
    nombre: "Guillermo",
    apellido: "Palkia",
    pseudonimo: "Palpatin",
  },
  {
    nombre: "Karen",
    apellido: "Ruiz",
    pseudonimo: "Klar",
  },
  ];

  return (
    <div class="container">
      <h1>Artistas</h1>
      <Card>
        <div class="container">
            <div class="row text-center p-3">
              <div class="col-4"><h3>Nombre</h3></div>
              <div class="col-4"><h3>Apellido</h3></div>
              <div class="col-4"><h3>Pseudonimo</h3></div>
            </div>
              {artista.map((artista) => (
                <div class="row text-center p-3">
                  <div class="col"><h5>{artista.nombre}</h5></div>
                  <div class="col"><h5>{artista.apellido}</h5></div>
                 <div class="col"><h5>{artista.pseudonimo}</h5></div>
                </div>
              ))}
        </div>
      </Card>
    </div>
  );
}


export default artistas;