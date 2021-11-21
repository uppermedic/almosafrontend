import React from 'react';
import Hero from 'src/components/layout/Hero';
import { Container, Row, Col } from 'reactstrap';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { i18n, withTranslation } from 'root/i18n';
import VisionValue from './VisionValue';
import OurTeam from './OurTaem';
import AcademicTabs from './AcademicTabs';
import Fellowship from './Fellowship';
import { dataACademicTabs } from 'utils/datafile';

const index = ({ data, t }) => {
  const lang = i18n.language;
  return (
    <section className="academic-affairs">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataACademicTabs} index={2} />
          </Col>
          <Col sm="12" md="8">
            <h2 className="title">{t('menu:academic affairs')}</h2>

            <Container>
              <div className="content-sections">
                <section className="intro-section">
                  {lang === 'en' && (
                    <p>
                      With clear vision to “be a trusted world-class health
                      system that promotes wellness and heals illness”, Almoosa
                      Medical Group has emphasized the importance of
                      establishing the Academic Affairs. The Academic Affairs
                      Project was officially launched on November 2018. It was
                      established to achieve standard goals such as teaching,
                      training, scientific research and community service. The
                      Academic Affairs assumes rapid changes at Almoosa Medical
                      Group in order to build a closer connection to its
                      environment and create higher flexibility to meet the
                      community expectations.
                      <br />
                      <br />
                      Six dimensions in Academic Affairs have been established
                      to achieve its vision which are Research Center (RC), Life
                      Support Training Center (LSTC) Continuing Professional
                      Development (CPD), Training and Staff Development (TSD),
                      Postgraduate Education (PE), and Medical Library (ML).
                    </p>
                  )}
                  {lang === 'ar' && (
                    <p>
                      رؤية مستشفانا هى ان نكون "نظامًا صحيًا عالمي موثوقً ينشر
                      الصحة ويحارب المرض" ، أولت مجموعة الموسى الطبية أهمية قصوى
                      لإنشاء قسماً للشؤون الأكاديمية و تم إطلاق مشروع الشؤون
                      الأكاديمية رسميًا في نوفمبر 2018. وقد تم إنشاؤه لتحقيق
                      أهداف معيارية مثل التدريس والتدريب والبحث العلمي ، وخلق
                      مرونة أعلى لتلبية توقعات المجتمع.
                      <br />
                      <br />
                      تم وضع ستة أبعاد في الشؤون الأكاديمية لتحقيق رؤيتها وهي
                      مركز الأبحاث (RC) ، ومركز التدريب على دعم الحياة (LSTC) ،
                      والتعليم المهني المستمر (CPD) ، والتدريب وتطوير الموظفين
                      (TSD) ، والتعليم العالي (PE) ، والمكتبة الطبية (ML)
                    </p>
                  )}
                </section>

                <VisionValue />

                <OurTeam ourTeamData={data} />

                <AcademicTabs />

                <Fellowship />
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withTranslation('menu')(index);
