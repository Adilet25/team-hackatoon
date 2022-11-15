import React, { useContext, useReducer } from "react";
import { CART } from "../../helpers/consts";
import {
  getCountProductsInCart,
  calcSubPrice,
  calcTotalPrice,
} from "../../helpers/functions";

export const cartContextProvider = React.createContext();
export const useCart = () => useContext(cartContextProvider);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: getCountProductsInCart(),
    });
  };

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    let productToFind = cart.products.filter(
      elem => elem.item.id === product.id
    );
    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(elem => elem.item.id !== product.id);
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  const deleteFromCart = id => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter(item => item.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  function changeCountOfProducts(count, id) {
    if (count < 0) {
      alert("Error, it can not be less than 0");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map(product => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  }

  return (
    <cartContextProvider.Provider
      value={{
        addProductToCart,
        getCart,
        deleteFromCart,
        changeCountOfProducts,

        cart: state.cart,
        cartLength: state.cartLength,
      }}>
      {children}
    </cartContextProvider.Provider>
  );
};

export default CartContextProvider;
