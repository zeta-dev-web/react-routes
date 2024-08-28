import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import ContactScreen from "../views/ContactScreen";
import ProductsScreen from "../views/ProductsScreen";
import ErrorScreen from "../views/ErrorScreen";
import NavbarApp from "../components/NavbarApp";

const RouteTwo = () => {
  return (
    <div>
        <NavbarApp/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/productos" element={<ProductsScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </div>
  );
};

export default RouteTwo;
