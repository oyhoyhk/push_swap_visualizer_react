import ReactDOM from "react-dom/client";
import App from "./App";
import { inject } from "@vercel/analytics";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./Description";
import Header from "./Header";

inject();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/description"} element={<Description />} />
      </Routes>
    </BrowserRouter>
  </>
);
