import React from "react";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer.jsx";
// import CartContextProvider from "./context/CartContextProvider.js";
import "./styles/App.css";
// import AddProduct from "./components/AddProduct/AddProduct.jsx";
// import ProductList from "./components/ProductList/ProductList.jsx";
// import ProductContextProvider from "./context/ProductContextProvider.js";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
