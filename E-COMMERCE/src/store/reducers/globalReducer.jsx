const initialState = {
    categories: [],
    loading: false,
    error: null,
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload,
                loading: false,
            };
        case 'FETCH_CATEGORIES_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
};

export default globalReducer;