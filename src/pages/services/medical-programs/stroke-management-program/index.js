import React from 'react';
import PageHeading from 'src/components/Services/medical-programs/reusable-PagesHeading';
import SharedPost from 'src/components/Services/medical-programs/reusable-pagePost';
import Content from 'src/components/Services/medical-programs/stroke-management-program';
import { strokeManagementData } from 'src/constants/DB.js';

const StrokManagementProgram = () => {
  const { strokePostData, secondPost, aboutData } = strokeManagementData;
  return (
    <div className="stroke-management">
      <PageHeading title="Stroke Management Program" />
      <SharedPost data={strokePostData} />
      <Content data={[secondPost, aboutData]} />
    </div>
  );
};

export default StrokManagementProgram;
