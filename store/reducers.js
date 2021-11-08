import { combineReducers } from 'redux';
import Globals from './Globals/reducer';
import Layout from './layout/reducer';
import News from './News/reducer';
import Media from './Media/reducer';

const rootReducer = combineReducers({
  Layout,
  Globals,
  News,
  Media
});

export default rootReducer;
