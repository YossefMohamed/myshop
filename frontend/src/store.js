import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
const devTools = require("redux-devtools-extension");
const initialState = {};

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
});

const store = createStore(
  reducer,
  initialState,

  devTools.composeWithDevTools(applyMiddleware(thunk))
);

export default store;
