import { GET_ALL_CATEGORIES, GET_ALL_TAGS } from './types';

import Request from '../Request';

//
export const getTags = url => dispatch => {
  return Request(url, GET_ALL_TAGS, dispatch);
};
//
export const getCategories = url => dispatch => {
  return Request(url, GET_ALL_CATEGORIES, dispatch);
};
