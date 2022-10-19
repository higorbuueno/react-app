import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./shared/navbar/navbar";
import Home from "./pages/home/home-page";
import Error from "./pages/error/error-page";
import Formatador from "./pages/formatador/formatador-page";
import ComoFunciona from "./pages/como-funciona/como-funciona-page";
import "./routes.css";
import Consultador from "./pages/consultador/consultador-page";

function RoutesApp() {
  return (
    <BrowserRouter>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Routes>
          <Route path="react-app" element={<Home />} />
          <Route path="como-funciona" element={<ComoFunciona />} />
          <Route path="formatador" element={<Formatador />} />
          <Route path="consultador" element={<Consultador />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutesApp;
