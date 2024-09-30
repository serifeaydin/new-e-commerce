import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  FETCH_PRODUCTS_URL,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../actions/actionTypes";



import axios from "axios";

// Set categories action
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

// Set product list action
export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

// Set total products action
export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

// Set fetch state action (fetching, fetched, failed, etc.)
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

// Set limit (pagination)
export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

// Set offset (pagination)
export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

// Set filter (category, gender, etc.)
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

// Fetch products with filters, limit, offset
export const fetchProducts = (gender, limit, offset, filter) => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));

  try {
    const response = await axios.get(FETCH_PRODUCTS_URL, {
      params: { gender, limit, offset, filter },
    });

    dispatch(setProductList(response.data.products));
    dispatch(setTotal(response.data.total));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
    console.error("Failed to fetch products:", error);
  }
};

// Set category action
export const setCategory = (category_id) => ({
  type: SET_CATEGORY,
  payload: category_id,
});

// Set sort option action
export const setSort = (sortValue) => ({
  type: SET_SORT,
  payload: sortValue,
});

export const fetchProductDetail = (productId) => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCT_REQUEST" });
  try {
    const response = await axios.get(`/products/${productId}`);
    dispatch({
      type: "FETCH_PRODUCT_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_PRODUCT_FAIL",
      payload: error.message,
    });
  }
};