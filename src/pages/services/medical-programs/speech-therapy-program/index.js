import React from 'react';
import PageHeading from 'src/components/Services/medical-programs/reusable-PagesHeading';
import SharedPost from 'src/components/Services/medical-programs/reusable-pagePost';
import { speechTherapyProgram } from 'src/constants/DB.js';
import Content from 'src/components/Services/medical-programs/speech-therapy/index.jsx';
const SpeechTherapy = () => {
  const { postData } = speechTherapyProgram;
  return (
    <div className="speech-therapy mb-50">
      <PageHeading title="Speech Therapy program" />
      <SharedPost data={postData} />
      <Content data={speechTherapyProgram} />
    </div>
  );
};

export default SpeechTherapy;
