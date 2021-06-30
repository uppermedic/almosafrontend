import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import PageTitle from 'src/components/PatientGuide/HospitalAmenities/re-page-title/index.js';

import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="atms-content">
      {/* <PageTitle
        title={t('atm')}
        iconClass="fab fa-cc-visa"
        bgColor="#55b047"
      /> */}
      <div className="title">
        <h2>{t('patient_guide:atm')}</h2>
      </div>

      <div className="content">
        <Container>
          <Row>
            <Col sm={12} lg={8}>
              <div className="content-col">
                <div className="content-title">
                  {/* {language === 'ar' && (
										<p>
											حرصنا في مستشفى الموسى التخصصي على وجود عدد كافي من الصرافات الآلية داخل
											المستشفى من باب التيسير على المرضى والمراجعين وذويهم،
										</p>
									)} */}

                  {language === 'ar' && (
                    <h5> لذلك يمكنكم إيجاد الصرافات الآلية في :</h5>
                  )}

                  {/* {language === 'en' && (
										<p>
											At Al-Moosa Specialist Hospital, we were keen on the existence of a
											sufficient number of ATMs inside the hospital for the sake of convenience
											for patients, visitors, and their families.
										</p>
									)} */}

                  {language === 'en' && <h5>You can find ATMs in :</h5>}
                </div>
                <div className="content-description">
                  {language === 'ar' && (
                    <ul>
                      <li>
                        <strong>الطابق الأرضي في المبنى القديم :</strong> بوابة
                        رقم .3
                      </li>
                      <li>
                        <strong> الطابق الثاني في البرج الجديد :</strong> أمام
                        مصاعد الموظفين.
                      </li>
                    </ul>
                  )}
                  {language === 'en' && (
                    <ul>
                      <li>
                        <strong>Ground floor in the old building :</strong> Gate
                        No. 3
                      </li>
                      <li>
                        <strong>The second floor in the new tower :</strong> in
                        Front of the staff elevators.
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </Col>
            <Col className="img-col" sm={12} lg={4}>
              <div className="image">
                <img
                  src="/images/patient-guide/hospital-amenities/bank-logo.png"
                  alt="ATM"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);
