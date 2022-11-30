import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/global.css";
import App from "./App";
import { Provider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
