import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import DetailProducto from "./Components/DetailProducto/DetailProducto";
import FormProducto from "./Components/FormProducto/FormProducto";
import LandingPage from "./Components/LandingPage/LandingPage";
import SwipeableTextMobileStepper from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Contacto from "./Components/Contacto/Contacto";
import { Routes, Route, useNavigate } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";
import FormCrearUsuario from "./Components/FormCrearUsuario/FormCrearUsuario";

function App() {
  // const location = useLocation();
  const navigate = useNavigate();

  //Funcion para salir de la landing page e ir al home
  function onClick() {
    navigate("/home");
  }

  return (
    <div>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<SwipeableTextMobileStepper />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/formProducto" element={<FormProducto />}></Route>
        <Route path="/detailProducto/:id" element={<DetailProducto />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/formCrearUsuario" element={<FormCrearUsuario />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
