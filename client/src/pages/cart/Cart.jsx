import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { CartGlobalContext } from "../../context/cartContext/CartGlobalState";
import { ProductGlobalContext } from "../../context/productContext/ProductGlobalState";
import DeleteIcon from "@mui/icons-material/Delete";
import { getProducts } from "../../context/productContext/productApiCalls";
import {
  getUserCart,
  removeFromCart,
} from "../../context/cartContext/cartApiCalls";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("Profile"));

  const { cart, dispatchCart, isFetchingCart, cartError } =
    useContext(CartGlobalContext);
  const { products, dispatchProduct, isFetchingProduct, productError } =
    useContext(ProductGlobalContext);

  const [product, setProduct] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getUserCart(dispatchCart, user.result._id);
    getProducts(dispatchProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatchCart, dispatchProduct]);

  useEffect(() => {
    setProduct(
      products.filter((product) =>
        cart
          .map((data) => data.products)
          .map((product) => product[0].productId)
          .includes(product._id)
      )
    );
  }, [cart, products]);

  const removeItemFromCart = (id) => {
    const cartId = cart.filter((data) => data.products[0].productId === id);

    removeFromCart(dispatchCart, cartId[0]._id);
  };

  const redirectLink = (id) => {
    history.push(`/product/${id}`);
  };

  if (productError && cartError) {
    return <div>Something went wrong.</div>;
  } else if (isFetchingProduct && isFetchingCart) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="shop__cart">
        <h1>Shopping Cart</h1>
        {product.map((data) => (
          <div className="cart__container" key={data._id}>
            <div className="products__container">
              <div className="productData__container">
                <img
                  src={data.image}
                  alt="saree"
                  onClick={() => redirectLink(data._id)}
                />
                <div className="product__info">
                  <h3
                    className="product__name"
                    onClick={() => redirectLink(data._id)}
                  >
                    {data.title}
                  </h3>
                  <h4 className="product__price">₹{data.price}</h4>

                  <div className="upDel__btn">
                    <button
                      className="product__remove"
                      onClick={() => removeItemFromCart(data._id)}
                    >
                      <DeleteIcon />
                      <span className="remove">Remove from cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="cart__total">
          <p>
            <span>Total Price</span>
            <span>
              ₹{product.map((data) => data.price).reduce((a, b) => a + b, 0)}
            </span>
          </p>
          <p>
            <span>Number of Items</span>
            <span>
              {cart
                .map((data) => data.products)
                .map((datum) => datum[0].quantity)
                .reduce((a, b) => a + b, 0)}
            </span>
          </p>
          <div className="checkout__button">
            <button>
              <a
                href="https://pages.razorpay.com/thooriga-collections"
                target="_blank"
                rel="noreferrer"
              >
                Proceed to Checkout
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
