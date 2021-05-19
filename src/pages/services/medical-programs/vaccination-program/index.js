import React from 'react';
import PageHeading from 'src/components/Services/medical-programs/reusable-PagesHeading';
import SharedPost from 'src/components/Services/medical-programs/reusable-pagePost';
import { VaccinationProgramData } from 'src/constants/DB.js';
import Content from 'src/components/Services/medical-programs/vacination-program/index.jsx';

const VaccinationProgram = () => {
  const { vaccinationPostData, gridData } = VaccinationProgramData;

  return (
    <div className="vaccination-program mb-50">
      <PageHeading title="Vaccimation Program" />
      <SharedPost
        cutomImgStyle={{ height: '200px', width: '100%' }}
        data={vaccinationPostData}
      />

      <div className="container">
        <p className="small-title">Available vaccination include: </p>
      </div>

      <Content data={gridData} />
    </div>
  );
};
//title, children, titleBg

export default VaccinationProgram;
