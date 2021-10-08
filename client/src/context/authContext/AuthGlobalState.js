import React, { createContext, useReducer } from "react";

import * as api from "../../adapters/index";
import AuthReducer from "./AuthReducer";
import { AUTH } from "../../constants/actionTypes";

// Initial State
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  showError: false,
};

// Create context
export const AuthGlobalContext = createContext(initialState);

// Provider component
export const AuthGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Global function for signin
  const signin = async (formData, history) => {
    try {
      const { data } = await api.signin(formData);

      dispatch({ type: AUTH, payload: data });

      history.push("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // Global function for signup
  const signup = async (formData, history) => {
    try {
      const { data } = await api.signup(formData);

      dispatch({ type: AUTH, payload: data });

      history.push("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <AuthGlobalContext.Provider
      value={{
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
        signin,
        signup,
        dispatch,
      }}
    >
      {children}
    </AuthGlobalContext.Provider>
  );
};
