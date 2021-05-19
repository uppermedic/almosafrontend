import React from 'react';

const PageHeading = ({ title, customBg }) => {
  return (
    <div
      className="page-heading"
      style={customBg && { backgroundColor: customBg }}
    >
      <div className="container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageHeading;
