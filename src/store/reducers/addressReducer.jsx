
import { SET_ADDRESSES, ADD_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS } from "../actions/actionTypes";

const initialState = {
    addresses: [
      {
        id: 'sample1',
        title: 'Ev Adresi',
        details: 'İstanbul, Kadıköy, Moda Mahallesi, 10. Sokak, No:5',
      },
      {
        id: 'sample2',
        title: 'İş Adresi',
        details: 'İstanbul, Kadıköy, Moda Mahallesi, 10. Sokak, No:5',
      }
    ],
};

// Address Reducer
const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
      };
      
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };
      
    case UPDATE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };
      
    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };
      
    default:
      return state;
  }
};

export default addressReducer;
