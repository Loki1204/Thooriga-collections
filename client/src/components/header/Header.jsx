import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import { AuthGlobalContext } from "../../context/authContext/AuthGlobalState";
import { LOGOUT } from "../../constants/actionTypes";
import decode from "jwt-decode";
import { CartGlobalContext } from "../../context/cartContext/CartGlobalState";
import { getUserCart } from "../../context/cartContext/cartApiCalls";

const Header = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("Profile")));
  const { dispatch } = useContext(AuthGlobalContext);
  const history = useHistory();
  const location = useLocation();
  const { cart, dispatchCart } = useContext(CartGlobalContext);
  const menuRef = useRef(null);

  // console.log(cart);

  useEffect(() => {
    if (user) {
      getUserCart(dispatchCart, user.result._id);
    }
  }, [dispatchCart, user]);

  const handleMenuClick = () => {
    setIsToggleActive(!isToggleActive);
  };

  const handleLinkChange = () => {
    setIsToggleActive(false);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsToggleActive(false);
        }
      };
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(menuRef);

  // Handling the LogOut
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };

  const handleCartClick = () => {
    history.push("/cart");
  };

  // Handling the user profile and token in local storage
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("Profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="nav__logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/thooriga-silks.appspot.com/o/logos%2FThooriga%20collections-logos_black.png?alt=media&token=7e554e57-0da6-437f-93c2-4e9c1f02ce8e"
              alt="logo"
            />
          </div>

          <div className={`nav__menu ${isToggleActive ? "show" : ""}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link" onClick={handleLinkChange}>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/sarees"
                  className="nav__link"
                  onClick={handleLinkChange}
                >
                  Sarees
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/aboutus"
                  className="nav__link"
                  onClick={handleLinkChange}
                >
                  About Us
                </Link>
              </li>
              {user ? (
                <li className="nav__item">
                  <Link to="/" className="nav__link" onClick={logout}>
                    Sign Out
                  </Link>
                </li>
              ) : (
                <li className="nav__item">
                  <Link
                    to="/auth"
                    className="nav__link"
                    onClick={handleLinkChange}
                  >
                    Sign In / Sign Up
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            {user ? (
              <span className="nav__cart">
                <span>
                  <ShoppingCartOutlinedIcon onClick={handleCartClick} />
                </span>
                {cart
                  .map((data) => data.products)
                  .map((datum) => datum[0].quantity)
                  .reduce((a, b) => a + b, 0) >= 1 ? (
                  <span className="nav__cart__badge">
                    {cart
                      .map((data) => data.products)
                      .map((datum) => datum[0].quantity)
                      .reduce((a, b) => a + b, 0)}
                  </span>
                ) : (
                  ""
                )}
              </span>
            ) : (
              ""
            )}
            <MenuIcon
              className="nav__toggle"
              ref={menuRef}
              onClick={handleMenuClick}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
