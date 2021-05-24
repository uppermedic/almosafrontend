import React from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { Container, Row, Col } from 'reactstrap';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

const index = ({ t }) => {
  const { language } = i18n;
  return (
    <section className="over-view-section">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={0} />
          </Col>
          <Col sm="12" md="8">
            <Container>
              <h2>{t('menu:overview')}</h2>

              <Row className="py-5 top-section">
                <Col md={6}>
                  {language === 'ar' ? (
                    <p>
                      أنشأنا مستشفى الموسى التخصصي عام 1996 كأول مستشفى خاص
                      فيمستشفى الموسى التخصصي هو نظام صحي متكامل يحمل مفهوم
                      الرعاية الإنسانية الدؤوبة مع طاقم طبي وتكنولوجي وإداري
                      عالي الكفاءة ، مما يضمن توفير رعاية مثالية تركز على
                      الإنسان في منطقة الأحساء بشكل خاص وباقي دول مجلس التعاون
                      الخليجي بشكل عام.
                      <br />
                      <br />
                      تبلغ سعة مستشفى الموسى التخصصي ، وهو أحد أكبر المستشفيات
                      في المنطقة ، 450 سريرًا ، ويعمل به أكثر من 2300 من مقدمي
                      الرعاية ، مع أكثر من 700 ممرض و 280 طبيبًا بدوام كامل.
                      <br />
                      <br />
                      مستشفى الموسى حاصل على حصل على اعتمادات من هيئات دولية
                      وإقليمية مثل JCI و CBAHI وكلية الأطباء الأمريكيين (CAP ) ،
                      وجائزة التميز لمركز السمنة.
                      <br />
                      <br />
                      بالاضافة لكوننا أول مستشفى في الشرق الأوسط يحصل على شهادة
                      بلانيتري الذهبية للتميز في تجربة المرضى كما تم اعتماد
                      مستشفى الموسى التخصصي كمستشفى تعليمي معتمد من الهيئة
                      السعودية للتخصصات الطبية لتدريب الأطباء.
                    </p>
                  ) : (
                    <p>
                      Almoosa Specialist Hospital is an integrated health system
                      that carries the concept of diligent human care with
                      highly effective, competent, and accountable integrated
                      medical, technological, and administrative staff ,
                      ensuring the provision of ideal and human centered care
                      for patients in the Al-Ahsaa region in particular and the
                      rest of the GCC in general.
                      <br />
                      <br />
                      Almoosa Specialist Hospital's capacity, one of the largest
                      hospitals in the region, exceeds 450 hospital beds, and
                      more than 2300 caregivers are employed by the hospital,
                      with over 700 nurses and 280 full-time doctors.
                      <br />
                      <br />
                      Through our long-term vision and our belief in the
                      universality of medicine, and as part of our continuous
                      endeavor to improve our medical services, ASH has obtained
                      accreditations from international and regional bodies such
                      as JCI, CBAHI, the College of American Physicians (CAP),
                      and the Excellence Award for the Bariatric Center.
                      <br />
                      <br />
                      We were the first hospital in the Middle East to obtain
                      the Planetree Gold Certificate of Excellence Inpatient
                      care and the accreditation of Al-Moosa Specialist Hospital
                      as a teaching hospital accredited by the Saudi Commission
                      for Medical Specialties to train doctors within the
                      framework of the Saudi Council program.
                    </p>
                  )}
                </Col>
                <Col md={6}>
                  <img
                    src="/images/why_choose_us/overview-section.png"
                    alt=""
                  />
                </Col>
              </Row>
              <Row className="pt-5">
                <Col className="d-flex justify-content-center">
                  <iframe
                    width="1000"
                    height="560"
                    src="https://www.youtube.com/embed/kgv9Vq35P18"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withTranslation('menu')(index);
