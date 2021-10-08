import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_START,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "../../constants/actionTypes";

export const getProductsStart = () => {
  return {
    type: GET_PRODUCTS_START,
  };
};

export const getProductsSuccess = (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
    error: null,
  };
};

export const getProductsFailure = (error) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: null,
    error: error,
  };
};

export const getProductDetailsStart = () => {
  return {
    type: GET_PRODUCT_DETAILS_START,
  };
};

export const getProductDetailsSuccess = (products) => {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    payload: products,
    error: null,
  };
};

export const getProductDetailsFailure = (error) => {
  return {
    type: GET_PRODUCT_DETAILS_FAILURE,
    payload: null,
    error: error,
  };
};
