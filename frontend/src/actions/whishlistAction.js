import axios from "axios";

export const addToWishList = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    dispatch({
      type: "WISH_ADD_ITEM",
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
      },
    });
    localStorage.setItem(
      "wishListItems",
      JSON.stringify(getState().wishList.wishListItems)
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishList = (id) => (dispatch, getState) => {
  dispatch({
    type: "WISH_LIST_REMOVE_ITEM",
    payload: id,
  });
  localStorage.setItem(
    "wishListItems",
    JSON.stringify(getState().wishList.wishListItems)
  );
};
