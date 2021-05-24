import React from 'react';
import Hero from 'src/components/layout/Hero';
import { i18n } from 'root/i18n';
import VisionValue from './VisionValue';
import OurTeam from './OurTaem';
import AcademicTabs from './AcademicTabs';
import Fellowship from './Fellowship';

const index = ({ ourTeamData }) => {
  const lang = i18n.language;
  return (
    <section className="academic-affairs">
      <Hero bg="/images/training/academic/academic-banner1.jpg">
        <div className="heroText">
          <p>
            <span>
              {(lang == 'en' && 'Academic Affairs') || 'الشؤون الأكادمية'}
            </span>
          </p>
        </div>
      </Hero>
      <div className="container">
        <div className="content-sections">
          <section className="intro-section">
            {lang === 'en' && (
              <p>
                With clear vision to “be a trusted world-class health system
                that promotes wellness and heals illness”, Almoosa Medical Group
                has emphasized the importance of establishing the Academic
                Affairs. The Academic Affairs Project was officially launched on
                November 2018. It was established to achieve standard goals such
                as teaching, training, scientific research and community
                service. The Academic Affairs assumes rapid changes at Almoosa
                Medical Group in order to build a closer connection to its
                environment and create higher flexibility to meet the community
                expectations.
                <br />
                <br />
                Six dimensions in Academic Affairs have been established to
                achieve its vision which are Research Center (RC), Life Support
                Training Center (LSTC) Continuing Professional Development
                (CPD), Training and Staff Development (TSD), Postgraduate
                Education (PE), and Medical Library (ML).
              </p>
            )}
            {lang === 'ar' && (
              <p>
                رؤية مستشفانا هى ان نكون "نظامًا صحيًا عالمي موثوقً ينشر الصحة
                ويحارب المرض" ، أولت مجموعة الموسى الطبية أهمية قصوي لإنشاء
                قسماً للشؤون الأكاديمية و تم إطلاق مشروع الشؤون الأكاديمية
                رسميًا في نوفمبر 2018. وقد تم إنشاؤه لتحقيق أهداف معيارية مثل
                التدريس والتدريب والبحث العلمي ، وخلق مرونة أعلى لتلبية توقعات
                المجتمع.
                <br />
                <br />
                تم وضع ستة أبعاد في الشؤون الأكاديمية لتحقيق رؤيتها وهي مركز
                الأبحاث (RC) ، ومركز التدريب على دعم الحياة (LSTC) ، والتعليم
                المهني المستمر (CPD) ، والتدريب وتطوير الموظفين (TSD) ، والتعليم
                العالي (PE) ، والمكتبة الطبية (ML)
              </p>
            )}
          </section>

          <VisionValue />

          <OurTeam ourTeamData={ourTeamData} />

          <AcademicTabs />

          <Fellowship />
        </div>
      </div>
    </section>
  );
};

export default index;
