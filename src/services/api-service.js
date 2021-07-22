import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const login = async (user) => {
  const res = await axios.post(`${BASE_URL}login/`, user, {
    headers: { "content-type": "application/json" },
  });
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem("token", res.data["TOKEN"]);
    localStorage.setItem("tipo", res.data["tipo"]);
  }
  console.log(res);
  return res;
};

const Logout = () => {
  localStorage.removeItem("token");
};

const getToken = () => {
  return localStorage.getItem("token") ?? null;
};

const registerColeccionista = async (user) => {
  const res = await axios.post(`${BASE_URL}coleccionista`, user, {
    headers: { "content-type": "application/json" },
  });
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem("token", res.data["TOKEN"]);
  }
  console.log(res);
  return res;
};

const registerOrganizacion = async (user) => {
  const res = await axios.post(`${BASE_URL}organizacion`, user, {
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

const inscribirEnEvento = async (idEvento) => {
  const token = getToken();
  const res = await axios.post(
    `${BASE_URL}participante/inscripcion/${idEvento}`,
    {},
    {
      headers: { "content-type": "application/json", TOKEN: token },
    }
  );
  console.log(res);
  return res;
};

const getEventos = async () => {
  const token = getToken();
  const res = await axios.get(`${BASE_URL}evento/`, {
    headers: { TOKEN: token },
  });
  console.log(res.data);
  return res.data;
};

const getEventosOrganizacion = async (organizacionId) => {
  const token = getToken();
  const res = await axios.get(`${BASE_URL}evento/eventos/${organizacionId}`, {
    headers: { TOKEN: token },
  });
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
  const token = getToken();
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

const getCatalogoOrganizadores = async (organizaciones) => {
  const res = await axios.post(
    `${BASE_URL}catalogo/organizaciones`,
    { id_organizaciones: organizaciones },
    { headers: { "content-type": "application/json" } }
  );
  console.log(res.data);
  return res.data;
};

const getPinturaId = async (id) => {
  const res = await axios.get(`${BASE_URL}catalogo/pintura/obj/${id}`);
  console.log(res.data);
  return res.data;
};

const crearPintura = async (form_data) => {
  const token = getToken();
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

const getListaObjeto = async (idEvento) => {
  const res = await axios.get(`${BASE_URL}lista_objeto/evento/${idEvento}`);
  console.log(res.data);
  return res.data;
};

const crearArtista = async (form_data) => {
  const token = getToken();
  const res = await axios.post(`${BASE_URL}artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  console.log(res);
  return res;
};

const agregarArtistaMoneda = async (form_data) => {
  const token = getToken();
  const res = await axios.post(`${BASE_URL}moneda_artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  console.log(res);
  return res;
};

const agregarContacto = async (form_data, mandarToken) => {
  const token = getToken();
  const headers = { "content-type": "application/json" };
  if (mandarToken) headers.TOKEN = token;
  const res = await axios.post(`${BASE_URL}contacto`, form_data, {
    headers,
  });
  console.log(res);
  return res;
};

const agregarArtistaPintura = async (form_data) => {
  const token = getToken();
  const res = await axios.post(`${BASE_URL}pintura_artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  console.log(res);
  return res;
};

const crearEvento = async (form_data) => {
  const token = getToken();
  const res = await axios.post(`${BASE_URL}evento`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  console.log(res);
  return res;
};

const agregarSubastasAEvento = async (ordenes, id_evento) => {
  const token = getToken();
  const res = await axios.post(
    `${BASE_URL}lista_objeto`,
    { ordenes, id_evento },
    {
      headers: { "content-type": "application/json", TOKEN: token },
    }
  );
  console.log(res);
  return res;
};

const apiService = {
  login,
  Logout,
  getToken,
  registerOrganizacion,
  registerColeccionista,
  getEventosOrganizacion,
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
  getCatalogoOrganizadores,
  getListaObjeto,
  crearArtista,
  crearMoneda,
  crearPintura,
  crearEvento,
  agregarArtistaPintura,
  agregarContacto,
  agregarArtistaMoneda,
  agregarSubastasAEvento,
  inscribirEnEvento,
};

export default apiService;
