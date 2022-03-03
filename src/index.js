import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Root from "./Root";
// import Dashboard from "./Dashboard";

import "./index.css"; // +normalize
import "./theme/bootstrap.css"; // +bs5 +bootswatch +some-overrides

import "animate.css"; // +simple ccs amimations


ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById("pjxvzsvatqm")
);
