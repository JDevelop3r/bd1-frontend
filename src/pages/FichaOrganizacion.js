import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ArticuloPreview from "../components/ArticuloPreview";
import Card from "../components/Card";
import apiService from "../services/api-service";

const FichaOrganizacion = () => {
  const { id } = useParams();
  const history = useHistory();
  const [organizacion, setOrganizacion] = useState({});
  const [catalogo, setCatalogo] = useState([]);

  const loadData = async () => {
    try {
      const res = await apiService.getOrganizacion(id);
      setOrganizacion(res);
    } catch (error) {
      history.push("/404");
    }
    const resCatalogo = await apiService.getCatalogoOrganizacion(id);
    console.log([...resCatalogo.pinturas, ...resCatalogo.monedas]);
    setCatalogo([...resCatalogo.pinturas, ...resCatalogo.monedas]);
  };

  useEffect(() => loadData(), []);

  return (
    <main className="container d-flex justify-content-center">
      <div className="col mx-4 mt-2">
        <h3>{organizacion.nombre}</h3>

        <Card>
          <div className="row">
            <span className="mx-2 mb-2">
              <b>Proposito: </b> {organizacion.proposito}
            </span>
            <p>
              <span className="mx-2">
                <b>Tipo: </b> {organizacion.tipo}
              </span>
              <span className="mx-2">
                <b>Fundación: </b> {organizacion.fundacion}
              </span>
              <span className="mx-2">
                <b>Página web: </b> {organizacion.paginaWeb}
              </span>
              <span className="mx-2">
                <b>Alcance: </b> {organizacion.alcance}
              </span>
            </p>
            <p>
              {organizacion.pais ? (
                <span className="mx-2">
                  <b>País: </b> {organizacion.pais.nombre}
                </span>
              ) : (
                ""
              )}
              <span className="mx-2">
                <b>Teléfono: </b> {organizacion.telefonoPrincipal}
              </span>
              <span className="mx-2">
                <b>Email: </b> {organizacion.emailCorporativo}
              </span>
            </p>
          </div>
        </Card>
        <div className="d-flex flex-wrap">
          {catalogo.map((articulo) => (
            <ArticuloPreview articulo={articulo} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FichaOrganizacion;
