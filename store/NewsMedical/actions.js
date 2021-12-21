import Request from '../Request';
import { serialize } from 'src/utils/helpers';
import { GET_ALL_POSTS } from './types';

//
export const getAllPosts = (url, query) => dispatch => {
  if (query) {
    return Request(`${url}?${query}`, GET_ALL_POSTS, dispatch);
  }
  return Request(url, GET_ALL_POSTS, dispatch);
};
