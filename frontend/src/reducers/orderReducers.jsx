export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_CREATE_SUCCESS":
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case "ORDER_CREATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "ORDER_CREATE_RESET":
      return {};
    default:
      return state;
  }
};
export const getAllOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDERS_ALL_REQUEST":
      return {
        loading: true,
      };
    case "ORDERS_ALL_SUCCESS":
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case "ORDERS_ALL_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
