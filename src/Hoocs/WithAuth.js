/**
 * auth users routes
 */
import dynamic from 'next/dynamic';
import React from 'react';
let isCSR = typeof window !== 'undefined';
export default C => {
  return class User extends React.Component {
    componentDidMount() {
      // if(isCSR && !sessionStorage.getItem('token')){
      //     sessionStorage.clear();
      //     window.location.href = '/'
      // }
    }
    render() {
      return (
        <div id="wrapper">
          <C />
        </div>
      );
    }
  };
};
