import React from 'react';

export default function Loader({ loading, children }) {
  return <>{loading ? <h2>loading</h2> : children}</>;
}
