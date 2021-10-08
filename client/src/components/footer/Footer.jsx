import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <footer className="footer section">
        <div className="footer__container bd-grid">
          <div className="footer__box">
            <h3 className="footer__title">THOORIGA COLLECTIONS</h3>
            <p className="footer__deal">Products store</p>
            <Link to="/" className="footer__store">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/thooriga-silks.appspot.com/o/footerstore1.png?alt=media&token=924e6b80-933d-4a9a-98e8-b78880bf503c"
                alt=""
              />
            </Link>
            <Link to="/" className="footer__store">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/thooriga-silks.appspot.com/o/footerstore2.png?alt=media&token=c8ada350-6eea-45bc-90d4-45ca9d80075d"
                alt=""
              />
            </Link>
          </div>

          <div className="footer__box">
            <h3 className="footer__title">EXPLORE</h3>
            <ul>
              <li>
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="footer__link">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/" className="footer__link">
                  New
                </Link>
              </li>
              <li>
                <Link to="/" className="footer__link">
                  Subscribed
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h3 className="footer__title">OUR SERVICES</h3>
            <ul>
              <li>
                <Link to="/" className="footer__link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="footer__link">
                  Free Shipping
                </Link>
              </li>
              <li>
                <Link to="/" className="footer__link">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h3 className="footer__title">FOLLOW</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                >
                  <FacebookOutlinedIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                >
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copy">&#169; 2021 copyright reserved</p>
      </footer>
    </>
  );
};

export default Footer;
