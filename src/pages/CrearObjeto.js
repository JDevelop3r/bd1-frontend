import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

import Card from "../components/Card";
import FormCrearMoneda from "../components/FormCrearMoneda";
import FormCrearPintura from "../components/FormCrearPintura";
import imgPlaceholder from "../images/placeholder-image.png";
import apiService from "../services/api-service";

const CrearObjeto = () => {
  const { type, id } = useParams();
  const [img, setImg] = useState({});

  const alert = useAlert();
  const history = useHistory();

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

  const onSubmit = async (form) => {
    console.log(form);
    let form_data = new FormData();
    for (const key in form) {
      form_data.append(key, form[key]);
    }
    if (img.file) {
      form_data.append("imagen", img.file);
    }

    try {
      const res =
        type === "moneda"
          ? await apiService.crearMoneda(form_data)
          : await apiService.crearPintura(form_data);
      if (res.status === 200 || res.status === 201) history.push("/");
      alert.show("Objeto creado");
    } catch (error) {
      console.log(error);
      alert.show("Error al crear objeto", { type: "error" });
    }
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
          <FormCrearPintura onSubmit={onSubmit} />
        )}
      </section>
    </main>
  );
};

export default CrearObjeto;
