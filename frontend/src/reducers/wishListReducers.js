export default (state = { wishListItems: [] }, { type, payload }) => {
  switch (type) {
    case "WISH_ADD_ITEM":
      // console.log(type, payload);

      const existItem = state.wishListItems.find((x) => {
        // console.log(x, payload);
        return x._id === payload._id;
      });
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
        wishListItems: state.wishListItems.filter((x) => x._id !== payload),
      };
    default:
      return state;
  }
};
