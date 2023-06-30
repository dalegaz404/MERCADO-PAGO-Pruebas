import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import logo from "../Img/logoAll.png";
//import carrito from "../Img/carrito.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="caja1">
        <div className="caja1A">
          <div className="cajaLogo">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="busqueda">
            <SearchBar></SearchBar>
          </div>
          <div className="carrito">
            <Link to="/carrito">
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/873/880/non_2x/store-flat-icon-design-shop-icon-design-shop-icon-isolated-on-grey-background-shop-sign-vector.jpg"
                alt=""
                className="carritoLogo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="caja2">
        <div className="caja2B">
          <div className="home">
            <Link to="/home">
              <img
                src="https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/356230708_1436119560543016_9206910051547847731_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=mBbIP6t34VgAX8WvQlV&_nc_ht=scontent.fcor16-1.fna&oh=00_AfDWGjo3WrOfAar84B1FZOdIt7Fr9laxB70faOIiwi2KsQ&oe=649D673A"
                alt=""
                className="imagenHome"
              />
            </Link>
          </div>
          <div className="categorias">
            <Link to="" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Tecnologia</p>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Electrodomesticos</p>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Hogar y muebles</p>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Herramientas</p>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Moda</p>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Juguetes</p>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Construcion</p>
            </Link>
          </div>
          <div className="actividades">
            <Link to="/micuenta" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Mi cuenta</p>
            </Link>
            <Link to="/formProducto" style={{ textDecoration: "none" }}>
              <p style={{ color: "red" }}>Vender</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
