import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import apiService from "../services/api-service";

import "./styles/NewProduct.css";

const NewProduct = () => {
  const [newProduct, setProduct] = useState({});

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    console.log(location);
    if (location.pathname.includes("editar")) {
      const id = parseInt(location.pathname.split("/")[2]);
      getData(id);
    }
  }, [location]);

  const getData = async (id) => {
    const res = await apiService.getOneData(id);
    setProduct({ ...res });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("nombre", newProduct.nombre);
    form_data.append("descripcion", newProduct.descripcion);
    form_data.append("precio", newProduct.precio);
    if (newProduct.imagenUrl)
      form_data.append("imagen", newProduct.imagen, newProduct.imagen?.name);
    if (!newProduct.imagen) form_data.append("imagen", null);

    if (location.pathname.includes("editar")) {
      await apiService.updateData(
        parseInt(location.pathname.split("/")[2]),
        form_data
      );
    } else {
      await apiService.createItem(form_data);
    }
    history.push("/");
  };

  const onChange = (e) => {
    if (e.target.id === "name")
      setProduct({ ...newProduct, nombre: e.target.value });

    if (e.target.id === "description")
      setProduct({ ...newProduct, descripcion: e.target.value });

    if (e.target.id === "price")
      setProduct({ ...newProduct, precio: e.target.value });
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
        <h1>Nuevo producto</h1>
        <Link className="btn btn-warning" to="/">
          Lista de Productos
        </Link>
      </div>
      <div className="container my-3">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                value={newProduct.nombre}
                onChange={onChange}
                className="form-control"
                id="name"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="description">Descripción:</label>
              <input
                type="text"
                value={newProduct.descripcion}
                onChange={onChange}
                className="form-control"
                id="description"
                placeholder="Descripción"
                required
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="price">Precio:</label>
              <input
                type="number"
                value={newProduct.precio}
                onChange={onChange}
                className="form-control"
                id="price"
                min="0"
                placeholder="$"
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
              <img src={newProduct.imagenUrl} alt="Nuevo producto" />
            ) : newProduct.imagen ? (
              <img
                src={`http://localhost:8000/${newProduct.imagen}`}
                alt="Nuevo producto"
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
