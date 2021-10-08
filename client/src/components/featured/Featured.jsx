import React from "react";
import "./featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <div className="home__data">
          <h1 className="home__title">
            NEW
            <br />
            <span>ARRIVALS</span>
          </h1>
          <Link to="/" className="button">
            GO SHOPPING
          </Link>
        </div>

        <img
          src="https://firebasestorage.googleapis.com/v0/b/thooriga-silks.appspot.com/o/featured1_adobespark.png?alt=media&token=8255de99-e5c0-41a5-8170-5847641cd042"
          alt="featured"
          className="home__img"
        />
      </div>
    </section>
  );
};

export default Featured;
