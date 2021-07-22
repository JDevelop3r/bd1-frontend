import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import {
  types,
  transitions,
  positions,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "./components/Alert/AlertTemplate";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Authenticate from "./pages/Authenticate";
import OrganizacionesPage from "./pages/OrganizacionesPage";
import EventosPage from "./pages/EventosPage";
import DetalleEvento from "./pages/DetalleEvento";
import FichaColeccionista from "./pages/FichaColeccionista";
import FichaOrganizacion from "./pages/FichaOrganizacion";
import FichaObjeto from "./pages/FichaObjeto";
import CrearObjeto from "./pages/CrearObjeto";
import Subasta from "./pages/subasta";
import NuevoArtista from "./pages/NuevoArtista";
import CrearEvento from "./pages/CrearEvento";
import Page404 from "./pages/404Page";
import ArtistaObjeto from "./pages/ArtistaObjeto";
import AgregarSubastasAEvento from "./pages/AgregarSubastasAEvento";
import AgregarPrecios from "./pages/AgregarPrecios";
import Factura from "./pages/Factura";
import Monedas from "./pages/Monedas";

function App() {
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: "30px",
    type: types.SUCCESS,
    transition: transitions.SCALE,
  };

  return (
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Authenticate} />
            <Route exact path="/register" component={Authenticate} />
            <Route
              exact
              path="/organizaciones"
              component={OrganizacionesPage}
            />
            <Route exact path="/eventos" component={EventosPage} />
            <Route
              exact
              path="/eventos/:organizacionId"
              component={EventosPage}
            />
            <Route exact path="/evento/:id" component={DetalleEvento} />
            <Route
              exact
              path="/coleccionista/:id"
              component={FichaColeccionista}
            />
            <Route
              exact
              path="/organizacion/:id"
              component={FichaOrganizacion}
            />
            <Route exact path="/objeto/:type/:id" component={FichaObjeto} />
            <Route exact path="/crear/:type" component={CrearObjeto} />
            <Route exact path="/editar/:type/:id" component={CrearObjeto} />
            <Route exact path="/subasta" component={Subasta} />
            <Route exact path="/artista" component={NuevoArtista} />
            <Route exact path="/crear-evento" component={CrearEvento} />
            <Route exact path="/404" component={Page404} />
            <Route exact path="/agregar-artista" component={ArtistaObjeto} />
            <Route exact path="/Agregar-Precios" component={AgregarPrecios} />
            <Route exact path="/Factura" component={Factura} />
            <Route exact path="/agregar-moneda" component={Monedas} />
            <Route
              exact
              path="/agregar-subastas/:idEvento"
              component={AgregarSubastasAEvento}
            />
          </div>
        </Layout>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
