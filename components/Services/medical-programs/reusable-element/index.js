import React from 'react';

const BlockWithTitle = ({ title, children, titleBg, titleColor }) => {
  return (
    <div className="block-content">
      <div className="item">
        <h2 style={{ backgroundColor: titleBg, color: titleColor }}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default BlockWithTitle;
