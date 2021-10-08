import React, { useState, useContext } from "react";
import "./auth.css";
import { useHistory } from "react-router-dom";
import { AuthGlobalContext } from "../../context/authContext/AuthGlobalState";

const Auth = () => {
  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({});
  const { signin, signup } = useContext(AuthGlobalContext);

  // Handling the signin/signup form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      signup(formData, history);
    } else {
      signin(formData, history);
    }
  };

  // Handling the inputs of the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to switch between signup and signin
  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__container">
      <form onSubmit={handleSubmit}>
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {isSignUp && (
          <>
            {" "}
            <div className="inputBox">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              {" "}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
            </div>{" "}
          </>
        )}
        <div className="inputBox">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputBox">
          {" "}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        {isSignUp && (
          <div className="inputBox">
            {" "}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="inputBox">
          <input
            type="submit"
            name={isSignUp ? "Sign Up" : "Sign In"}
            value={isSignUp ? "Sign Up" : "Sign In"}
          />
        </div>
        <div></div>
        <div className="switchButton">
          <input
            type="submit"
            onClick={switchMode}
            value={
              isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Auth;
