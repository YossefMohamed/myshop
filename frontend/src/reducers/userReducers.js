export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true, ...state };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload, userInfo: null };
    case "USER_LOGOUT":
      return { userInfo: null };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { loading: true, ...state };
    case "USER_REGISTER_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_REGISTER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const messageUpdate = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_DONE":
      // console.log("OKAAAAAAAAAAAAAAS")
      return { message: "Update Done !", error: false };
    case "UPDATE_RESET":
      return { message: "", error: false };
    case "UPDATE_ERROR":
      return { message: action.payload, error: true };
    default:
      return state;
  }
};
