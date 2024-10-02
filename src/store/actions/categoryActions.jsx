import axios from 'axios';
import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from './actionTypes';

// Kategorileri API'den çek
export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST }); // İstek başladığında

  try {
    const response = await axios.get('/api/categories');
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: response.data, // Gelen veriyi başarıyla al
    });
  } catch (error) {
    dispatch({
      type: FETCH_CATEGORIES_FAIL,
      payload: error.message, // Hata mesajını ilet
    });
  }
};