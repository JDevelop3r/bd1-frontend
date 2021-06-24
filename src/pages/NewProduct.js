import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import apiService from "../services/api-service";

import "./styles/NewProduct.css";

const NewProduct = () => {
  const [newProduct, setProduct] = useState({});

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    if (location.pathname.includes("editar")) {
      const id = parseInt(location.pathname.split("/")[2]);
      getData(id);
    }
  }, [location]);

  const getData = async (itemId) => {
    const { id, ...res } = await apiService.getOneData(itemId);
    setProduct({ ...res });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("nombre", newProduct.nombre);
    form_data.append("apellido", newProduct.apellido);
    form_data.append("segundoApellido", newProduct.segundoApellido);

    if (newProduct.segundoNombre) {
      form_data.append("segundoNombre", newProduct.segundoNombre || "");
    }
    if (newProduct.imagenUrl) {
      form_data.append("imagen", newProduct.imagen, newProduct.imagen?.name);
    }
    if (!newProduct.hasOwnProperty("imagen")) {
      form_data.append("imagen", "");
    }

    console.log(newProduct);

    if (location.pathname.includes("editar")) {
      await apiService.updateData(
        parseInt(location.pathname.split("/")[2]),
        form_data
      );
    } else {
      form_data.append("dni", newProduct.dni);
      await apiService.createItem(form_data);
    }
    history.push("/");
  };

  const onChange = (e) => {
    if (e.target.id === "dni")
      setProduct({ ...newProduct, dni: e.target.value });

    if (e.target.id === "nombre")
      setProduct({ ...newProduct, nombre: e.target.value });

    if (e.target.id === "apellido")
      setProduct({ ...newProduct, apellido: e.target.value });

    if (e.target.id === "segundoApellido")
      setProduct({ ...newProduct, segundoApellido: e.target.value });

    if (e.target.id === "segundoNombre")
      setProduct({ ...newProduct, segundoNombre: e.target.value });
  };

  const setImage = (e) => {
    setProduct({
      ...newProduct,
      imagen: e.target.files[0],
      imagenUrl: URL.createObjectURL(e.target.files[0]),
    });
    console.log(typeof e.target.files[0], e.target.files[0]);
  };

  return (
    <div className="NewProduct">
      <div className="row">
        <h1>Nuevo Estudiante</h1>
        <Link className="btn btn-warning" to="/">
          Lista de Estudiantes
        </Link>
      </div>
      <div className="container my-3">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="dni">DNI:</label>
              <input
                type="number"
                value={newProduct.dni}
                onChange={onChange}
                readOnly={location.pathname.includes("editar")}
                min="1"
                className="form-control"
                id="dni"
                placeholder="##"
                required
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                value={newProduct.nombre}
                onChange={onChange}
                className="form-control"
                id="nombre"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="segundoNombre">Segundo Nombre:</label>
              <input
                type="text"
                value={newProduct.segundoNombre}
                className="form-control"
                onChange={onChange}
                placeholder="Segundo Nombre"
                id="segundoNombre"
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                value={newProduct.apellido}
                className="form-control"
                onChange={onChange}
                placeholder="Apellido"
                id="apellido"
                required
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="segundoAapellido">Segundo Apellido:</label>
              <input
                type="text"
                value={newProduct.segundoApellido || ""}
                className="form-control"
                onChange={onChange}
                placeholder="Segundo Apellido"
                id="segundoApellido"
                required
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="image">Imagen:</label>
              <input
                type="file"
                accept="image/*"
                onChange={setImage}
                className="form-control"
                id="image"
              />
            </div>
            {newProduct.imagenUrl ? (
              <img src={newProduct.imagenUrl} alt="Nuevo Estudiante" />
            ) : newProduct.imagen ? (
              <img
                src={`http://localhost:8000/${newProduct.imagen}`}
                alt="Nuevo Estudiante"
              />
            ) : (
              <div></div>
            )}
          </div>
          <button className="btn btn-success">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
