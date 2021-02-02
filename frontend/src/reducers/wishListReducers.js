export default (state = { wishList: [] }, { type, payload }) => {
  switch (type) {
    case "WISH_ADD_ITEM":
      const existItem = state.wishListItems.find(
        (x) => x.product === payload.product
      );
      if (existItem) {
        return {
          ...state,
          wishListItems: [...state.wishListItems],
        };
      }
      return { ...state, wishListItems: [...state.wishListItems, payload] };
    case "WISH_LIST_REMOVE_ITEM":
      return {
        ...state,
        wishListItems: state.wishListItems.filter((x) => x.product !== payload),
      };
    default:
      return state;
  }
};
