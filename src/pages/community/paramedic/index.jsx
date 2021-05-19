import React from 'react';
import Hero from 'src/components/layout/Hero';
import { PostWithCenterImg } from 'src/components/reusableComponents/Post';
import SmallGallery from 'src/components/SmallGallery';

const Paramedic = () => {
  return (
    <section className="paramedic">
      <Hero bg="/images/community/paramedic/Hero.png" />
      <PostWithCenterImg
        title="PARAMEDIC IN EACH SCHOOL"
        subTitle={[
          'Sponsored by Life Support Center of Almoosa Specialist Hospital in cooperation with the Department of Education'
        ]}
        theImg="/images/community/paramedic/Image 18.png"
        color="#1E455C"
      />
      <PostWithCenterImg
        title="Event Details:"
        paragraphs={[
          'Because accidents happen without prior warning and our students’ safety is our responsibility and based on ASH’s social responsibility,',
          'we launched a paramedic in every school initiative to qualify teachers and train them on CPR and first aid to save students’ case of emergency.',
          'Hundreds of teachers registered and received training on how to perform first aid and pulmonary resuscitation.',
          'They obtained a certificate proving their full ability to perform first aid and pulmonary resuscitation in emergencies.'
        ]}
        color="#54AF46"
      />
      <SmallGallery
        imgs={[
          '/images/community/paramedic/Image 16.png',
          '/images/community/paramedic/Image 17.png'
        ]}
        bgColor="#EFEAE0"
      />
      <PostWithCenterImg
        title="PARAMEDIC IN EACH SCHOOL Video"
        theImg="/images/community/paramedic/Mask Group 1.png"
        color="#1E455C"
      />
    </section>
  );
};

export default Paramedic;
