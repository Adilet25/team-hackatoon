import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../Cart/CartContextProvider";
import "../../styles/Card.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { useProducts } from "../../context/ProductContextProvider.js";

const ProductList = () => {
  const API = " http://localhost:8000/products";
  const [products, setProducts] = useState([]);
  const { addProductToCart } = useCart();
  const { deleteProduct } = useProducts();

  // временный render продуктов!

  async function render() {
    let { data } = await axios(`${API}/${window.location.search}`);
    setProducts([...data]);
  }

  const navigate = useNavigate();

  useEffect(() => {
    render();
  }, [products]);

  return (
    <>
      {products.map(item => (
        <div className="containerCard" key={item.id}>
          <div className="cardBlock">
            <div className="face face1">
              <div className="contentCard">
                <img src={item.picture} alt="" className="cardImg_block" />
                <span className="cardText">
                  <h3>{item.name}</h3>
                  <button
                    className="cardButtons_details"
                    onClick={() => navigate(`/details/${item.id}`)}>
                    Details
                  </button>
                </span>
              </div>
            </div>
            <div className="face face2">
              <div className="contentCard2">
                {/* onClick={() => navigate(`/details/${item.id}`)} */}
                <h3>Price:{item.price}</h3>
                {/* onClick={() => navigate(`/edit/${item.id}`)} */}

                <button
                  className="cardButtons"
                  onClick={() => navigate(`/edit/${item.id}`)}>
                  <EditIcon className="Icon" />
                </button>
                {/* onClick={() => deleteProduct(item.id)} */}
                <button
                  className="cardButtons"
                  onClick={() => deleteProduct(item.id)}>
                  <DeleteIcon className="Icon" />
                </button>
                {/* onClick={() => addProductToCart(item)} */}
                <button
                  className="cardButtons"
                  onClick={() => addProductToCart(item)}>
                  <AddShoppingCart className="Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        // <div>
        //   <a href={item.picture}></a>
        //   <h2 key={item.id}>{item.name}</h2>
        //   <button onClick={() => addProductToCart(item)}>Add to Cart</button>
        // </div>
      ))}
    </>
  );
};

export default ProductList;
