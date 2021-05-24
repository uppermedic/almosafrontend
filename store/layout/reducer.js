import { TOGGLE_MEDIA_PLAYER } from './types';
const initialState = {
  media_player: {
    url: '',
    isOpen: false,
    title: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MEDIA_PLAYER:
      return {
        ...state,
        media_player: {
          url: action.url,
          isOpen: action.isOpen,
          title: action.title
        }
      };
    default:
      return state;
  }
};
export default reducer;
