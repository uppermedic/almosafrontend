import {ACTION_TYPE} from './types';
const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE:
            return {
                ...state
            }
            break;

        default:
        return state
            break;
    }
}
