import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import Characters from "./components/Characters";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Characters />
  </React.StrictMode>
);