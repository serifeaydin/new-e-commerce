import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer"; 
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  productList: productReducer, 
  cart: cartReducer,
  favoritesReducer: favoritesReducer,
  productDetail: productDetailReducer, 
});

export default rootReducer;