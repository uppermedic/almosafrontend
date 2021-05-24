import { ACTION_TYPE } from './types';
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return {
        ...state
      };

    default:
      return state;
  }
};
export default reducer;
