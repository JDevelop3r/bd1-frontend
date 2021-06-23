import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import apiService from "../services/api-service";

import "./styles/NewProduct.css";

const NewProduct = () => {
  const [newProduct, setProduct] = useState({ gas: false, balcon: false });

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
    form_data.append("habitaciones", newProduct.habitaciones);
    form_data.append("banos", newProduct.banos);
    form_data.append("gas", newProduct.gas);
    form_data.append("balcon", newProduct.balcon);
    if (newProduct.imagenUrl) {
      form_data.append("imagen", newProduct.imagen, newProduct.imagen?.name);
    }
    console.log(form_data.values());
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
    if (e.target.id === "habitaciones")
      setProduct({ ...newProduct, habitaciones: e.target.value });

    if (e.target.id === "banos")
      setProduct({ ...newProduct, banos: e.target.value });

    if (e.target.id === "gas")
      setProduct({ ...newProduct, gas: !newProduct.gas });

    if (e.target.id === "balcon")
      setProduct({ ...newProduct, balcon: !newProduct.balcon });
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
              <label htmlFor="habitaciones">Habitaciones:</label>
              <input
                type="number"
                value={newProduct.habitaciones}
                onChange={onChange}
                min="1"
                className="form-control"
                id="habitaciones"
                placeholder="##"
                required
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="banos">Baños:</label>
              <input
                type="number"
                min="0"
                value={newProduct.banos}
                onChange={onChange}
                className="form-control"
                id="banos"
                placeholder="##"
                required
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="gas">Gas:</label>
              <input
                type="checkbox"
                value={newProduct.gas}
                checked={newProduct.gas}
                onChange={onChange}
                id="gas"
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="balcon">Balcon:</label>
              <input
                type="checkbox"
                value={newProduct.balcon}
                checked={newProduct.balcon}
                onChange={onChange}
                id="balcon"
              />
            </div>
            <div className="form-group row align-items-center mx-2 mb-4">
              <label htmlFor="image">Imagen:</label>
              <input
                type="file"
                accept="image/*"
                value={newProduct.imagenUrl}
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
