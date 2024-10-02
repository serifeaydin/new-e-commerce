// store/actions/cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART,UPDATE_CART_ITEM_QUANTITY } from './actionTypes';

// Sepete ürün ekleme aksiyonu
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const updateCartItemQuantity = (id, quantityChange) => {
  return {
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { id, quantityChange },
  };
};