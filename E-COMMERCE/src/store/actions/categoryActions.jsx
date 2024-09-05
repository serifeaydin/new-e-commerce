import axios from 'axios';

// Kategorileri fetch eden action
export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: 'FETCH_CATEGORIES_REQUEST' });
  try {
    const response = await axios.get('/categories');
    dispatch({
      type: 'FETCH_CATEGORIES_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_CATEGORIES_FAIL',
      payload: error.message,
    });
  }
};