import Request from '../Request';
import { TOGGLE_MEDIA_PLAYER } from './types';

export const getHomeData = () => dispatch => Request('', 'asd', dispatch);

export const w = () => {
  //console.log('test func');
};

export const toggleMediaPlayer = (isOpen, url = '', title = '') => {
  return dispatch =>
    dispatch({
      type: TOGGLE_MEDIA_PLAYER,
      url,
      isOpen,
      title
    });
};
