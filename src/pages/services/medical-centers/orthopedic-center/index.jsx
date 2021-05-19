import React from 'react';
import Content from 'src/components/Services/medical-centers/orthopedic-center/index.jsx';
import { orthopedicCenterData } from 'src/constants/DB.js';

const OrthopedicCenter = () => {
  return (
    <div className="medical-center-subpage mb-50">
      <Content data={orthopedicCenterData} />
    </div>
  );
};

export default OrthopedicCenter;
