const initialState = {
    user: null,
    token: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
          token: action.token, // Token'ı state'e ekleyin
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          user: null,
          token: null,
        };
      default:
        return state;
    }
  }