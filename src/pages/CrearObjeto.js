import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import FormCrearMoneda from "../components/FormCrearMoneda";
import FormCrearPintura from "../components/FormCrearPintura";
import imgPlaceholder from "../images/placeholder-image.png";

const CrearObjeto = () => {
  const { type, id } = useParams();
  const [objeto, setObjeto] = useState({});

  useEffect(() => {
    if (!id) return;
    let res;
    if (type === "moneda") {
      res = objeto;
    } else {
      res = objeto;
    }
    setObjeto(res);
  }, [id, type, objeto]);

  return (
    <main className="container d-flex justify-content-center flex-wrap mt-2">
      <section>
        <h2>Crear {type}</h2>
        <Card>
          <img
            src={objeto.imgURL ?? imgPlaceholder}
            alt=""
            className="img-fluid"
          />
          <div className="form-group">
            <input type="file" id="imgInput" className="form-control" />
          </div>
        </Card>
      </section>
      <section>
        {type === "moneda" ? <FormCrearMoneda /> : <FormCrearPintura />}
      </section>
    </main>
  );
};

export default CrearObjeto;
