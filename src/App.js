import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Authenticate} />
          <Route exact path="/register" component={Authenticate} />
          <Route exact path="/organizaciones" component={OrganizacionesPage} />
          <Route exact path="/eventos" component={EventosPage} />
          <Route exact path="/evento/:id" component={DetalleEvento} />
          <Route
            exact
            path="/coleccionista/:id"
            component={FichaColeccionista}
          />
          <Route exact path="/organizacion/:id" component={FichaOrganizacion} />
          <Route exact path="/objeto/:type/:id" component={FichaObjeto} />
          <Route exact path="/crear/:type" component={CrearObjeto} />
          <Route exact path="/editar/:type/:id" component={CrearObjeto} />
          <Route exact path="/subasta" component={Subasta} />
          <Route exact path="/artista" component={NuevoArtista} />
          <Route exact path="/crear-evento" component={CrearEvento} />
          <Route exact path="/404" component={Page404} />
          <Route exact path="/agregar-artista" component={ArtistaObjeto} />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
