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
        return { ...state, user: action.payload };
      case 'SET_ROLES':
        return { ...state, roles: action.payload };
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      case 'SET_LANGUAGE':
        return { ...state, language: action.payload };
      default:
        return state;
    }
  };
  export const fetchRolesIfNeeded = () => (dispatch, getState) => {
    const { client } = getState();
    if (!client.roles.length) {
      // API çağrısını simüle edelim
      setTimeout(() => {
        const roles = ['admin', 'user'];
        dispatch(setRoles(roles));
      }, 1000);
    }
  };
  export default clientReducer;