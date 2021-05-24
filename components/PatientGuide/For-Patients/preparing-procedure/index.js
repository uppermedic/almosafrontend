import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import { data } from './data';

const Content = ({ t }) => {
  let { language } = i18n;

  return (
    <div className="content">
      <div className="overlay"></div>
      <div className="container">
        <div className="title">
          <h2>{t('patient_guide:Preparing for a Procedure')}</h2>
        </div>
        <div className="items">
          <Container>
            <Row sx="1" xl="2">
              <Col xl="8">
                {language === 'ar' && (
                  <p className="brife">
                    بمجرد أن تقرر أنت وطبيبك أن الجراحة ضرورية ، يحق لك معرفة ما
                    يمكن توقعه بعد الجراحة وأن تكون جزءًا من خطة العلاج.
                    <br />
                    <br />
                    يعد الإعداد الذهني والبدني للجراحة خطوة ضرورية نحو تحقيق
                    نتائج ناجحة. سيساعدك فهم الجراحة ومعرفة دورك على التعافي
                    بسرعة أكبر وتجنب العديد من المشكلات.
                  </p>
                )}
                {language === 'en' && (
                  <p className="brife">
                    Once you and your doctor decide that surgery is necessary,
                    you have the right to know what to expect after the surgery
                    and be part of the treatment plan.
                    <br />
                    <br />
                    Mental and physical preparation for surgery is a necessary
                    step towards successful outcomes. Understanding the surgery
                    and knowing your role will help you recover more quickly and
                    avoid many problems.
                  </p>
                )}
                {language === 'ar' && (
                  <>
                    <h6 className="items-title">{data['ar']?.title}</h6>
                    <div
                      className="items-content"
                      dangerouslySetInnerHTML={{
                        __html: data['ar']?.content
                      }}
                    ></div>
                  </>
                )}
                {language === 'en' && (
                  <>
                    <h6 className="items-title">{data['en']?.title}</h6>
                    <div
                      className="items-content"
                      dangerouslySetInnerHTML={{
                        __html: data['en']?.content
                      }}
                    ></div>
                  </>
                )}
              </Col>
              <Col xl="4" className="side-img">
                <div className="img">
                  <img
                    src="/images/patient-guide/for_patient/prepare for procedure.jpg"
                    alt="side img"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['menu', 'patient_guide'])(Content);
