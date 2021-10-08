import * as api from "../../adapters/index";
import {
  getProductDetailsStart,
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  getProductDetailsSuccess,
  getProductDetailsFailure,
} from "./productActions";

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const response = await api.getProducts();

    dispatch(getProductsSuccess(response.data.data));
  } catch (error) {
    dispatch(getProductsFailure(error.response.data.error));
  }
};

export const getProductDetails = async (dispatch, productId) => {
  dispatch(getProductDetailsStart());
  try {
    const response = await api.getProductDetails(productId);
    dispatch(getProductDetailsSuccess(response.data.data));
  } catch (error) {
    dispatch(getProductDetailsFailure(error.response.data.error));
  }
};
