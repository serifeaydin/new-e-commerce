import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from './actionTypes';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true, // İstek başladığında yükleniyor durumuna geç
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false, // Yüklenme tamamlandı
        categories: action.payload, // Kategoriler store'a kaydedilir
      };
    case FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false, // Hata olduğunda yüklenme biter
        error: action.payload, // Hata mesajı kaydedilir
      };
    default:
      return state; // Diğer durumlarda state'i olduğu gibi döndür
  }
};