import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

function index({ t }) {
  const { language } = i18n;

  return (
    <section className="almoosa-medical-group">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={8} />
          </Col>
          <Col sm="12" md="8">
            <Container>
              <h2 className="title">{t('menu:almoosa medical group')}</h2>
              {language == 'en' && (
                <div className="section-content">
                  <p>
                    The healthcare sector's investment as one of the vital
                    sectors to society comes from the belief that the group
                    focuses on value-added projects that will provide better
                    services and high quality to the community. Therefore, the
                    group invested in many healthcare projects over the years.
                    <ul>
                      <li> Almoosa Specialist Hospital</li>
                      <li> Almoosa hospital for rehab & LTC</li>
                      <li> Almoosa College of health sciences</li>
                    </ul>
                  </p>
                  <br />
                  <div className="description">
                    <h6>Almoosa Specialist Hospital :</h6>
                    <p>
                      The healthcare sector's flagship is the existing hospital
                      established in 1996 as the first private hospital in the
                      Kingdom of Saudi Arabia in the Al-Ahsaa region, our love
                      and belonging to Al-Ahsa and serving its people is our
                      first motivation. Our story that carries with it the vigor
                      of youth and parents' experience is a source of optimism,
                      a source of passion, and an insight that brings hope for
                      the bright future.
                    </p>
                  </div>
                  <div className="description">
                    <h6>Almoosa for rehabilitation and long term care : </h6>
                    <p>
                      The new 300-bed facility will be a rehabilitation and
                      long-term care oasis in the region, including
                      rehabilitation programs for sports injuries, bone injuries
                      for adults and children, spinal injuries, and neural and
                      brain injuries.
                      <br />
                      The rehabilitation and long-term care hospital will be in
                      Eastern Province, Al Ahsa. It is designed as a micro
                      village that embraces nature and the surrounding
                      landscape. The master plan takes its inspiration from the
                      Al-Ahsa region's natural landform of an oasis, while the
                      building design fosters healing through its connection to
                      nature. The new facility will stand as the northern
                      gateway to Al-Ahsa, leaving a lasting impression as a
                      striking landmark.
                    </p>
                  </div>
                  <div className="description">
                    <h6>Almoosa College of health sciences :</h6>
                    <p>
                      {' '}
                      <a
                        href="https://www.almoosacollege.edu.sa/"
                        target="_blank"
                      >
                        https://www.almoosacollege.edu.sa/
                      </a>
                    </p>
                  </div>
                </div>
              )}
              {language == 'ar' && (
                <div className="section-content">
                  <p>
                    استثمرنا في قطاع الرعاية الصحية لكونه أحد القطاعات الحيوية
                    في المجتمع ، تركز المجموعة على المشاريع ذات القيمة المضافة
                    التي توفر خدمات أفضل وجودة استثنائية للمجتمع. لذلك ، استثمرت
                    المجموعة في العديد من مشاريع الرعاية الصحية على مر السنين :
                    <ul>
                      <li>مسشتفى الموسى التخصصي </li>
                      <li>مركز التأهيل والرعاية الدائمة</li>
                      <li>كلية الموسى للعلوم الصحية</li>
                    </ul>
                  </p>
                  <br />

                  <div className="description">
                    <h6>مركز التأهيل والرعاية الدائمة : </h6>
                    <p>
                      مركز التأهيل الشامل ومستشفى الرعاية الدائمة بسعة 300 سرير،
                      ويمتد على أرض مساحتها 30 ألف متر مربع، وسيكون المركز
                      الجديد الأول من نوعه في المملكة بإذن الله، حيث سيكون
                      المركز واحة استشفائية شاملة تخدم أهالي المنطقة والمملكة
                      والخليج
                    </p>
                  </div>
                  <div className="description">
                    <h6>كلية الموسى للعلوم الصحية :</h6>
                    <p>
                      <a
                        href="https://www.almoosacollege.edu.sa/about-ar/"
                        target="_blank"
                      >
                        https://www.almoosacollege.edu.sa/about-ar/
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default withTranslation('menu')(index);
