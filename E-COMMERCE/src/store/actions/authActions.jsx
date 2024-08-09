import axios from 'axios';
import { setUser } from './clientActions';

const testUsers = {
  'customer@commerce.com': '123456',
  'store@commerce.com': '123456',
  'admin@commerce.com': '123456',
  'serifecevik93@gmail.com': '123456'
};


export const setUserFromToken = (token) => async (dispatch) => {
  try {
    // Token'ı işlemek ve kullanıcıyı ayarlamak için
    // token'ı doğrudan kullanın (JWT içeriğini doğrudan kullanabilirsiniz)
    // Örnek olarak, token'ın içinde user bilgilerini arıyoruz:
    const user = JSON.parse(atob(token.split('.')[1])); // Token içeriğini çözümleme
    dispatch(setUser(user));
  } catch (error) {
    console.error('Token decode edilemedi', error);
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  const { email, password } = credentials;

  if (testUsers[email] && testUsers[email] === password) {
    const user = { email, name: 'Test User' };
    const token = 'fake-jwt-token';

    dispatch(setUser(user));
    return { payload: { user, token } };
  }

  try {
    const response = await axios.post('/login', credentials);
    const { user, token } = response.data;

    dispatch(setUser(user));
    localStorage.setItem('token', token);
    return { payload: { user, token } };
  } catch (error) {
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: 'LOGOUT_USER',
  });
};