import React from "react";
import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter section" id="subscribed">
      <div className="newsletter__container bd-grid">
        <div className="newsletter__subscribe">
          <h2 className="section-title">OUR NEWSLETTER</h2>
          <p className="newsletter__description">
            Promotion of new products and sales.
          </p>

          <form action="" className="newsletter__form">
            <input
              type="text"
              className="newsletter__input"
              placeholder="Enter your email"
            />
            <button className="button">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
