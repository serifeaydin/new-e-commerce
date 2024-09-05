import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk'; // `default` export'u kullanarak
import logger from 'redux-logger';

import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import globalReducer from './reducers/globalReducer';
import favoritesReducer from './reducers/favoritesReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer, // `product` olarak adlandırmalısınız
  shoppingCart: shoppingCartReducer,
  categories: globalReducer,
  favorites: favoritesReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;