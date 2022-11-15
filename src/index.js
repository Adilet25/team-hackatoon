import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/Cart/CartContextProvider";
import AuthoContextProvider from "./components/Authorization/AuthoConetextProvider";
import ProductContextProvider from "./context/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <AuthoContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthoContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
