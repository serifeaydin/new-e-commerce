const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: '',
  language: ''
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload , isAuthenticated: true};
     
    case 'SET_ROLES':
      return { ...state, roles: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
      case "LOGOUT_USER":
          return { ...state, user: null, isAuthenticated: false}; // Kullanıcı durumunu null yap
    default:
      return state;
  }
};

export default clientReducer;