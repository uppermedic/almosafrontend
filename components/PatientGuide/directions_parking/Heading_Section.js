import React from 'react';

const Heading_Section = ({ title, subHeading = false }) => {
  return (
    <div className="heading-card">
      {subHeading ? <h3>{title}</h3> : <h2>{title}</h2>}
    </div>
  );
};

export default Heading_Section;
