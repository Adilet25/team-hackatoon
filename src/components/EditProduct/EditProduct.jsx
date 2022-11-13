import React, { useState, useEffect } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/editProduct.css";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

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
      {product ? (
        <>
          <div className="productDetails_main-block">
            <div className="editProduct_block">
              <h2>Edit Product</h2>
              <h2>How it will be</h2>
              <div className="editProduct_info-block">
                <div className="editProduct_showNew">
                  <div>
                    <img
                      src={product.picture}
                      alt=""
                      className="editProduct_img"
                    />
                  </div>
                  <div className="editProduct_oldInfo-block">
                    <h3>Name:{product.name}</h3>
                    <h3>price:{product.price}$</h3>
                    <h3>description:{product.description}</h3>
                    <h3>type:{product.type}</h3>
                  </div>
                </div>
                <div>
                  <h2>Edit block</h2>
                  <input
                    type="text"
                    value={product.name}
                    placeholder="Title"
                    name="name"
                    onChange={handleInp}
                    className="editInput"
                  />
                  <br />
                  <input
                    type="text"
                    value={product.picture}
                    placeholder="Picture"
                    name="picture"
                    onChange={handleInp}
                    className="editInput"
                  />
                  <br />
                  <input
                    type="number"
                    value={product.price}
                    placeholder="Price"
                    name="price"
                    onChange={handleInp}
                    className="editInput"
                  />
                  <br />
                  <input
                    type="text"
                    value={product.description}
                    placeholder="Description"
                    name="description"
                    onChange={handleInp}
                    className="editInput"
                  />
                  <br />
                  <input
                    type="text"
                    value={product.type}
                    placeholder="Type"
                    name="type"
                    onChange={handleInp}
                    className="editInput"
                  />
                  <br />
                </div>
              </div>

              <button
                className="editInput_save-button"
                onClick={() => {
                  saveEditedProduct(product);
                  navigate("/products");
                }}>
                Save Changes
              </button>
            </div>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditProduct;
