import axios from 'axios';
import { setUser } from './clientActions';

// Test kullanıcı bilgilerini buraya ekleyebilirsiniz
const testUsers = {
  'customer@commerce.com': '123456',
  'store@commerce.com': '123456',
  'admin@commerce.com': '123456'
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const { email, password } = credentials;

    // Test kullanıcı bilgilerini kontrol et
    if (testUsers[email] && testUsers[email] === password) {
      // Başarıyla giriş
      const user = { email, name: 'Test User' }; // Örnek kullanıcı verisi
      const token = 'fake-jwt-token'; // Örnek token

      // Kullanıcıyı clientReducer'a kaydediyoruz
      dispatch(setUser(user));

      // Başarılı sonuç döndür
      return { payload: { user, token } };
    } else {
      // Giriş başarısız
      throw new Error('Invalid email or password');
    }

    // Gerçek API çağrısı
    try {
      const response = await axios.post('/login', credentials);
      const { user, token } = response.data;

      // Kullanıcıyı clientReducer'a kaydediyoruz
      dispatch(setUser(user));

      // Başarılı sonuç döndür
      return response.data;
    } catch (error) {
      // Hata durumunda hata fırlat
      throw error;
    }
  };
};