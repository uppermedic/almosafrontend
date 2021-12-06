import { combineReducers } from 'redux';
import Globals from './Globals/reducer';
import Layout from './layout/reducer';
import NewsMedical from './NewsMedical/reducer';
import Media from './Media/reducer';

const rootReducer = combineReducers({
  Layout,
  Globals,
  NewsMedical,
  Media
});

export default rootReducer;
