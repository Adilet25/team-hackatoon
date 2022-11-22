import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../Cart/CartContextProvider";
import "../../styles/Card.css";
import { useProducts } from "../../context/ProductContextProvider.js";
import { List, ListItem, Pagination } from "@mui/material";
import Card from "./Card";
import { render } from "@testing-library/react";

const ProductList = () => {
  const API = "http://localhost:8000/products";

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const { getProducts } = useProducts();

  // const [page, setPage] = useState(1);

  // const [page, setPage] = useState(1);

  // async function render() {
  //   let { data } = await axios(`${API}/${window.location.search}`);
  //   setProducts([...data]);
  // }

  // useEffect(() => {
  //   render();
  // }, [products]);

  // logic of pagination

  useEffect(() => {
    getProducts();
  }, [setPage]);
  return (
    <>
      <Card />
    </>
  );
};

export default ProductList;
