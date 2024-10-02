// store/reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, UPDATE_CART_ITEM_QUANTITY } from "../actions/actionTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Ürünü sepete ekleme mantığı
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

      case REMOVE_FROM_CART:
        // Ürünü sepetten kaldırma
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
  

    case UPDATE_CART_ITEM:
      
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
      case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + action.payload.quantityChange };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
