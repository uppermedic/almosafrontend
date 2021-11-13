import React from 'react';

// This is a banner section that takes a custom background Image and custom-classname
// Features needed { Add news button at the right side }

const Hero = ({ bg, children, customClassNames }) => {
  return (
    <div
      className={`hero ${customClassNames || ''}`}
      style={{
        backgroundImage: `url(${String(bg).split(' ').join('-')})`
      }}
    >
      {children}
    </div>
  );
};

export default Hero;
