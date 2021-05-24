import {
  ACTION_TYPE,
  LOADING,
  TOGGLE_MEDIA_PLAYER,
  GET_ALL_CATEGORIES,
  GET_ALL_TAGS
} from './types';

const initialState = {
  loading: false,
  categories: [],
  tags: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case GET_ALL_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
