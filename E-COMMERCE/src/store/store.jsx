import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk'; // `default` export'u kullanarak
import logger from 'redux-logger';

import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import productDetailReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import globalReducer from './reducers/globalReducer';
import favoritesReducer from './reducers/favoritesReducer';
import cartReducer from './reducers/cartReducer';


const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer, 
  shoppingCart: shoppingCartReducer,
  categories: globalReducer,
  favorites: favoritesReducer,
  productDetail:productDetailReducer,
  cart:cartReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;