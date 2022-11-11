import { BurgerProvider } from "./contexts/Hamburger.context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <BurgerProvider>
        <App />
      </BurgerProvider>
    </React.StrictMode>
  </BrowserRouter>
);
