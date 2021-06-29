import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;

  return (
    <div className="content">
      {/* <Container> */}
      <div className="title">
        <h2>{t('patient_guide:waiting_areas')}</h2>
      </div>
      <Row xs="1" xl="2">
        <Col>
          <div className="left-col">
            <div className="desc">
              <p>
                {language === 'ar' &&
                  `نحن نهتم بمرضانا وعائلاتهم. لذلك. منطقة انتظار مستشفى الموسى التخصصي انتظار مساحة واسعة، مريحة، وكبيرة بما يكفي لاستيعاب الزوار والمرضى `}
                {language === 'en' &&
                  `We care about our patients and their families. Therefor. ASH waiting Area is spacious, restful, and large enough to accommodate visitors and patients .`}
              </p>
            </div>
            {/* <div className="note">
              <p>
                {language === 'ar' && `كل صالة انتظار تم توفير:`}
                {language === 'en' &&
                  `In Each lounge, the following services are provided:`}
              </p>
            </div> */}
            {/* <ul className="info">
              <li>
                <span className="icon">
                  <i className="fas fa-chair" />
                </span>
                <span className="text">
                  {' '}
                  {language === 'ar' && `مناطق مريحة للجلوس والراحة`}
                  {language === 'en' &&
                    `Comfortable areas for sitting and rest`}{' '}
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-tv" />
                </span>
                <span className="text">
                  {' '}
                  {language === 'ar' && `تلفاز`}
                  {language === 'en' && `Television`}
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-wifi" />
                </span>
                <span className="text">
                  {' '}
                  {language === 'ar' && `شبكة انترنت مفتوحة بسرعة عالية.`}
                  {language === 'en' && `open, high-speed Internet.`}
                </span>
              </li>
            </ul> */}
          </div>
        </Col>
        <Col>
          <div className="right-col">
            <div
              className="img"
              style={{
                backgroundImage:
                  'url("/images/patient-guide/for_visitors/waiting-area.jpg")'
              }}
            />
            <div className="zigzag">
              <img src="/images/patient-guide/green-zigzag.png" alt="zigzag" />
            </div>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);
