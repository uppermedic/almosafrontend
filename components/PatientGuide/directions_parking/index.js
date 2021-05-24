import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Card';
import HeadingSection from './Heading_Section';
const data = [
  {
    id: 1,
    content: 'visiting_hours_and_policies',
    feature_color: 'blue-1',
    path: '/patient-guide/for-visitors/visiting-hours'
  },
  {
    id: 2,
    content: 'waiting_areas',
    feature_color: 'green-1',
    path: '/patient-guide/for-visitors/waiting-areas'
  },
  {
    id: 3,
    content: 'interpreter_services',
    feature_color: 'blue-2',
    path: '/patient-guide/for-visitors/interpreter-services'
  },
  {
    id: 4,
    content: 'mosques',
    feature_color: 'green-2',
    path: '/patient-guide/for-visitors/mosques'
  },
  {
    id: 6,
    content: 'atm',
    feature_color: 'green',
    path: '/patient-guide/hospital-amenities/atms'
  },
  {
    id: 7,
    content: 'wifi',
    feature_color: 'blue',
    path: '/patient-guide/hospital-amenities/wifi'
  }
];
import { withTranslation, i18n } from 'root/i18n';
import { lang } from 'moment';

const Directions = ({ t }) => {
  const { language } = i18n;
  return (
    <section className="guide-directions">
      <div className="title">
        <h2>{t('patient_guide:directions_parking')}</h2>
      </div>

      <Container>
        <Row xs="1" lg="2">
          <Col className="map-col">
            <HeadingSection
              title={t('patient_guide:directions')}
              subHeading={true}
            />
            <div className="content">
              <p className="bold-par">
                {language === 'ar' &&
                  `يقع مستشفى الموسى التخصصي على العنوان التالي:`}
                {language === 'en' &&
                  `Almoosa Specialist Hospital is located at the following address:`}
              </p>
              <p>
                {language === 'ar' &&
                  `الأحساء- المبرز- شارع الظهران- حي الفيصل ص.ب 5098 الرمز 31982 المنطقة الشرقية – المملكة العربية السعودية.
                `}
                {language === 'en' &&
                  `Dharan St | Alfaisal District | Al-Ahsa P.O. Box 5098 Eastern
                Province | Saudi Arabia`}
              </p>
            </div>
          </Col>
        </Row>
        <div className="blocks">
          <div className="parking">
            <HeadingSection
              title={t('patient_guide:parking')}
              subHeading={true}
            />
            <Row className="py-3">
              <Col md={6}>
                <h4>
                  {language === 'ar' && `مواقف السيارات`}
                  {language === 'en' && `Self-Parking`}
                </h4>
                <p className="inner-p">
                  {language === 'ar' &&
                    `ولأننا نعتني بكم، فقد وفرنا داخل مستشفى الموسى التخصصي مواقف للسيارات تتسع في المجمل إلى 150 سيارة تقع في أسفل البرج الطبي إضافة إلى مواقف أخرى مقابل مبنى المستشفى تتسع لـ100 سيارة أخرى.`}
                  {language === 'en' &&
                    `The hospital has underground parking for 150 cars and surface
                  parking for 100 cars. Both are easily accessible from Dharhan
                  Street.`}
                </p>
              </Col>
              <Col md={6}>
                <h4>
                  {language === 'ar' && `خدمة صف السيارات`}
                  {language === 'en' && `Valet Parking`}
                </h4>
                <p className="inner-p">
                  {language === 'ar' &&
                    `يوفر المستشفى أيضًا خدمة إيقاف السيارات للمراجعين والزوار، حيث يمكن للمراجع أو الزائر أن يقوم بالتوقف أمام مدخل المستشفى وتسليم سيارته لرجل الأمن المسئول عن خدمة إيقاف السيارات، ليقوم بدوره بتأمين السيارة في المواقف المخصصة للمستشفى، إلى أن ينتهي المراجع أو الزائر من عمله داخل المستشفى.`}
                  {language === 'en' &&
                    `The hospital also provides valet parking for patients and
                    visitors located at the hospital entrance. Security officers
                    can assist in all your parking needs.`}
                </p>
              </Col>
            </Row>
          </div>
          <div className="public-trans">
            <HeadingSection
              title={t('patient_guide:public_transportation')}
              subHeading={true}
            />

            <Row>
              <Col md={12}>
                <h4 className="mobility-subHeading">
                  {language === 'ar' && `طرق التنقل في الأحساء`}
                  {language === 'en' && `Mobility in Al-Ahsa`}
                </h4>
                <p className="inner-p">
                  {language === 'ar' &&
                    `يتوفر شبكة مواصلات من الأحساء وإليها في كل الأوقات، لذلك يمكن الوصول إلى مدينة الأحساء عبر وسائل التنقل الحديثة والمختلفة بكل سهولة ويُسر.
`}
                  {language === 'en' &&
                    `Al –Ahsa can be reached using modern transport services at all
                  times.`}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default withTranslation(['menu', 'patient_guide'])(Directions);
