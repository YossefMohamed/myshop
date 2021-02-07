import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios({
      method: "get",
      url: "http://localhost:5000/api/products",
    });
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    const { data } = await axios({
      method: "get",
      url: `http://localhost:5000/api/products/${id}`,
    });
    if (!data.brand) throw new Error("Product Not Found !");
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// (
//   user.user,
//   product._id,
//   reviewText,
//   rating
// )

export const addReviewToProduct = (
  user,
  productId,
  userReview,
  rating
) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.patch(
      `http://localhost:5000/api/products/review/${productId}`,
      { userReview: userReview, rating: rating },
      config
    );
    dispatch(listProductDetails(productId));
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
