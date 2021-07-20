import axios from "axios";

const BASE_URL = "http://localhost:8000/";

/* const getData = async () => {
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
}; */

const login = async (user) => {
  const res = await axios.post(`${BASE_URL}login/`, user, {
    headers: { "content-type": "application/json" },
  });
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem("token", res.data["TOKEN"]);
  }
  console.log(res);
  return res;
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

const getOrganizacion = async (id) => {
  const res = await axios.get(`${BASE_URL}organizacion/${id}`);
  console.log(res.data);
  return res.data;
};

const getColeccionistas = async () => {
  const res = await axios.get(`${BASE_URL}coleccionista/`);
  console.log(res.data);
  return res.data;
};

const getEventos = async () => {
  const res = await axios.get(`${BASE_URL}evento/`);
  console.log(res.data);
  return res.data;
};

const getEvento = async (id) => {
  const res = await axios.get(`${BASE_URL}evento/${id}`);
  console.log(res.data);
  return res.data;
};

const getColeccionista = async (id) => {
  const res = await axios.get(`${BASE_URL}coleccionista/${id}`);
  console.log(res.data);
  return res.data;
};

const getPaises = async () => {
  const res = await axios.get(`${BASE_URL}pais/`);
  console.log(res.data);
  return res.data;
};

const crearMoneda = async (form_data) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${BASE_URL}moneda`, form_data, {
    headers: { "content-type": "multipart/form-data", TOKEN: token },
  });
  console.log(res);
  return res;
};

const getMonedas = async () => {
  const res = await axios.get(`${BASE_URL}catalogo/moneda/`);
  console.log(res.data);
  return res.data;
};

const getMonedaNur = async (nur) => {
  const res = await axios.get(`${BASE_URL}catalogo/moneda/obj/${nur}`);
  console.log(res.data);
  return res.data;
};

const getMonedaId = async (id) => {
  const res = await axios.get(`${BASE_URL}catalogo/moneda/obj/${id}`);
  console.log(res.data);
  return res.data;
};

const getPinturas = async () => {
  const res = await axios.get(`${BASE_URL}catalogo/pintura/`);
  console.log(res.data);
  return res.data;
};

const getPinturaNur = async (nur) => {
  const res = await axios.get(`${BASE_URL}catalogo/pintura/obj/${nur}`);
  console.log(res.data);
  return res.data;
};

const getPinturaId = async (id) => {
  const res = await axios.get(`${BASE_URL}catalogo/pintura/obj/${id}`);
  console.log(res.data);
  return res.data;
};

const crearPintura = async (form_data) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${BASE_URL}catalogo/pintura`, form_data, {
    headers: { "content-type": "multipart/form-data", TOKEN: token },
  });
  console.log(res);
  return res;
};

const getArtistas = async () => {
  const res = await axios.get(`${BASE_URL}artista/`);
  console.log(res.data);
  return res.data;
};

const crearArtista = async (form_data) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${BASE_URL}artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  console.log(res);
  return res;
};

const agregarArtistaMoneda = async (form_data) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${BASE_URL}moneda_artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  console.log(res);
  return res;
};

const agregarArtistaPintura = async (form_data) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${BASE_URL}pintura_artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  console.log(res);
  return res;
};

const crearEvento = async (form_data) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${BASE_URL}evento`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  console.log(res);
  return res;
};

const apiService = {
  login,
  getOrganizacion,
  getOrganizaciones,
  getPaises,
  getDivisas,
  getColeccionista,
  getColeccionistas,
  getEventos,
  getEvento,
  getPinturas,
  getPinturaNur,
  getPinturaId,
  getMonedas,
  getMonedaNur,
  getMonedaId,
  getArtistas,
  crearArtista,
  crearMoneda,
  crearPintura,
  crearEvento,
  agregarArtistaPintura,
  agregarArtistaMoneda,
  /* deleteItem,
  getData,
  createItem,
  getOneData,
  updateData, */
};

export default apiService;
