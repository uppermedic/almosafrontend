import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="content">
      <div className="title">
        <h2>{t('patient_guide:interpreter_services')}</h2>
      </div>
      <div className="container">
        <Row xs="1" lg="2">
          <Col>
            <div className="left-info">
              <div className="desc">
                {language === 'ar' && (
                  <p>
                    <strong>التفاصيل الصغيرة هي التي تميزنا!</strong>
                    <br />
                    <br />
                    إذا كانت اللغة عائقًا أو واجهت صعوبة في فهم التعليمات الطبية
                    داخل مستشفى الموسى التخصصي، أو بحاجة إلى معلومات طبية بلغة
                    غير العربية، فإننا نوفر لكم خدمات الترجمة الشفوية ولأحبابكم،
                    ترجمة فورية ومجانية وبجودة عالية، للوصول إلى خدمة طبية
                    متكاملة دون وجود أي حواجز. الترجمات المتوفرة للغة العربية:
                    الإنجليزية – الروسية – التاغلوغية – الأردية – الهندية
                    مالايالامية – البرتغالية - البنجلادشية – الكشميرية –
                    الإيطالية – الفرنسية .
                  </p>
                )}
                {language === 'en' && (
                  <p>
                    <strong>Little details set us apart!</strong>
                    <br />
                    <br />
                    If the language is a hindrance, or you have difficulty
                    understanding medical instructions inside Al-Moosa
                    Specialist Hospital or need medical information in a
                    language other than Arabic.
                    <br />
                    In that case, we provide interpretation services for you and
                    your loved ones Available : Arabic translations- English -
                    Russian - Tagalog - Urdu - Hindi - Malayalam - Portuguese -
                    Bangladeshi - Kashmiri - Italian - French.
                  </p>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="right-info"
              style={{
                backgroundImage:
                  'url("/images/patient-guide/for_visitors/interpreter services.jpg")'
              }}
            >
              <div className="overlay-info">
                <p className="info-text">
                  {language === 'ar' &&
                    `
                    يمكن لجميع الموظفين مستشفى الموسى مساعدتك في ترتيب خدمات اللغة
                  `}
                  {language === 'en' &&
                    `
                  All the Al Moosa Hospital caregivers can help you arrange language services
                  `}
                </p>
                <div className="note">
                  <p>
                    {language === 'ar' &&
                      `
                    يمكنك أيضا الاتصال بمكتب خدمات المترجم الشفهي على الرقم
                  `}
                    {language === 'en' &&
                      `
                    You can also call the interpreter services office at
                  `}
                  </p>
                </div>
                <div className="tel">
                  <span className="icon">
                    <i className="fas fa-phone-square-alt" />
                  </span>
                  <span className="info">
                    <a href="tel:0135369666">
                      <strong>0135369666</strong>
                    </a>{' '}
                    (<strong>1272-1423</strong>).
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);

/**
 *   Telephone:
 */
