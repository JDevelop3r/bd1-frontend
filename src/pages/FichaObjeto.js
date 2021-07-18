import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const FichaObjeto = () => {
  const { id, type } = useParams();

  const [obj, setObj] = useState({});

  useEffect(() => {
    let res;
    if (type === "moneda") {
      // peticion de la moneda por el id
      res = obj;
    } else {
      // peticion de pintura por id
      res = obj;
    }
    setObj(res);
  }, [type, id]);

  const objeto = {
    id,
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    nombre: "objeto 4",
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
    owner: "Pedro Perez",
    diametro: "3cm",
    artista: "Artista",
  };

  return (
    <main className="container d-flex flex-wrap">
      <div className="mx-4 mt-2">
        <h2>Ficha Objeto</h2>
        <Card>
          <img className="img-fluid" src={objeto.imgURL} alt="" />
        </Card>
      </div>

      <div className="col mx-4 mt-2">
        <h3>
          {objeto.nombre} {objeto.mintage}
        </h3>

        <Card>
          <div className="col-12">
            <div className="row">
              {objeto.nur ? (
                <div className="col-4">
                  <p>
                    <b>Nur: </b> {objeto.nur}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.canto ? (
                <div className="col-4">
                  <p>
                    <b>Canto: </b> {objeto.canto}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.anverso ? (
                <div className="col-4">
                  <p>
                    <b>Anverso: </b> {objeto.anverso}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {objeto.artista ? (
                <div className="col-4">
                  <p>
                    <b>Artista: </b> {objeto.artista}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.denominacion ? (
                <div className="col-4">
                  <p>
                    <b>Denominación: </b> {objeto.denominacion}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.peso ? (
                <div className="col-4">
                  <p>
                    <b>Peso: </b> {objeto.peso}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {objeto.year ? (
                <div className="col-4">
                  <p>
                    <b>Año: </b> {objeto.year}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.divisa ? (
                <div className="col-4">
                  <p>
                    <b>Divisa: </b> {objeto.divisa}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.reverso ? (
                <div className="col-4">
                  <p>
                    <b>Reverso: </b> {objeto.reverso}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {objeto.tecnica ? (
                <div className="col-4">
                  <p>
                    <b>Tecnica empleada: </b> {objeto.tecnica}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.forma ? (
                <div className="col-4">
                  <p>
                    <b>Forma: </b> {objeto.forma}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.acunacion ? (
                <div className="col-4">
                  <p>
                    <b>Anuñación: </b> {objeto.acunacion}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {objeto.medidas ? (
                <div className="col-4">
                  <p>
                    <b>Medidas: </b> {objeto.medidas}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.metal ? (
                <div className="col-4">
                  <p>
                    <b>Metal: </b> {objeto.metal}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.motivo ? (
                <div className="col-4">
                  <p>
                    <b>motivo: </b> {objeto.motivo}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              {objeto.owner ? (
                <div className="col-4">
                  <p>
                    <b>Dueño: </b> {objeto.owner}
                  </p>
                </div>
              ) : (
                ""
              )}
              {objeto.diametro ? (
                <div className="col-4">
                  <p>
                    <b>Diámetro: </b> {objeto.diametro}
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

export default FichaObjeto;
