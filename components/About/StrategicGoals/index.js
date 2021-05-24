import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

function index({ t, data }) {
  const { language } = i18n;

  return (
    <section className="strategic-goals">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={3} />
          </Col>
          <Col sm="12" md="8">
            <Container>
              <h2 className="title">{t('menu:strategic priorities')}</h2>
              <div className="section-content">
                {language === 'en' && (
                  <div className="description">
                    <h5>Strategic Priorities</h5>
                    <ul>
                      <li>Attract, educate, develop.</li>
                      <li>
                        Retain talented professionals who deliver excellent care
                        and promote wellness.
                      </li>
                      <li>
                        To Be a regional leader in quality outcomes and patient
                        safety through continuous and effective improvement.
                      </li>
                      <li>
                        Achieve national leadership in enhancing the patient
                        experience for patients and families.
                      </li>
                      <li>
                        Foster Physical, Emotional, Intellectual, Social,
                        Spiritual, Environmental, and Occupational Wellness by
                        incorporating these dimensions in all our decisions and
                        actions.
                      </li>
                    </ul>
                  </div>
                )}
                {language === 'ar' && (
                  <>
                    <div className="description">
                      <h5>الاستثمار في الطاقة البشرية:</h5>
                      <p>
                        تعليم وتطوير المهنيين من ذوي المواهب والكفاءات العالية
                        الذين يعززون الصحة ويقمون رعاية صحية مميزة والمحافظة
                        عليهم.
                      </p>
                    </div>
                    <div className="description">
                      <h5>نشر الصحة :</h5>
                      <p>
                        تعزيز الصحة ونشرها بمفهومها الشامل الذي يتضمن جميع
                        الجوانب الجسدية والنفسية والاجتماعية ودمج هذه المفاهيم
                        في جميع قراراتنا.
                      </p>
                    </div>
                    <div className="description">
                      <h5>الجودة وسلامة المرضى :</h5>
                      <p>
                        ان نكون القادة في تقديم رعاية صحية ذات جودة عالية تضمن
                        سلامة المرضى من خلال التطوير الفعال والمستمر.
                      </p>
                    </div>
                    <div className="description">
                      <h5>تحسين تجربة المرضى :</h5>
                      <p>تحقيق الريادة في تطوير تجرية المرضى وعائلاتهم.</p>
                    </div>
                    <div className="description">
                      <h5>تحسين الأداء :</h5>
                      <p>
                        تحسين الاداء على المستوى الشخصي والمهني والمؤسسي والمالي
                        لتحقيق رؤيتنا.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default withTranslation('menu')(index);
