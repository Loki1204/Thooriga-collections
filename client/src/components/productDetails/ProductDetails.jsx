import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ProductGlobalContext } from "../../context/productContext/ProductGlobalState";
import { getProductDetails } from "../../context/productContext/productApiCalls";
import { CartGlobalContext } from "../../context/cartContext/CartGlobalState";
import {
  getUserCart,
  addCartItem,
} from "../../context/cartContext/cartApiCalls";
import ProductGallery from "./ProductGallery";

const ProductDetails = () => {
  const { products, dispatchProduct, isFetchingProduct, productError } =
    useContext(ProductGlobalContext);
  const { cart, dispatchCart, isFetchingCart, cartError } =
    useContext(CartGlobalContext);
  const { id } = useParams();

  const user = JSON.parse(localStorage.getItem("Profile"));
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    getProductDetails(dispatchProduct, id);
  }, [dispatchProduct, dispatchCart, id]);

  useEffect(() => {
    if (user) {
      getUserCart(dispatchCart, user.result._id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatchCart]);

  useEffect(() => {
    if (
      cart
        .map((data) => data.products)
        .filter((product) => product[0].productId === id)
        .map((filteredData) => filteredData[0].quantity)
        .reduce((a, b) => a + b, 0) >= 1
    ) {
      setIsDisabled(true);
    } else setIsDisabled(false);
  }, [cart, id]);

  const addToCart = (e) => {
    e.preventDefault();

    const newItemToCart = {
      userId: user.result._id,
      products: [{ productId: products._id, quantity: 1 }],
    };

    addCartItem(dispatchCart, newItemToCart);
  };

  if (productError && cartError) {
    return <div>Something went wrong.</div>;
  } else if (isFetchingProduct && isFetchingCart) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="product__container">
          <div className="product__main">
            <ProductGallery id={id} />
            <div className="product__info">
              <h2 className="product__title">{products.title}</h2>
              <div className="product__price">
                <p className="new__price">
                  <span>₹{products.price}</span>
                </p>
              </div>
              <div className="product__description">
                <p>{products.description}</p>
                <ul>
                  <li>
                    <CheckCircleIcon />
                    Category: <span>{products.category}</span>
                  </li>
                  <li>
                    <CheckCircleIcon />
                    Available: <span>In stock</span>
                  </li>
                  <li>
                    <CheckCircleIcon />
                    Shipping Fee: <span>Free</span>
                  </li>
                </ul>
              </div>
              {!user ? (
                <div className="max__purchase">
                  <p>Sign In / Sign Up to add products to your cart.</p>
                </div>
              ) : (
                <div className="purchase__info">
                  <button
                    type="submit"
                    className="btn"
                    onClick={addToCart}
                    disabled={isDisabled}
                  >
                    Add to Cart
                    <span>
                      <ShoppingCartIcon />
                    </span>
                  </button>
                </div>
              )}
              {isDisabled && user ? (
                <div className="max__purchase">
                  <p>You've already added this product to the cart.</p>
                </div>
              ) : (
                ""
              )}

              <div className="social__links">
                <p>Share at:</p>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookOutlinedIcon />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default ProductDetails;
