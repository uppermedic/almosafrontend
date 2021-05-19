import React from 'react';
import PageHeading from 'src/components/Services/medical-programs/reusable-PagesHeading';
import SharedPost from 'src/components/Services/medical-programs/reusable-pagePost';
import About from 'src/components/Services/medical-programs/hair-transplant/about';
import { hairTransplantData } from 'src/constants/DB.js';

const HairTranplant = () => {
  const { aboutData, hairPostData } = hairTransplantData;
  return (
    <div className="hair-transplant">
      <PageHeading title="Hair Transplant" />
      <SharedPost data={hairPostData} />
      <About data={aboutData} />
    </div>
  );
};

export default HairTranplant;
