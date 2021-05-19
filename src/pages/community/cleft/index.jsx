import React from 'react';
import Hero from 'src/components/layout/Hero';
import {
  PostWithCenterImg,
  PostWithRightImg
} from 'src/components/reusableComponents/Post';

const Cleft = () => {
  return (
    <div className="cleft">
      <Hero bg="/images/community/cleft/Hero.png" />
      <PostWithRightImg
        title="CLEFT LIP INITIATIVE"
        paragraphs={[
          'deformity is one of the deformities that cause devastating psychological and health effects on the child and his family. The cleft lip surgery is not covered by insurance, and there is a long waiting list in government hospitals. The idea of ​​treating children with this deformity came to draw a smile of hope on their lips.'
        ]}
        theImg="/images/community/cleft/Mask Group 2.png"
        color="#55B047"
      />
      <PostWithCenterImg
        title="Cleft Up Video"
        paragraphs={[
          'A budget was allocated for the treatment of 30 children in cooperation with the Al-Bar charity Association. They nominated and evaluated cases from a financial point of view,',
          'while our Hospital evaluated them from a health perspective. So far, four children have been treated successfully.'
        ]}
        theImg="/images/community/cleft/Mask Group 1.png"
        color="#1E455C"
      />
    </div>
  );
};

export default Cleft;
