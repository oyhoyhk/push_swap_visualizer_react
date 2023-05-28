import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { inject } from "@vercel/analytics";
import "./index.css";

inject();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
