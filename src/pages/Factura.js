import React from "react";
import Card from "../components/Card";
import ArticuloPreview from "../components/ArticuloPreview";


const articulos = [
  {
    nombre: "Moneda",
    imgURL:
      "https://www.elindependiente.com/wp-content/uploads/2021/01/Es_au_LXIAcQmFg-e1612029749136-1080x808.jpg",
    year: "1873",
    artista: "Artista",
    divisa: "Dólar",
    lugar: "EEUU",
    precio: "100",
  },
  {
    nombre: "Moneda",
    imgURL:
      "https://www.elindependiente.com/wp-content/uploads/2021/01/Es_au_LXIAcQmFg-e1612029749136-1080x808.jpg",
    year: "1873",
    artista: "Artista",
    divisa: "Dólar",
    lugar: "EEUU",
    precio: "702",
  },
  {
    nombre: "Moneda",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    year: "1873",
    artista: "Artista",
    periodo: "Renacimiento",
    dimensiones: "180x180",
    precio: "500",
  },
  {
    nombre: "Moneda",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    year: "1873",
    artista: "Artista",
    periodo: "Renacimiento",
    dimensiones: "180x180",
    precio: "432",
  },
];

const Factura = () => {

  return(
    <div className="container">
      <h2>Factura</h2>
      <Card>
        <div className="container">
          <div className="row text-center">
            <div className="col-6">
              <h5>NumeroFactura</h5>
            </div>
            <div className="col-6">
              <h5>Fecha de Emision</h5>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <h5>Aqui el id</h5>
            </div>
            <div className="col">
              <h5>Aqui el mm/dd/yy</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4> Aqui el total</h4>
            </div>
          </div>
        </div>
      </Card>

      <h3>Artículos Facturados</h3>
      <div className="d-flex flex-wrap">
        {articulos.map((articulo) => (
          <ArticuloPreview articulo={articulo} />
        ))}
      </div>
    </div>
  )

}

export default Factura;