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
  return localStorage.getItem("token") ?? false;
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
  console.log(token);
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
  const token = getToken();
  await actualizar();
  const res = await axios.get(`${BASE_URL}evento/${id}`, {
    headers: { TOKEN: token },
  });
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
  return res.data;
};

const getListaObjeto = async (idEvento) => {
  const res = await axios.get(`${BASE_URL}lista_objeto/evento/${idEvento}`);
  return res.data;
};

const getListaObjetoSubasta = async (idSubasta) => {
  const res = await axios.get(`${BASE_URL}lista_objeto/get/${idSubasta}`);
  return res.data;
};

const crearArtista = async (form_data) => {
  const token = getToken();
  const res = await axios.post(`${BASE_URL}artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  return res;
};

const agregarArtistaMoneda = async (form_data) => {
  const token = getToken();
  const res = await axios.post(`${BASE_URL}moneda_artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  return res;
};

const agregarContacto = async (form_data, mandarToken) => {
  const token = getToken();
  const headers = { "content-type": "application/json" };
  if (mandarToken) headers.TOKEN = token;
  const res = await axios.post(`${BASE_URL}contacto`, form_data, {
    headers,
  });
  return res;
};

const agregarArtistaPintura = async (form_data) => {
  const token = getToken();
  const res = await axios.post(`${BASE_URL}pintura_artista`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  return res;
};

const crearEvento = async (form_data) => {
  const token = getToken();
  const res = await axios.post(`${BASE_URL}evento`, form_data, {
    headers: { "content-type": "application/json", TOKEN: token },
  });
  return res;
};

const getEventoBySubastaId = async (id) => {
  const res = await axios.get(`${BASE_URL}evento/getbysubasta/${id}`);
  console.log(res);
  return res.data.evento;
};

const getPujaDinamica = async (id) => {
  const token = getToken();
  const res = await axios.get(`${BASE_URL}evento/getpujadinamica/${id}`, {
    headers: { TOKEN: token },
  });
  return res.data;
};

const getPujaSobreCerrado = async (id) => {
  const token = getToken();
  const res = await axios.get(`${BASE_URL}evento/getpujasobrecerrado/${id}`, {
    headers: { TOKEN: token },
  });
  return res.data;
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

const comenzarSubasta = async (id) => {
  console.log(id);
  const res = await axios.post(`${BASE_URL}evento/comenzar/${id}`);
  console.log(res);
  return res;
};

const enviarOfertaDinamica = async (precio, id) => {
  const token = getToken();
  console.log(id);
  const res = await axios.post(
    `${BASE_URL}evento/pujadinamica/${id}`,
    { precio },
    {
      headers: { TOKEN: token },
    }
  );
  return res;
};
const getCostoEnvio = async (id_pais, id_evento, costoextra) => {
  const token = getToken();
  const res = await axios.post(
    `${BASE_URL}costoEnvio`,
    { id_pais, id_evento, costoextra },
    {
      headers: { "content-type": "application/json", TOKEN: token },
    }
  );
  console.log(res);
  return res;
};

const actualizar = async () => {
  const res = await axios.post(`${BASE_URL}evento/actualizar/`);
  return res;
};

const enviarOfertaSobreCerrado = async (precio, id) => {
  const token = getToken();
  console.log(id);
  const res = await axios.post(
    `${BASE_URL}evento/pujasobrecerrado/${id}`,
    { precio },
    {
      headers: { TOKEN: token },
    }
  );
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
  getCostoEnvio,
  getCatalogoOrganizadores,
  getListaObjeto,
  getEventoBySubastaId,
  getPujaSobreCerrado,
  getPujaDinamica,
  getListaObjetoSubasta,
  crearArtista,
  crearMoneda,
  crearPintura,
  crearEvento,
  agregarArtistaPintura,
  agregarContacto,
  agregarArtistaMoneda,
  agregarSubastasAEvento,
  inscribirEnEvento,
  comenzarSubasta,
  enviarOfertaDinamica,
  enviarOfertaSobreCerrado,
  actualizar,
};

export default apiService;
