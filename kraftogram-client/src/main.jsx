import { BurgerProvider } from "./contexts/Hamburger.context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BurgerProvider>
      <App />
    </BurgerProvider>
  </React.StrictMode>
);
