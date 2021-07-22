import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import apiService from "../services/api-service";

const Fichaobj = () => {
  const { id, type } = useParams();

  const [obj, setObj] = useState({});

  const loadData = async () => {
    let res;
    if (type === "moneda") {
      // peticion de la moneda por el id
      res = await apiService.getCatalogoMoneda(id);
      const { moneda, organizacion, coleccionista } = res;
      const { divisa, ...monedaClean } = moneda;
      const data = {
        ...monedaClean,
        dueno: organizacion
          ? organizacion.nombre
          : `${coleccionista.nombre} ${coleccionista.apellido}`,
      };
      console.log(data);
      setObj(data);
    } else {
      // peticion de pintura por id
      res = await apiService.getCatalogoPintura(id);
      const { organizacion, coleccionista, ...resto } = res;
      const data = {
        ...resto,
        dueno: organizacion
          ? organizacion.nombre
          : `${coleccionista.nombre} ${coleccionista.apellido}`,
      };
      console.log(data);
      setObj(data);
    }
  };

  useEffect(() => loadData(), [type, id]);

  /*  const obj = {
    id,
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    nombre: "obj 4",
    nur: "123456",
    canto: "canto",
    anverso: "anverso",
    denominacion: "centavo",
    peso: "100gr",
    divisa: "dólar",
    year: 1897,
    reverso: "reverso",
    forma: "redondo",
    acunacion: 1896,
    metal: "cobre",
    motivo: "Conmemoracion",
    dueno: "Pedro Perez",
    diametro: "3cm",
    artista: "Artista",
  }; */

  return (
    <main className="container d-flex flex-wrap">
      <div className="mx-4 mt-2">
        <h2>Ficha obj</h2>
        <Card>
          <img
            className="img-fluid"
            src={`http://localhost:8000/` + obj.imagen}
            alt=""
          />
        </Card>
      </div>

      <div className="col mx-4 mt-2">
        <h3>
          {obj.nombre ?? obj.titulo} {obj.mintage}
        </h3>

        <Card>
          <div className="col-12">
            <div className="row">
              {obj.nur ? (
                <div className="col-4">
                  <p>
                    <b>Nur: </b> {obj.nur}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.canto ? (
                <div className="col-4">
                  <p>
                    <b>Canto: </b> {obj.canto}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.anverso ? (
                <div className="col-4">
                  <p>
                    <b>Anverso: </b> {obj.anverso}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {obj.artista ? (
                <div className="col-4">
                  <p>
                    <b>Artista: </b> {obj.artista}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.denominacion ? (
                <div className="col-4">
                  <p>
                    <b>Denominación: </b> {obj.denominacion}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.peso ? (
                <div className="col-4">
                  <p>
                    <b>Peso: </b> {obj.peso}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {obj.ano ? (
                <div className="col-4">
                  <p>
                    <b>Año: </b> {obj.ano}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.divisa ? (
                <div className="col-4">
                  <p>
                    <b>Divisa: </b> {obj.divisa}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.reverso ? (
                <div className="col-4">
                  <p>
                    <b>Reverso: </b> {obj.reverso}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {obj.estilo ? (
                <div className="col-4">
                  <p>
                    <b>Estilo: </b> {obj.estilo}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.forma ? (
                <div className="col-4">
                  <p>
                    <b>Forma: </b> {obj.forma}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.acunacion ? (
                <div className="col-4">
                  <p>
                    <b>Anuñación: </b> {obj.acunacion}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {obj.dimencionescm ? (
                <div className="col-4">
                  <p>
                    <b>Dimensiones: </b> {obj.dimencionescm}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.metal ? (
                <div className="col-4">
                  <p>
                    <b>Metal: </b> {obj.metal}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.motivo ? (
                <div className="col-4">
                  <p>
                    <b>motivo: </b> {obj.motivo}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {obj.dueno ? (
                <div className="col-4">
                  <p>
                    <b>Dueño: </b> {obj.dueno}
                  </p>
                </div>
              ) : (
                ""
              )}
              {obj.diametro ? (
                <div className="col-4">
                  <p>
                    <b>Diámetro: </b> {obj.diametro}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Fichaobj;
