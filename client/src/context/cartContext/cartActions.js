import {
  ADD_CART_ITEM_FAILURE,
  ADD_CART_ITEM_START,
  ADD_CART_ITEM_SUCCESS,
  DELETE_CART_FAILURE,
  DELETE_CART_START,
  DELETE_CART_SUCCESS,
  GET_USER_CART_FAILURE,
  GET_USER_CART_START,
  GET_USER_CART_SUCCESS,
} from "../../constants/actionTypes";

export const getUserCartStart = () => {
  return {
    type: GET_USER_CART_START,
  };
};

export const getUserCartSuccess = (cart) => {
  return {
    type: GET_USER_CART_SUCCESS,
    payload: cart,
    error: null,
  };
};

export const getUserCartFailure = (error) => {
  return {
    type: GET_USER_CART_FAILURE,
    payload: null,
    error: error,
  };
};

export const addCartItemStart = () => {
  return {
    type: ADD_CART_ITEM_START,
  };
};

export const addCartItemSuccess = (cart) => {
  return {
    type: ADD_CART_ITEM_SUCCESS,
    payload: cart,
  };
};

export const addCartItemFailure = (error) => {
  return {
    type: ADD_CART_ITEM_FAILURE,
    payload: null,
    error: error,
  };
};

export const deleteCartStart = () => {
  return {
    type: DELETE_CART_START,
  };
};

export const deleteCartSuccess = (cartId) => {
  return {
    type: DELETE_CART_SUCCESS,
    payload: cartId,
    error: null,
  };
};

export const deleteCartFailure = (error) => {
  return {
    type: DELETE_CART_FAILURE,
    payload: null,
    error: error,
  };
};
