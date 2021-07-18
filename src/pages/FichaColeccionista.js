import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import ArticuloPreview from "../components/ArticuloPreview";

const FichaColeccionista = () => {
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

  const coleccionista = {
    nombre: "Pedro",
    segundoNombre: "Jesus",
    apellido: "Perez",
    segundoApellido: "Blanco",
    email: "pedro@perez.com",
    fechaNac: "17/04/1993",
    telefono: "58 (416) 123-3344",
    direccion: "Caracas, Venezuela",
    coleccion: articulos,
  };

  return (
    <main className="container">
      <h2 className="mt-2">{`${coleccionista.nombre} ${coleccionista.segundoNombre}
        ${coleccionista.apellido} ${coleccionista.segundoApellido}`}</h2>

      <Card>
        <div className="col-12">
          <p>
            <b>Email: </b> {coleccionista.email}
          </p>
          <p>
            <b>Fecha de Nacimiento: </b> {coleccionista.fechaNac}
          </p>
          <p>
            <b>Número de teléfono: </b> {coleccionista.telefono}
          </p>
          <p>
            <b>Dirección: </b> {coleccionista.direccion}
          </p>
        </div>
      </Card>

      <h2>Colección</h2>
      <div className="d-flex flex-wrap">
        {articulos.map((articulo) => (
          <ArticuloPreview articulo={articulo} />
        ))}
      </div>
    </main>
  );
};

export default FichaColeccionista;
