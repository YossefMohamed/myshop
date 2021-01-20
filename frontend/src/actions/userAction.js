import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/users",
      { email, password },
      config
    );
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
    console.log(data);
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
