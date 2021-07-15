import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Authenticate from "./pages/Authenticate";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Authenticate} />
          <Route exact path="/register" component={Authenticate} />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
