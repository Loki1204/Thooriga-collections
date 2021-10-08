import React from "react";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import ProductList from "../../components/productsList/ProductList";

const Home = () => {
  return (
    <div>
      <Featured />
      <ProductList />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
