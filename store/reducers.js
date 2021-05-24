import { combineReducers } from 'redux';
import Globals from './Globals/reducer';
import Layout from './layout/reducer';
import Blog from './Blog/reducer';
import Media from './Media/reducer';

const rootReducer = combineReducers({
  Layout,
  Globals,
  Blog,
  Media
});

export default rootReducer;
