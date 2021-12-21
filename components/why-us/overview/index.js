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
                      مستشفى الموسى التخصصي هو نظام صحي عالمي موثوق ينشر الصحة و
                      يحارب المرض، تأسس المستشفى عامـ1996 كأول مستشفى خاص يقدم
                      رعاية صحية متكاملة في الأحساء.. تم تصنيف مستشفى الموسى ضمن
                      أفضل عشرة مستشفيات في دول مجلس التعاون الخليجي من حيث رضا
                      المرضى من قِبل منظمة (PressGaney) .
                      <br />
                      <br />
                      نضمن لك أفضل رعاية صحية بمعايير استراتيجية باستخدام أحدث
                      التكنولوجيا المتوفرة والتقنيات القائمة على الأدلة على يد
                      كادر طبي من مختلف التخصصات الدقيقة و فريق تمريضي معتمد .
                      <br />
                      <br />
                      مستشفى الموسى هو مستشفى تعليمي مُعتمد من الهيئة السعودية
                      للتخصصات الصحية في 10 برامج للإقامة الطبية و2 برنامج زمالة
                      في بيئة تعليمية ثرية تحفز على التعلم والإبداع .
                      <br />
                      <br />
                      يوفر المستشفى رعاية تتمحور حول الإنسان بسعة سريرية 460
                      سريرًا، مع فريق متنوع يضم أكثر من 3000 مقدم رعاية يعملون
                      معًا لتحقيق رسالة واحدة: أن نخدم بشغف، ونقود التحول
                      المجتمعي من خلال تقديم خدمات صحية فعالة .
                      <br />
                      <br />
                      مراكز التميز و البرامج الطبية :
                      <ul>
                        <li>مركز العظام والمفاصل .</li>
                        <li>مركز السرطان .</li>
                        <li>
                          مركز علم الأعصاب ويقدم برنامج متكامل لإدارة السكتة
                          الدماغية .
                        </li>
                        <li>
                          مركز قلب متقدم مزود بأحدث الأجهزة التكنولوجية القلبية
                          مثل غرف العمليات المتكاملة Hybrid OR ومختبر
                          الفيزيولوجيا الكهربية .
                        </li>
                        <li>أكبر وأشمل برنامج للأم والطفل في المنطقة .</li>
                      </ul>
                    </p>
                  ) : (
                    <p>
                      Almoosa Specialist Hospital is a world-class health system
                      that promotes wellness and heals illness founded in 1996
                      as the first private hospital in Ahsa, offering
                      high-quality integrated healthcare .
                      <br />
                      <br />
                      Ranked among the best ten hospitals in the GCC, we ensure
                      to provide our patients with the best care in the Kingdom
                      and GCC with qualified, competent caregivers using the
                      latest technologies and evidence-based techniques .
                      <br />
                      <br />
                      Almoosa Specialist Hospital is an academic teaching
                      hospital accredited by the Saudi Commission for Health
                      Specialties SCHS, in 12 residency programs and two
                      fellowships programs .
                      <br />
                      <br />
                      The hospital provides the best human-centered care in a
                      capacity of over 460 beds, with a diverse team of more
                      than 3000 caregivers working together to achieve one
                      mission: To promote hope and well-being for our society .
                      <br />
                      <br />
                      Our leading programs and Centers of excellence :
                      <ul>
                        <li>The region most favored Bone and Joint Center .</li>
                        <li>Comprehensive cancer center .</li>
                        <li>
                          A world-class neuroscience center with a stroke
                          program .
                        </li>
                        <li>
                          Advanced heart center with all the latest cardiac
                          modalities such as hybrid Operation room and
                          Electrophysiology lab .
                        </li>
                        <li>
                          The region's largest and most comprehensive maternity
                          and children's program .
                        </li>
                      </ul>
                    </p>
                  )}
                </Col>
                <Col md={6}>
                  <img
                    src="/images/why_choose_us/overview-section.png"
                    alt="overview-section"
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
