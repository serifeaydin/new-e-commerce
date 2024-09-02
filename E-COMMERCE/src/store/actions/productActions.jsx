import { SET_FETCH_STATE, SET_PRODUCT_LIST, SET_TOTAL } from './actionTypes';
import axios from 'axios';

export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});

export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(setFetchState('loading'));

  try {
      const { limit, offset, filter } = getState().productReducer;
      const response = await axios.get('/products', {
          params: { limit, offset, filter },
      });
      const { total, products } = response.data;

      dispatch(setProductList(products));
      dispatch(setTotal(total));
      dispatch(setFetchState('success'));
  } catch (error) {
      dispatch(setFetchState('error'));
  }
};