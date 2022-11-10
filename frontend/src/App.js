import React from "react";
import "./App.css";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
