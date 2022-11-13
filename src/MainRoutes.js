import React from "react";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/HomePage/HomePage";
import RegisterUser from "./components/Authorization/RegisterUser";
import LoginUser from "./components/Authorization/LoginUser";
// import ProductList from "./components/ProductList/ProductList";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import SportPage from "./pages/SportPage";
import ClothesPage from "./pages/ClothesPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import CardEditPage from "./pages/CardEditPage";
import AddProductPage from "./pages/AddProductPage";

const MainRoutes = () => {
  const ALL_ROUTES = [
    {
      path: "/",
      element: <MainPage />,
      id: 1,
    },

    {
      path: "/cart",
      element: <Cart />,
      id: 2,
    },
    {
      path: "/login",
      element: <LoginUser />,
      id: 3,
    },
    {
      path: "/register",
      element: <RegisterUser />,
      id: 4,
    },
    {
      path: "/products",
      element: <ProductsPage />,
      id: 5,
    },
    {
      path: "/details/:id",
      element: <DetailsPage />,
      id: 6,
    },

    {
      path: "/sport",
      element: <SportPage />,
      id: 7,
    },
    {
      path: "/clothes",
      element: <ClothesPage />,
      id: 8,
    },
    {
      path: "/electronics",
      element: <ElectronicsPage />,
      id: 9,
    },
    {
      path: "/edit/:id",
      element: <CardEditPage />,
      id: 10,
    },
    {
      path: "/add",
      element: <AddProductPage />,
      id: 11,
    },
  ];

  return (
    <Routes>
      {ALL_ROUTES.map(item => (
        <Route path={item.path} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
