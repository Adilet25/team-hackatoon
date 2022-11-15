import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider.js";
import "../../styles/details.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      {productDetails ? (
        <div className="productDetails_main-block">
          {" "}
          <div className="productDetails_block">
            <h3 className="productDetails_name">{productDetails.name}</h3>
            <div className="productDetails_info">
              <img
                className="productDetails_img"
                src={productDetails.picture}
                alt=""
              />
              <div className="productDetails_info2">
                <h3 className="productDetails_description">
                  Description:
                  <br /> {productDetails.description}
                </h3>
                <h3 className="productDetails_price">
                  Price: {productDetails.price}$
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ProductDetails;
