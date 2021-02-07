import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password,
    });
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const update = (
  user,
  email,
  name,
  password,
  confirmPassword,
  oldPassword
) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });
    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };

    var { data } = await axios.patch(
      "http://localhost:5000/api/users/update",
      {
        email: email,
        name: name,
        password,
        confirmPassword,
        oldPassword,
      },
      config
    );
    if (data.status !== "ok") {
      throw new Error(data.message);
    }
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
    dispatch({
      type: "UPDATE_DONE",
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "UPDATE_ERROR",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (
  email,
  password,
  name,
  buildingNumber,
  street,
  city
) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password, buildingNumber, street, city },
      config
    );

    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: data,
    });

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("wishListItems");
  dispatch({ type: "USER_LOGOUT" });
  dispatch({ type: "UPDATE_RESET" });
};

export const addImage = (image) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",

        authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`/api/users/image`, image, config);
  } catch (error) {
    dispatch({
      type: "UPDATE_ERROR",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
