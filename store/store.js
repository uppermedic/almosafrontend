import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

//export default store;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export default store;
