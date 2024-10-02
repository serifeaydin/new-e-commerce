import axios from 'axios';

export const fetchCategories = () => async (dispatch) => {
  try {
    // API endpoint'ini doğru URL ile güncelleyin
    const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");

    console.log(response.data); // Gelen veriyi kontrol edin
    
    dispatch({
      type: "FETCH_CATEGORIES_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    dispatch({
      type: "FETCH_CATEGORIES_FAILURE",
      payload: error,
    });
  }
};