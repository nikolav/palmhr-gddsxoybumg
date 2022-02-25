import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "animate.css";

import "./index.css";
import "./theme/bootstrap.css";

import Root from "./Root";

// import "bootstrap";

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById("root")
);
