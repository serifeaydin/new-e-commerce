import axios from 'axios';

const testUsers = {
  'customer@commerce.com': '123456',
  'store@commerce.com': '123456',
  'admin@commerce.com': '123456',
  'serifecevik93@gmail.com': '123456'
};

// Kullanıcıyı ayarlamak için setUserFromToken fonksiyonu
export const setUserFromToken = (token) => async (dispatch) => {
  try {
    const user = JSON.parse(atob(token.split('.')[1])); // Token içeriğini çözümleme
    dispatch(setUser(user));
    dispatch({
      type: 'SET_AUTHENTICATED',
      payload: true,
    });
  } catch (error) {
    console.error('Token decode edilemedi', error);
  }
};

// Kullanıcı giriş fonksiyonu
export const loginUser = (credentials) => async (dispatch) => {
  const { email, password } = credentials;

  // Sahte kullanıcı kontrolü
  if (testUsers[email] && testUsers[email] === password) {
    const user = { email, name: 'Test User' };
    const token = 'fake-jwt-token';

    // Kullanıcıyı ayarla ve oturum durumunu güncelle
    dispatch(setUser(user));
    dispatch({
      type: 'SET_AUTHENTICATED',
      payload: true,
    });
    localStorage.setItem('token', token); // Token'ı localStorage’a kaydet
    return { payload: { user, token } };
  }

  // Gerçek API isteği
  try {
    const response = await axios.post('/login', credentials);
    const { user, token } = response.data;

    dispatch(setUser(user));
    dispatch({
      type: 'SET_AUTHENTICATED',
      payload: true,
    });
    localStorage.setItem('token', token);
    return { payload: { user, token } };
  } catch (error) {
    throw error;
  }
};

// Çıkış yapma fonksiyonu
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: 'LOGOUT_USER',
  });
  dispatch({
    type: 'SET_AUTHENTICATED',
    payload: false,
  });
};

// Kullanıcı ayarlama
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user
});

// Diğer özellikleri ayarlamak için fonksiyonlar
export const setRoles = (roles) => ({
  type: 'SET_ROLES',
  payload: roles
});

export const setTheme = (theme) => ({
  type: 'SET_THEME',
  payload: theme
});

export const setLanguage = (language) => ({
  type: 'SET_LANGUAGE',
  payload: language
});
