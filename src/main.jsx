import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n/i18n";
import "./reset.css";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { store } from "./store/store";
// import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
