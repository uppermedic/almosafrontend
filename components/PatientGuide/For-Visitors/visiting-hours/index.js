import React from 'react';
import { Link } from 'root/i18n';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="content">
      <div className="title">
        <h2>{t('patient_guide:visiting_hours_and_policies')}</h2>
      </div>
      <Container>
        <Row xs="1" lg="2">
          <Col>
            <div className="info">
              <div className="overlay"></div>

              <div className="desc">
                <p>
                  {language === 'ar' &&
                    `نرحب بالزوار في مستشفى الموسى التخصي - نحن ندعم مرضانا ، ونعلم على وجه اليقين أن الزوار جزء لا يتجزأ من عملية العلاج والشفاء.`}
                  {language === 'en' &&
                    `Visitors are welcome to ASH - we support our patients, and we know for sure that having visitors is an integral part of the treatment and recovery process.`}
                </p>
              </div>
              <div className="time">
                <div className="time-title">
                  <span>
                    <i className="fas fa-clock"></i>
                  </span>
                  <h3>
                    {language === 'ar' &&
                      `لذلك يسرنا أن نبلغكم بأن مواعيد زيارة المرضى كالآتي:`}
                    {language === 'en' && `Visiting hours :`}
                  </h3>
                </div>
                {language === 'ar' && (
                  <>
                    <div className="hours">
                      <p>
                        <span>من الساعة</span> <strong> 12 </strong> ظهرًا إلى
                        <strong> 1 </strong> .ظهرًا <span>و</span> من الساعة{' '}
                        <strong> 6 </strong> مساءً إلى <strong>7</strong> مساءً.
                      </p>
                    </div>
                    <div className="note">لا زيارات للعناية المركزة </div>
                  </>
                )}
                {language === 'en' && (
                  <>
                    <div className="hours">
                      <p>
                        <span>From</span> <strong> 12 </strong> pm to
                        <strong> 1 </strong> pm <span>And</span> from{' '}
                        <strong> 6 </strong> pm to <strong>7</strong> pm
                      </p>
                    </div>
                    <div className="note">No intensive care visits</div>
                  </>
                )}
              </div>
              <button>
                <Link href="/patient-guide/for-visitors/visiting-hours/covid-pandemic">
                  <a>
                    {(language === 'en' &&
                      'Click Here to Read: Visitor, Family, and Care Partner Restrictions Related to COVID-19 Pandemic') ||
                      'انقر هنا لقراءة: قيود الزائر والأسرة وشريك الرعاية المتعلقة بوباء COVID-19'}
                  </a>
                </Link>
              </button>
            </div>
          </Col>
          <Col className="img-col">
            <div className="the-img">
              <img
                src="/images/patient-guide/for_visitors/visiting hours.jpg"
                alt="Patient Visit"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);
