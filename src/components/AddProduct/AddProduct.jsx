import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductContextProvider from "../../context/ProductContextProvider.js";
import { useProducts } from "../../context/ProductContextProvider.js";
import "../../styles/addProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = e => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      <div className="addProduct">
        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Title"
          name="name"
          onChange={handleInp}
          className="addInput"
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleInp}
          className="addInput"
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleInp}
          className="addInput"
        />
        <br />
        <input
          type="text"
          placeholder="Picture"
          name="picture"
          onChange={handleInp}
          className="addInput"
        />
        <br />
        <input
          type="text"
          placeholder="Type"
          name="type"
          onChange={handleInp}
          className="addInput"
        />
        <br />

        <button
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}
          className="addButton">
          Save
        </button>
      </div>
    </>
  );
};

export default AddProduct;
