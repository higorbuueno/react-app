import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./shared/navbar/navbar";
import Home from "./pages/home/home-page";
import Error from "./pages/error/error-page";
import Formatador from "./pages/formatador/formatador";
import ComoFunciona from "./pages/como-funciona/como-funciona-page";
import "./routes.css";

function RoutesApp() {
  return (
    <BrowserRouter>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="como-funciona" element={<ComoFunciona />} />
          <Route path="formatador" element={<Formatador />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutesApp;
