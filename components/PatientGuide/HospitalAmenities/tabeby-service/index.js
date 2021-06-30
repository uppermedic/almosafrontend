import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="container">
      <div className="content">
        <div className="title">
          <h2>{t('patient_guide:tabeby service')}</h2>
        </div>

        <div className="items">
          <Container>
            <Row sx="1" xl="2">
              <Col xl="8">
                {language === 'ar' && (
                  <>
                    <h6 className="items-title">ماهي خدمة طبيبي ؟</h6>
                    <div className="items-content">
                      خدمة تم تصميمها لمساعدة المرضى على إتمام جميع الإجراءات
                      بسرعة وسهوله بدءاً من حجز الموعد إلى تنسيق مواعيد المتابعة
                      ونتائج الفحوصات
                    </div>

                    <h6 className="items-title">مميزات بطاقة طبيبي : </h6>
                    <div className="items-content">
                      <ul>
                        <li>منسقة خاصة لحجز المواعيد وتسهيل الإجراءات.</li>
                        <li>صالة خاصة للإنتظار.</li>
                        <li>سهولة الدخول للعيادات والمختبر والأشعة . </li>
                        <li>عروض وخصومات خاصة لخدمة معينة طوال السنة.</li>
                        <li>إمكانية ترقية الغرفة حسب المتوفر .</li>
                        <li>توصيل الأدوية للمنزل .</li>
                        <li>خصم 10%على الزيارات المنزلية .</li>
                        <li>
                          خدمة المواقف والأستقبال والمرافقة من البوابة إلى صالة
                          الإستقبال .
                        </li>
                      </ul>
                    </div>

                    <h6 className="items-title">
                      رسوم الإشتراك السنوي في خدمة طبيبي :
                      <strong> 2500 ريال </strong>
                    </h6>
                    <div className="items-content">
                      تشمل <strong>4</strong> أشخاص فقط و
                      <strong>250 ريال</strong> لكل شخص إضافي.
                    </div>

                    <div className="items-content">
                      <strong>
                        جودة الخدمة المقدمة للمشتركين بخدمة طبيبي نفس جودة
                        وفعالية الخدمة لباقي المرضى ولا يوجد أي تفرقة.
                      </strong>
                    </div>
                  </>
                )}
                {language === 'en' && (
                  <>
                    <h6 className="items-title">What is TABEBY Service?</h6>
                    <div className="items-content">
                      TABEBY service is designed for you to end all procedures
                      and services starting with the request of the file and
                      ending with taking the appointment for the next visit.
                    </div>

                    <h6 className="items-title">TABEBY card features :</h6>
                    <div className="items-content">
                      <ul>
                        <li>
                          Special coordinator to book appointments and
                          facilitate procedures.
                        </li>
                        <li>A private waiting area.</li>
                        <li>
                          Easy access to clinics, laboratories and radiology.
                        </li>
                        <li>
                          Special offers and discounts for a specific services.
                        </li>
                        <li>
                          Ability to upgrade the room according to availability.
                        </li>
                        <li>Medicines delivery to the home.</li>
                        <li>10% discount on home visits.</li>
                        <li>
                          Parking, reception and escort service from the gate to
                          the reception hall.
                        </li>
                      </ul>
                    </div>

                    <h6 className="items-title">
                      Annual subscription fee is :<strong> 2500 R.S</strong>
                    </h6>
                    <div className="items-content">
                      It includes <strong> 4 </strong> people +
                      <strong> 250 R.S </strong> for each additional person.
                    </div>
                    <div className="items-content">
                      <strong>
                        The quality for TABEBY subscribers is the same as the
                        service for other patients, with no distinction.
                      </strong>
                    </div>
                  </>
                )}
              </Col>
              <Col xl="4" className="side-img">
                <div className="img">
                  <img
                    src="/images/patient-guide/hospital-amenities/Logo.png"
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

export default withTranslation(['patient_guide'])(Content);
