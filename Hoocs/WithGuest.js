/**
 * guest routes
 */
import React from 'react';

let isCSR = typeof window !== 'undefined';
export default C => {
  return class Guest extends React.Component {
    render() {
      return <C />;
    }
  };
};
