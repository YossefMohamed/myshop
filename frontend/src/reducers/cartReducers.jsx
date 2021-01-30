export default (state = { cartItems: [] }, { type, payload }) => {
  switch (type) {
    case "CART_ADD_ITEM":
      const existItem = state.cartItems.find(
        (x) => x.product === payload.product
      );
      console.log(payload.qty);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.product === existItem.product ? payload : el
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
