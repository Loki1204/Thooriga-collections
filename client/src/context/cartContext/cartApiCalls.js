import * as api from "../../adapters/index";

import {
  addCartItemFailure,
  addCartItemStart,
  addCartItemSuccess,
  deleteCartFailure,
  deleteCartStart,
  deleteCartSuccess,
  getUserCartFailure,
  getUserCartStart,
  getUserCartSuccess,
} from "./cartActions";

export const getUserCart = async (dispatch, userId) => {
  dispatch(getUserCartStart());
  try {
    const response = await api.getUserCart(userId);
    dispatch(getUserCartSuccess(response.data.data));
  } catch (error) {
    dispatch(getUserCartFailure(error.response.data.error));
  }
};

export const addCartItem = async (dispatch, newItemToCart) => {
  dispatch(addCartItemStart());
  try {
    const response = await api.addCartItem(newItemToCart);
    dispatch(addCartItemSuccess(response.data.data));
  } catch (error) {
    dispatch(addCartItemFailure(error.response.data.error));
  }
};

export const removeFromCart = async (dispatch, cartId) => {
  dispatch(deleteCartStart());
  try {
    await api.removeFromCart(cartId);
    dispatch(deleteCartSuccess(cartId));
  } catch (error) {
    dispatch(deleteCartFailure(error.response.data.error));
  }
};
