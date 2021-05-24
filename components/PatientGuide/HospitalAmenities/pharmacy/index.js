import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="pharmacy-content">
      <div className="container">
        <div className="page-title">
          <h2 className="title">{t('pharmacy')}</h2>
        </div>
        <Container>
          <Row xs="1" md="2">
            <Col
              style={{
                backgroundImage:
                  'url(/images/patient-guide/hospital-amenities/pharmacy-1.png)',
                backgroundSize: 'cover'
              }}
            ></Col>
            <Col>
              <div className="shape-1"></div>
              <div className="shape-2"></div>
              {language === 'ar' && (
                <div className="info info-1">
                  <div className="title">
                    الأدوية هي جزء أساسي من الخطط العلاجية حرصنا في مستشفى
                    الموسى التخصصي على وجود صيدليتين داخل المستشفى:
                  </div>
                  <div className="locations">
                    <p>
                      – الصيدلية الخارجية: تقع في الطابق الأرضي في البرج الجديد
                      تعمل على مدار الساعة (24 ساعة).
                    </p>
                    <p>
                      صيدلية أرامكو للمرضى الداخليين: تقع في الطابق الأول في
                      المبنى القديم، وتعمل على مدار الساعة (24 ساعة).
                    </p>
                  </div>
                </div>
              )}
              {language === 'en' && (
                <div className="info info-1">
                  <div className="title">
                    Medicines are an essential part of the treatment plans. At
                    Al-Moosa Specialist Hospital, we have ensured that there are
                    two pharmacies within the hospital:
                  </div>
                  <div className="locations">
                    <p>
                      – External pharmacy: located on the ground floor in the
                      new tower, it operates around the clock (24 hours).
                    </p>
                    <p>
                      – Aramco inpatient pharmacy: located on the first floor in
                      the old building, it operates around the clock (24 hours).
                    </p>
                  </div>
                </div>
              )}
            </Col>
            <Col>
              <div className="shape-3"></div>
              <div className="shape-4"></div>
              {language === 'ar' && (
                <div className="info info-2">
                  <div className="title">
                    نوفر داخل صيدلياتنا خدمات مميزة، والتي أهمها خدمات البيع
                    بالتجزئة، والتي تشمل:
                  </div>
                  <div className="services">
                    <ol>
                      <li>الأدوية.</li>
                      <li>المكملات الغذائية.</li>
                      <li>منتجات الأم والطفل.</li>
                      <li>منتجات العناية بالبشرة والشعر.</li>
                    </ol>
                  </div>
                  <div className="title">
                    إضافة إلى خدماتنا في تقديم الاستشارات الطبية واختبارات
                    الأجهزة، ووجود منطقة مخصصة للأطفال.
                  </div>
                </div>
              )}
              {language === 'en' && (
                <div className="info info-2">
                  <div className="title">
                    AT ASH pharmacies, we provide special services, the most
                    important of which are retail services, which include:
                  </div>
                  <div className="services">
                    <ol>
                      <li>Medicines.</li>
                      <li>Nutritional supplements.</li>
                      <li>Mother and child products.</li>
                      <li>skin and hair care products</li>
                    </ol>
                  </div>
                  <div className="title">
                    We also provide medical consultations, device tests, and a
                    children's area.
                  </div>
                </div>
              )}
            </Col>
            <Col
              style={{
                backgroundImage:
                  'url(/images/patient-guide/hospital-amenities/pharmacy-2.png)',
                backgroundSize: 'cover'
              }}
            ></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);
