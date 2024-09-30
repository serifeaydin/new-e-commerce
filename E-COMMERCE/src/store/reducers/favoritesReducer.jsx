

const initialState = {
    favorites: [], // Favori ürünler burada tutulacak
  };
  
  const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_FAVORITES":
        // Ürünün mevcut favoriler arasında olup olmadığını kontrol et
        if (state.favorites.some((item) => item.id === action.payload.id)) {
          return state; // Eğer ürün zaten favorilerde varsa, değişiklik yapma
        }
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
  
      case "REMOVE_FROM_FAVORITES":
        return {
          ...state,
          favorites: state.favorites.filter((item) => item.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
  
  export default favoritesReducer;