import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from "./styles/CssBaseline";
import App from "./App";

ReactDOM.render(
  <Router>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);
