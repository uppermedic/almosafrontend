import React from 'react';
import Content from 'src/components/Services/medical-centers/cardiology-center';
import { cardiologyCenter } from 'src/constants/DB.js';

const CardiologyCenter = () => {
  return (
    <div className="medical-center-subpage mb-50">
      <Content data={cardiologyCenter} />
    </div>
  );
};

export default CardiologyCenter;
