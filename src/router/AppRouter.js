import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "../components/Error";
import Details from "../pages/Details";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import Product from "../pages/Product";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
