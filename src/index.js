import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./router/App";
import GlobalStyles from "./styles/globalStyle";
import history from "./system/router/history";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
