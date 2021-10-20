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
            <h2>{t('menu:overview')}</h2>

            <Container>
              <Row className="top-section">
                <Col md={6}>
                  {language === 'ar' ? (
                    <p>
                      مستشفى الموسى التخصصي هو نظام صحي متكامل يحمل مفهوم
                      الرعاية الإنسانية الدؤوبة مع طاقم طبي وتكنولوجي وإداري
                      عالي الكفاءة ، مما يضمن توفير رعاية مثالية تركز على
                      الإنسان في منطقة الأحساء بشكل خاص وباقي دول مجلس التعاون
                      الخليجي بشكل عام .
                      <br />
                      <br />
                      تبلغ سعة مستشفى الموسى التخصصي 440 سريرًا، ويعمل بها أكثر
                      من 2653 من مقدمي الرعاية:
                      <ul>
                        <li>746 ممرضة .</li>
                        <li>331 طبيب بدوام كامل .</li>
                      </ul>
                      من خلال رؤيتنا الراسخة وإيماننا بعالمية الطب ، وكجزء من
                      سعينا المستمر لتحسين خدماتنا الطبية، حصل مستشفى الموسى
                      التخصصي على اعتمادات من هيئات دولية وإقليمية :
                      <ul>
                        <li>
                          جائزة الملك عبد العزيز للجودة 2018 - KAQA (الجائزة
                          الفضية) .
                        </li>
                        <li>اعتماد Planetree .</li>
                        <li>اعتماد اللجنة الدولية المشتركة (JCI) .</li>
                        <li>اعتماد كلية علماء الأمراض الأمريكية - CAP .</li>
                        <li>جائزة Everett Koop الوطنية للصحة - KOOP 2019 .</li>
                        <li>ACR - الكلية الأمريكية للأشعة .</li>
                        <li>
                          جائزة الغرفة التجارية لأفضل منشأة على مستوى الكيانات
                          الاقتصادية الكبرى .
                        </li>
                        <li>رحلتنا الى اعتماد الماجنت .</li>
                        <li>
                          المجلس المركزي السعودي لاعتماد المؤسسات الصحية (CBAHI)
                          .
                        </li>
                        <li>الجمعية الأمريكية لبنوك الدم - AABB .</li>
                        <li>
                          مركز التميز لعلاج السمنة (BCOE) من SRC في عام 2018 .
                        </li>
                        <li>اعتمادHCCAP .</li>
                        <li>شهادة الأيزو 45001 .</li>
                        <li>شهادة HIMSS .</li>
                        <li>اعتماد ASHP .</li>
                      </ul>
                    </p>
                  ) : (
                    <p>
                      Almoosa Specialist Hospital is an integrated health system
                      that carries the concept of diligent human care with
                      highly effective, competent, and accountable integrated
                      medical, technological, and administrative staff to ensure
                      providing the best human-centered care for our patients in
                      the Al-Ahsaa and the GCC .
                      <br />
                      <br />
                      Almoosa Specialist Hospital's capacity is 440 beds, with
                      More than 2653 caregivers employed :
                      <ul>
                        <li>746 nurses .</li>
                        <li>331 -full-time doctors .</li>
                        <li>556 admins .</li>
                        <li>524 allied health .</li>
                        <li>70 FMS .</li>
                        <li>426 support services .</li>
                      </ul>
                      Through our long-drawn vision and our belief in the
                      universality of medicine, and as part of our continuous
                      endeavor to improve our medical services, ASH has obtained
                      accreditations from international and regional bodies :
                      <ul>
                        <li>
                          King Abdulaziz Quality Award 2018 - KAQA (Silver
                          Award) .
                        </li>
                        <li>Planetree Designation .</li>
                        <li>
                          Joint Commission International Accreditation (JCI) .
                        </li>
                        <li>College of American Pathologists - CAP .</li>
                        <li>
                          Everett Koop National Health Award - KOOP 2019 .
                        </li>
                        <li>ACR - American College of Radiology .</li>
                        <li>
                          Chamber of Commerce Award for Best Facility at the
                          Major Economic Entities Level .
                        </li>
                        <li>
                          Magnet Recognition Program – our journey to Magnet .
                        </li>
                        <li>
                          Saudi Central Board for Accreditation of Healthcare
                          Institutions- CBAHI .
                        </li>
                        <li>American Association of Blood Banks - AABB .</li>
                        <li>
                          Bariatric Center of Excellence (BCOE) from SRC in 2018
                          .
                        </li>
                        <li>HCCAP .</li>
                        <li>ISO 45001 .</li>
                        <li>HIMSS Certification .</li>
                        <li>ASHP accreditation .</li>
                      </ul>
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
                  />
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
