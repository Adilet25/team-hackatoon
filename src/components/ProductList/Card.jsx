import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";
import { useCart } from "../Cart/CartContextProvider";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { Pagination } from "@mui/material";
import ProductList from "./ProductList";
import "../../styles/Card.css";
import "../../styles/Navbar.css";
import Like from "./Like";

const Card = props => {
  const API = " http://localhost:8000/products";
  // const [, setProducts] = useState([]);
  const { addProductToCart } = useCart();
  const { deleteProduct } = useProducts();

  const [page, setPage] = useState(1);

  // временный render продуктов!

  // async function render() {
  //   let { data } = await axios(`${API}/${window.location.search}`);
  //   setProducts([...data]);
  // }

  const { getProducts, products } = useProducts();

  const navigate = useNavigate();

  const [like, setLike] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const itemOnPage = 12;

  const count = Math.ceil(products.length / itemOnPage);

  const handlePage = (e, p) => {
    setPage(p);
    // render();
  };

  function currentData() {
    const begin = (page - 1) * itemOnPage;
    const end = begin + itemOnPage;
    return products.slice(begin, end);
  }
  // console.log(props.currentData);

  return (
    <>
      {currentData().map(item => (
        <div
          className="containerCard"
          key={item.id}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000">
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
                <button className="cardButtons">
                  <Like className="Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="pagination">
        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
          class="pagination"
        />
      </div>
    </>
  );
};

export default Card;
