import axios from 'axios';
// Set config defaults when creating the instance
let isSSR = typeof window === 'undefined';
const instance = axios.create({
  baseURL: 'https://admin.almoosahospital.org/api/v1/' //'http://143.198.187.120/api/v1/'
});

//let token = jsCookie.get('token');
let token = !isSSR ? sessionStorage.getItem('token') : null;
// Alter defaults after instance has been created

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Global request dispatch to reducer
 */
export default Request = (url = '', type = 'GLOBAL_REQUEST', dispatch) => {
  /**
   *  trigger loader
   */
  dispatch({
    type: 'LOADING',
    payload: true
  });
  // trigger request
  return instance
    .get(url)
    .then(({ data }) => {
      //stop loading
      dispatch({
        type: 'LOADING',
        payload: false
      });
      //dispatch data
      return dispatch({
        type: type,
        payload: data
      });
    })
    .catch(error => {
      //stop loading
      dispatch({
        type: 'LOADING',
        payload: false
      });
    });
};
/**
 * get data without dispatching
 */
export const fetchData = (url = '') => {
  // trigger request
  return instance
    .get(url)
    .then(({ data }) => ({
      data,
      error: false
    }))
    .catch(error => ({
      error
    }));
};

/**
 *post data
 */
export const postData = (url = '', data) => {
  // trigger request
  return instance.post(url, data);
};
