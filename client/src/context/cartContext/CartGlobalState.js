import React, { createContext, useReducer } from "react";

import CartReducer from "./CartReducer";

// Initial State
const initialState = {
  cart: [],
  isFetchingCart: false,
  cartError: null,
};

// Create Context
export const CartGlobalContext = createContext(initialState);

// Provider component
export const CartGlobalProvider = ({ children }) => {
  const [state, dispatchCart] = useReducer(CartReducer, initialState);

  return (
    <CartGlobalContext.Provider
      value={{
        cart: state.cart,
        isFetchingCart: state.isFetchingCart,
        cartError: state.cartError,
        dispatchCart,
      }}
    >
      {children}
    </CartGlobalContext.Provider>
  );
};
