import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/product/Product";
import apiService from "../services/api-service";

import "./styles/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    apiService.getData().then((data) => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(fetchData, []);

  /* let products = [
    {
      id: 1,
      nombre: "Cubo Rubik",
      precio: 20,
      imagen:
        "https://www.puzzlesycubosde.com/wp-content/uploads/2019/03/2x2_-1024x1024.jpg",
      descripcion: "Cubo de Rubik 2x2",
    },
    {
      id: 2,
      nombre: "Maneki-neko",
      precio: 5,
      imagen:
        "https://blog.hellowine.cl/wp-content/uploads/2016/10/shutterstock_258535721_blog-1.jpg",
      descripcion: "Gato que mueve la mano",
    },
    {
      id: 3,
      nombre: "Pokebola",
      precio: 15,
      imagen:
        "https://www.zetatecnologia.com/wp-content/uploads/2016/07/Gu%C3%ADa-Pok%C3%A9mon-Go-Se-Puede-Recuperar-una-Pokebola.jpg",
      descripcion: "Pokebola real, atrapa a tus pokemons",
    },
    {
      id: 4,
      nombre: "Agumon",
      precio: 18,
      imagen:
        "https://images-na.ssl-images-amazon.com/images/I/51An1bmvRNL._AC_SL1000_.jpg",
      descripcion: "Peluche de Agumon",
    },
    {
      id: 5,
      nombre: "Barquito de papel",
      precio: 3,
      imagen:
        "https://lh3.googleusercontent.com/proxy/qyW2adasOQnvseU3pJ3peCW-UG9wgr7J9HbOFNmrS-cFtXpbvdNLvQo6U4BO330DoZkwFzselCeDGx8yxfwHzA3NsFQRYdXLNiUFdfRsUpFMrk0ppMP0Uuz3XxGlvnQT1QWRlDKUICyMk9Zo",
      descripcion: "Barquito de papel",
    },
  ]; */

  const onDelete = (id) => {
    apiService.deleteItem(id);

    const index = products.indexOf(products.filter((el) => el.id === id)[0]);
    products.splice(index, 1);

    setProducts([...products]);
  };

  return (
    <div className="Home">
      <div className="row">
        <h1>Productos</h1>
        <Link className="btn btn-warning" to="/agregar">
          Agregar Producto
        </Link>
      </div>
      <div className="row justify-content-center">
        {products.map((el) => (
          <div key={el.id} className="m-2" style={{ width: "auto" }}>
            <Product item={el} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
