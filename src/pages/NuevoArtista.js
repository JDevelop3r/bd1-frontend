import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Card from "../components/Card";
import FormCrearArtista from "../components/FormArtista";
import apiService from "../services/api-service";
import ArtistasList from "./ArtistasList";

const NuevoArtista = () => {
  const history = useHistory();

  const [artistas, setArtistas] = useState([]);

  const loadData = async () => {
    const resArtistas = await apiService.getArtistas();
    setArtistas(resArtistas);
  };

  useEffect(() => loadData(), []);

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
      <section>
        <ArtistasList artistas={artistas} />
      </section>
    </main>
  );
};

export default NuevoArtista;
