// actions/addressActions.js

export const fetchAddresses = () => async (dispatch) => {
    const response = await axios.get('/user/address', {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: 'SET_ADDRESSES', payload: response.data });
  };
  
  export const addAddress = (formData) => async (dispatch) => {
    await axios.post('/user/address', formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(fetchAddresses()); // Yeni adres eklendikten sonra listeyi yenileyin
  };
  