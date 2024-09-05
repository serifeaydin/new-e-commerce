export const addToFavorites = (product) => ({
    type: "ADD_TO_FAVORITES",
    payload: product,
  });
  
  export const removeFromFavorites = (product) => ({
    type: "REMOVE_FROM_FAVORITES",
    payload: product,
  });
  
  export const toggleFavorite = (product) => (dispatch, getState) => {
    const { favorites } = getState().favorites;
    const isFavorite = favorites.some((item) => item.id === product.id);
  
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };