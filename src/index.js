import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import App from "./components/App";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
reportWebVitals();
