import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  FETCH_PRODUCTS_URL,
} from "../actions/actionTypes";
import axios from "axios";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const fetchProducts =
  (gender, limit, offset, filter) => async (dispatch) => {
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

export const setCategory = (categoryId) => ({
  type: SET_CATEGORY,
  payload: categoryId,
});

export const setSort = (sortValue) => ({
  type: SET_SORT,
  payload: sortValue,
});