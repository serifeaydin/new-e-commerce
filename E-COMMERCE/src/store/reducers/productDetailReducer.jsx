
const initialState = {
    product: null,
    loading: false,
    error: null,
  };
  
  const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCT_REQUEST":
        return { ...state, loading: true, error: null };
      case "FETCH_PRODUCT_SUCCESS":
        return { ...state, loading: false, product: action.payload };
      case "FETCH_PRODUCT_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default productDetailReducer;
  