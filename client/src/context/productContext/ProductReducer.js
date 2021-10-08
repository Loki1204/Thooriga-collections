import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_START,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "../../constants/actionTypes";
const ProductReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        products: [],
        isFetchingProduct: true,
        productError: null,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        isFetchingProduct: false,
        productError: null,
      };

    case GET_PRODUCTS_FAILURE:
      return {
        products: [],
        isFetchingProduct: false,
        productError: action.error,
      };

    case GET_PRODUCT_DETAILS_START:
      return {
        products: [],
        isFetchingProduct: true,
        productError: null,
      };

    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        products: action.payload,
        isFetchingProduct: false,
        productError: null,
      };

    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        products: [],
        isFetchingProduct: false,
        productError: action.error,
      };

    default:
      return { ...state };
  }
};

export default ProductReducer;
