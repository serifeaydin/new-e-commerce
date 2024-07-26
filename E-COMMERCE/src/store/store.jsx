import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

// Reducerlarınızı import edin
import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;