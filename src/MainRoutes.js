import React from "react";
import Cart from "./components/Cart/Cart";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
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
      path: "/products",
      element: <ProductsPage />,
      id: 2,
    },

    {
      path: "/cart",
      element: <Cart />,
      id: 3,
    },
    {
      path: "/details/:id",
      element: <DetailsPage />,
      id: 4,
    },
    {
      path: "/sport",
      element: <SportPage />,
      id: 5,
    },
    {
      path: "/clothes",
      element: <ClothesPage />,
      id: 6,
    },
    {
      path: "/electronics",
      element: <ElectronicsPage />,
      id: 7,
    },
    {
      path: "/edit/:id",
      element: <CardEditPage />,
      id: 8,
    },
    {
      path: "/add",
      element: <AddProductPage />,
      id: 9,
    },
    {
      path: "/login",
      element: <MainPage />,
      id: 11,
    },
    {
      path: "/register",
      element: <MainPage />,
      id: 12,
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
