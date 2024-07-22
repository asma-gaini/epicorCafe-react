import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n/i18n";
import "./reset.css";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
