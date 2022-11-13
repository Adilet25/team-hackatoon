import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CartContextProvider from "./context/CartContextProvider.js";
import MainRoutes from "./MainRoutes.js";
import "./styles/App.css";
import AddProduct from "./components/AddProduct/AddProduct.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import ProductContextProvider from "./context/ProductContextProvider.js";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
