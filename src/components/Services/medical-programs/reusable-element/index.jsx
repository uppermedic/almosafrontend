import React from 'react';

const BlockWithTitle = ({ title, children, titleBg }) => {
  return (
    <div className="block-content">
      <div className="item">
        <h2 style={titleBg && { backgroundColor: titleBg }}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default BlockWithTitle;
