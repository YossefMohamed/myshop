import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import cartReducers from "./reducers/cartReducers";
const devTools = require("redux-devtools-extension");
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = { 
  cart : {
    cartItems : cartItemsFromStorage
  }
};

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart : cartReducers,
});

const store = createStore(
  reducer,
  initialState,

  devTools.composeWithDevTools(applyMiddleware(thunk))
);

export default store;
