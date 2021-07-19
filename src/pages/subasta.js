import React from "react";
import BotonOfertar from "../components/BotonOfertar";
import Card from "../components/Card";
import ArticuloPreview from "../components/ArticuloPreview";

const subasta = () => {

 const articulo = [{
    nombre: "Moneda",
    imgURL:
      "https://www.elindependiente.com/wp-content/uploads/2021/01/Es_au_LXIAcQmFg-e1612029749136-1080x808.jpg",
    year: "1969",
    artista: "Alfredo el papi",
    divisa: "Dólar",
    lugar: "Petare la factoria",
  }]

  const coleccionista = [{
    nombre: "Pedro Navaja",
    oferta: "$200",
  },
  ];

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Subasta</h2>
            {articulo.map((articulo) => (
              <ArticuloPreview articulo={articulo} />
            ))}
        </div>
        <div class="col">
          <h3>Pujas</h3>  
          <Card>
            {coleccionista.map((coleccionista) => (
            <div class="container">
              <div class="row">
                <div class="col"><h4>Coleccionista</h4></div>
                <div class="col"><h4>Oferta</h4></div>
              </div>
              <div class="row justify-content-center">
                <div class="col"><p>{coleccionista.nombre}</p></div>
                <div class="col"><p>{coleccionista.oferta}</p></div>
              </div>
            </div>))}
          </Card>
          <h3>Ofertar</h3>
          <BotonOfertar/>
        </div>
      </div>
    </div>
    );
}

export default subasta;