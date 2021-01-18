import { bindActionCreators } from "redux";

export default (state = { cartItems: [] }, { type, payload }) => {
  switch (type) {
    case "CART_ADD_ITEM":
      const existItem = state.cartItems.find(
        (x) => x.product === payload.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? payload : x
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, payload] };
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };
    default:
      return state;
  }
};