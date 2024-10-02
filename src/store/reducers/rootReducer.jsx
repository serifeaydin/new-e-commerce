import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer"; 
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";
import clientReducer from "./clientReducer";


const rootReducer = combineReducers({
  client:clientReducer,
  productList: productReducer, 
  cart: cartReducer,
  favoritesReducer: favoritesReducer,
  productDetail: productDetailReducer, 
});

export default rootReducer;