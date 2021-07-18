import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import FormCrearMoneda from "../components/FormCrearMoneda";
import FormCrearPintura from "../components/FormCrearPintura";
import imgPlaceholder from "../images/placeholder-image.png";
import apiService from "../services/api-service";

const CrearObjeto = () => {
  const { type, id } = useParams();
  const [img, setImg] = useState({});

  useEffect(() => {
    if (!id) return;
    let res;
    if (type === "moneda") {
      res = img;
    } else {
      res = img;
    }
    setImg(res);
  }, [id, type, img]);

  const onSubmit = (form) => {
    console.log(form);
    let form_data = new FormData();
    for (const key in form) {
      form_data.append(key, form[key]);
    }
    if (img.file) {
      form_data.append("imagen", img.file);
    }
    apiService.crearMoneda(form_data);
  };

  const onChangeImg = (e) => {
    setImg({
      url: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    });
  };

  return (
    <main className="container d-flex justify-content-center flex-wrap mt-2">
      <section>
        <h2>Crear {type}</h2>
        <Card>
          <img src={img.url ?? imgPlaceholder} alt="" className="img-fluid" />
          <div className="form-group">
            <input
              onChange={onChangeImg}
              type="file"
              accept=".png,.jpg,.jpeg,.gif"
              id="imgInput"
              className="form-control"
            />
          </div>
        </Card>
      </section>
      <section>
        {type === "moneda" ? (
          <FormCrearMoneda onSubmit={onSubmit} />
        ) : (
          <FormCrearPintura />
        )}
      </section>
    </main>
  );
};

export default CrearObjeto;
