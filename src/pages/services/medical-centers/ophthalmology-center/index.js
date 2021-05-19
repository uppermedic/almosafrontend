import React from 'react';
import Content from 'src/components/Services/medical-centers/ophthalmology-center';
import { ophthalmologyCenter } from 'src/constants/DB.js';

const OphthalmologyCenter = () => {
  return (
    <div className="medical-center-subpage mb-50">
      <Content data={ophthalmologyCenter} />
    </div>
  );
};

export default OphthalmologyCenter;
