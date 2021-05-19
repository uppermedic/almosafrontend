import React from 'react';
import PageHeading from 'src/components/Services/medical-programs/reusable-PagesHeading';
import SharedPost from 'src/components/Services/medical-programs/reusable-pagePost';
import Content from 'src/components/Services/medical-programs/maternity-program';
import { maternityProgram } from 'src/constants/DB.js';

const MaternityProgram = () => {
  const { maternityPostData, aboutData } = maternityProgram;

  return (
    <div className="maternity-program mb-50">
      <PageHeading title="Maternity Program" />
      <SharedPost data={maternityPostData} />
      <Content data={aboutData} />
    </div>
  );
};

export default MaternityProgram;
