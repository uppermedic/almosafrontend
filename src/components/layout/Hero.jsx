import React from 'react';

// This is a banner section that takes a custom background Image and custom-classname
// Features needed { Add blog button at the right side }

const Hero = ({ bg, children, customClassNames }) => {
  return (
    <div
      className={`hero ${customClassNames}`}
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      {children}
    </div>
  );
};

export default Hero;
