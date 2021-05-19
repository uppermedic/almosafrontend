/**
 * guest routes
 */
import React from 'react';

let isCSR = typeof window !== 'undefined';
export default C => {
  return class Guest extends React.Component {
    componentDidMount() {
      // if(isCSR && !!sessionStorage.getItem('token')){
      //     sessionStorage.clear();
      //     window.location.href = '/dashboard'
      // }
    }
    render() {
      return <C />;
    }
  };
};
