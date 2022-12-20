import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EthProvider } from "./contexts/EthContext";
import GlobalStyle from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EthProvider>
    <GlobalStyle />
    <App />
  </EthProvider>
);
