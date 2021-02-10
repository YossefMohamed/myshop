import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  messageUpdate,
} from "./reducers/userReducers";
import cartReducers from "./reducers/cartReducers";
import wishListReducers from "./reducers/wishListReducers";
import {
  getAllOrderReducer,
  orderCreateReducer,
} from "./reducers/orderReducers";
const devTools = require("redux-devtools-extension");
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const wishListFromStorage = localStorage.getItem("wishListItems")
  ? JSON.parse(localStorage.getItem("wishListItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  wishList: { wishListItems: wishListFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
  },
  orderCreate: {},
  userLogin: { userInfo: userInfoFromStorage },
  messageUpdate: { message: "", error: false },
  allOrder: { order: [] },
};

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart: cartReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  wishList: wishListReducers,
  messageUpdate,
  orderCreate: orderCreateReducer,
  allOrder: getAllOrderReducer,
  // orderDetails: orderDetailsReducer,
});

const store = createStore(
  reducer,
  initialState,

  devTools.composeWithDevTools(applyMiddleware(thunk))
);

export default store;
