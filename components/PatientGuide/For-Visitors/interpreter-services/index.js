import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="content">
      {/* <Container> */}
      <div className="title">
        <h2>{t('patient_guide:interpreter_services')}</h2>
      </div>
      <Row xs="1" lg="2">
        <Col>
          <div className="left-info">
            <div className="desc">
              <p>
                {language === 'ar' && (
                  <>
                    التفاصيل الصغيرة هي التي تميزنا!
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
                  </>
                )}
                {language === 'en' && (
                  <>
                    The little details set us apart!
                    <br />
                    <br />
                    If the language is a hindrance or you have difficulty
                    understanding medical instructions inside Al-Moosa
                    Specialist Hospital, or you need medical information in a
                    language other than Arabic, we provide interpretation
                    services for you and your loved ones, free instant
                    translation and high quality, to reach an integrated medical
                    service without any barriers. Available Arabic translations:
                    English - Russian - Tagalog - Urdu - Hindi - Malayalam -
                    Portuguese - Bangladeshi - Kashmiri - Italian - French.
                  </>
                )}
              </p>
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
                  All Al Moosa Hospital staff can help you arrange language services
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
                  <i className="fas fa-phone-square-alt"></i>
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
      {/* </Container> */}
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);

/**
 *   Telephone:
 */
