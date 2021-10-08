import React, { createContext, useReducer } from "react";

import ProductReducer from "./ProductReducer";

// Initial State
const initialState = {
  products: [],
  isFetchingProduct: false,
  productError: null,
};

// Create Context
export const ProductGlobalContext = createContext(initialState);

// Provider component
export const ProductGlobalProvider = ({ children }) => {
  const [state, dispatchProduct] = useReducer(ProductReducer, initialState);

  return (
    <ProductGlobalContext.Provider
      value={{
        products: state.products,
        isFetchingProduct: state.isFetchingProduct,
        productError: state.productError,
        dispatchProduct,
      }}
    >
      {children}
    </ProductGlobalContext.Provider>
  );
};
