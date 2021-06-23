import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/agregar" component={NewProduct} />
          <Route exact path="/editar/:id" component={NewProduct} />
          {/* <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> */}
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
