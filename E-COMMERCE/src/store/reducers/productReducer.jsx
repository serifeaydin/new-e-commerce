import {
    SET_CATEGORIES,
    SET_PRODUCT_LIST,
    SET_TOTAL,
    SET_FETCH_STATE,
    SET_LIMIT,
    SET_OFFSET,
    SET_FILTER,
  } from "../actions/actionTypes";
  
  const FetchStates = {
    NOT_FETCHED: "NOT_FETCHED",
    FETCHING: "FETCHING",
    FETCHED: "FETCHED",
    FAILED: "FAILED",
  };
  
  const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CATEGORIES:
        return { ...state, categories: action.payload };
      case SET_PRODUCT_LIST:
        return { ...state, productList: action.payload };
      case SET_TOTAL:
        return { ...state, total: action.payload };
      case SET_FETCH_STATE:
        if (Object.values(FetchStates).includes(action.payload)) {
          return {
            ...state,
            fetchState: action.payload,
          };
        }
      case SET_LIMIT:
        return { ...state, limit: action.payload };
      case SET_OFFSET:
        return { ...state, offset: action.payload };
      case SET_FILTER:
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;