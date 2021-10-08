import React, { useContext, useEffect } from "react";
import "./productList.css";
import { ProductGlobalContext } from "../../context/productContext/ProductGlobalState";
import { getProducts } from "../../context/productContext/productApiCalls";
import { useHistory } from "react-router-dom";

const ProductsList = () => {
  const { products, dispatchProduct, isFetchingProduct, productError } =
    useContext(ProductGlobalContext);
  const history = useHistory();

  useEffect(() => {
    getProducts(dispatchProduct);
  }, [dispatchProduct]);

  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };

  if (productError) {
    return <div>Something went wrong.</div>;
  } else if (isFetchingProduct) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="featured section" id="featured">
        <h2 className="section-title">Saree Collections</h2>˘
        <div className="featured__container bd-grid">
          {products.map((product) => (
            <div
              className="featured__product"
              key={product._id}
              onClick={() => handleClick(product._id)}
            >
              <div className="featured__box">
                <div className="featured__new">NEW</div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="featured__img"
                />
              </div>

              <div className="featured__data">
                <h3 className="featured__name">{product.title}</h3>
                <span className="featured__price">₹{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
};

export default ProductsList;
