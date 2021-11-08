/**
 * auth users routes
 */
import dynamic from 'next/dynamic';
import React from 'react';
let isCSR = typeof window !== 'undefined';
export default C => {
  return class User extends React.Component {
    render() {
      return (
        <div id="wrapper">
          <C />
        </div>
      );
    }
  };
};
