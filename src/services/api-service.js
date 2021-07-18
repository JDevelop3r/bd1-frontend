import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const getData = async () => {
  const res = await axios.get(`${BASE_URL}products/products`);
  return res.data;
};

const getOneData = async (id) => {
  const res = await axios.get(`${BASE_URL}products/${id}/`);
  console.log(res.data);
  return res.data;
};

const updateData = async (id, form_data) => {
  return await axios.patch(`${BASE_URL}products/${id}/`, form_data, {
    headers: { "content-type": "multipart/form-data" },
  });
};

const deleteItem = async (itemId) => {
  return await axios.delete(`${BASE_URL}products/${itemId}/`);
};

const createItem = async (form_data) => {
  const res = await axios.post(`${BASE_URL}products/`, form_data, {
    headers: { "content-type": "multipart/form-data" },
  });
  console.log(res);
};

const getDivisas = async () => {
  const res = await axios.get(`${BASE_URL}divisa/`);
  console.log(res.data);
  return res.data;
};

const getOrganizaciones = async () => {
  const res = await axios.get(`${BASE_URL}organizacion/`);
  console.log(res.data);
  return res.data;
};

const getPaises = async () => {
  const res = await axios.get(`${BASE_URL}pais/`);
  console.log(res.data);
  return res.data;
};

const crearMoneda = async (form_data) => {
  const res = await axios.post(`${BASE_URL}moneda`, form_data, {
    headers: { "content-type": "multipart/form-data" },
  });
  console.log(res);
};

const apiService = {
  getData,
  getOrganizaciones,
  getPaises,
  getDivisas,
  crearMoneda,
  deleteItem,
  createItem,
  getOneData,
  updateData,
};

export default apiService;
