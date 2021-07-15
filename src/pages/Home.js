import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  // useEffect(fetchData, []);

  return <div className="Home"></div>;
};

export default Home;
