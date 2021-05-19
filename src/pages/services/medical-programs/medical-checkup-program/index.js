import React from 'react';
import PageHeading from 'src/components/Services/medical-programs/reusable-PagesHeading';
import SharedPost from 'src/components/Services/medical-programs/reusable-pagePost';
import Content from 'src/components/Services/medical-programs/medical-checkup-program';
import { MedicalCheckupData } from 'src/constants/DB.js';

const MedicalCheckupProgram = () => {
  const { pagePost, aboutData } = MedicalCheckupData;

  return (
    <div className="medical-checkup-page">
      <PageHeading title="Medical Checkup Program" />
      <SharedPost data={pagePost} />
      <Content data={aboutData} />
    </div>
  );
};

export default MedicalCheckupProgram;
