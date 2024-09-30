// store/actions/cartActions.js
import { ADD_TO_CART } from './actionTypes';

// Sepete ürün ekleme aksiyonu
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
