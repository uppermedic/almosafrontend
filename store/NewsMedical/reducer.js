import { GET_ALL_POSTS } from './types';
const initialState = {
  posts: { data: [] }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
