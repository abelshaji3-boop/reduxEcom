import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Wishlist from "./pages/WishList";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/viewSingle/:id" element={<SingleProduct />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
