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

const CartReducer = (state, action) => {
  // const user = JSON.parse(localStorage.getItem("Profile"));
  // console.log(state.cart)
  // console.log(state.cart.filter((data) => data.userId === user.result._id));

  switch (action.type) {
    case GET_USER_CART_START:
      return {
        cart: [],
        isFetchingCart: true,
        cartError: null,
      };

    case GET_USER_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isFetchingCart: false,
        cartError: null,
      };

    case GET_USER_CART_FAILURE:
      return {
        cart: [],
        isFetchingCart: false,
        cartError: action.error,
      };

    case ADD_CART_ITEM_START:
      return {
        ...state,
        isFetchingCart: true,
        cartError: null,
      };

    case ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        isFetchingCart: false,
        cartError: null,
      };

    case ADD_CART_ITEM_FAILURE:
      return {
        ...state,
        isFetchingCart: false,
        cartError: action.error,
      };

    case DELETE_CART_START:
      return {
        ...state,
        isFetchingCart: true,
        cartError: null,
      };

    case DELETE_CART_SUCCESS:
      return {
        ...state,
        cart: state.cart.filter((data) => data._id !== action.payload),
        isFetchingCart: false,
        cartError: null,
      };

    case DELETE_CART_FAILURE:
      return {
        ...state,
        isFetchingCart: false,
        cartError: action.error,
      };

    default:
      return { ...state };
  }
};

export default CartReducer;
