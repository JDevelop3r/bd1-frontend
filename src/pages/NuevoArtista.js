import React from "react";
import { useHistory } from "react-router-dom";

import Card from "../components/Card";
import FormCrearArtista from "../components/FormArtista";
import apiService from "../services/api-service";

const NuevoArtista = () => {
  const history = useHistory();

  const onSubmit = async (form) => {
    console.log(form);
    const res = await apiService.crearArtista(form);
    if (res.status === 200 || res.status === 201) history.push("/");
  };

  return (
    <main className="container d-flex justify-content-center flex-wrap mt-2">
      <section>
        <h2>Nuevo Artista</h2>
        <FormCrearArtista onSubmit={onSubmit} />
      </section>
    </main>
  );
};

export default NuevoArtista;
