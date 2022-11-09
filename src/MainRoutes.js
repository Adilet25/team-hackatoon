import React from "react";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

const MainRoutes = () => {
  const ALL_ROUTES = [
    {
      path: "/",
      element: <HomePage />,
      id: 1,
    },

    {
      path: "/cart",
      element: <Cart />,
      id: 2,
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
