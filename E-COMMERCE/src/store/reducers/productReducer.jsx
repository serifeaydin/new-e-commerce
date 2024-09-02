import { SET_FETCH_STATE, SET_PRODUCT_LIST, SET_TOTAL } from '../actions/actionTypes';

const initialState = {
    products: [],
    total: 0,
    fetchState: 'idle', // idle, loading, success, error
    limit: 10,
    offset: 0,
    filter: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload,
            };
        case SET_PRODUCT_LIST:
            return {
                ...state,
                products: action.payload,
            };
        case SET_TOTAL:
            return {
                ...state,
                total: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;