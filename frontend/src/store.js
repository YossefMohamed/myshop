import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import{userLoginReducer} from './reducers/userReducers'
import cartReducers from "./reducers/cartReducers";
const devTools = require("redux-devtools-extension");
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('cartItems')) : null
const initialState = { 
  cart : {
    cartItems : cartItemsFromStorage,
    userLogin : {userInfo : userInfoFromStorage}
  }
};

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart : cartReducers,
  userLogin : userLoginReducer
});

const store = createStore(
  reducer,
  initialState,

  devTools.composeWithDevTools(applyMiddleware(thunk))
);

export default store;
