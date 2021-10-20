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
            <h2 className="title">{t('menu:almoosa medical group')}</h2>

            <Container>
              {language == 'en' && (
                <div className="section-content">
                  <p>
                    Investing in the healthcare sector as one of the vital
                    sectors to society was driven by our long-drawn vision to
                    focus on value-added projects that will provide better
                    medical services to our community. Therefore, the group
                    invested in many healthcare projects over the past years.
                    The healthcare sector's flagship was the main Hospital
                    established in 1996 as the first private Hospital in the
                    Al-Ahsaa region, followed by the South tower and the grand
                    expansion of " the North Tower .
                    <br /> <br />
                    Almoosa Health Group consists of :
                    <ul>
                      <li>Almoosa Specialist Hospital</li>
                      <li>Almoosa for rehabilitation and LTC</li>
                      <li>Almoosa College of health sciences</li>
                      <li>Almoosa Home Health Care</li>
                    </ul>
                  </p>
                  <br />
                  {/* <div className="description">
                    <h6>Almoosa Specialist Hospital </h6>
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
                  </div> */}
                  <div className="description">
                    <h6>Almoosa for rehabilitation and long term care : </h6>
                    <p>
                      The new 300-bed facility will be a rehabilitation and
                      long-term care oasis in the region, including
                      rehabilitation programs for sports injuries, bone injuries
                      for adults and children, spinal injuries, and neural and
                      brain injuries .
                      <br />
                      The rehabilitation and long-term care hospital will be in
                      Eastern Province, Al Ahsa. It is designed as a micro
                      village that embraces nature and the surrounding
                      landscape. The master plan takes its inspiration from the
                      Al-Ahsa region's natural landform of an oasis, while the
                      building design fosters healing through its connection to
                      nature. The new facility will stand as the northern
                      gateway to Al-Ahsa, leaving a lasting impression as a
                      striking landmark .
                    </p>
                  </div>
                  <div className="description">
                    <h6>Almoosa College of health sciences :</h6>
                    <p>
                      AlMoosa College of Health Science is the first
                      not-for-profit private college in the eastern region. The
                      college opened its doors in September 2020 with innovative
                      programs focusing on inter-professional education, state
                      of the art simulation labs and a curriculum developed in
                      collaboration with the MGH Institute of Health professions
                      in Boston
                      <br />
                      <a
                        href="https://www.almoosacollege.edu.sa/"
                        target="_blank"
                      >
                        https://www.almoosacollege.edu.sa/
                      </a>
                    </p>
                  </div>
                  <div className="description">
                    <h6>Almoosa Home Health Care :</h6>
                    <p>
                      Almoosa HHC offers comprehensive care given by skilled
                      medical professionals, including skilled nursing care,
                      physical therapy, occupational therapy, and assistance
                      with daily living from highly qualified home health
                      professionals .
                    </p>
                  </div>
                </div>
              )}
              {language == 'ar' && (
                <div className="section-content">
                  <p>
                    استثمرت المجموعة في العديد من مشاريع الرعاية الصحية خلال
                    السنوات الماضية لتوفير خدمات صحية ذات جودة عالمية يستحقها
                    أهلنا في الأحساء و مرضانا من كافة المملكة و الخليج ، كانت
                    البداية مع المستشفى الرئيسي الذي أُنشئ عام 1996 كأول مستشفى
                    خاص في منطقة الأحساء ، تلاه البرج الجنوبي ، حتى افتتاح البرج
                    الشمالي في نهاية 2021 والذي يتميز بتصميم عالمي يناسب
                    احتياجات مرضانا و خدمات متميزة باستخدام أحدث التقنيات
                    التكنولوجية .
                    <br /> <br />
                    تتكون مجموعة الموسى الصحية من :
                    <ul>
                      <li>مسشتفى الموسى التخصصي </li>
                      <li>مستشفى الموسى للتأهيل و الرعاية الممتدة</li>
                      <li>كلية الموسى للعلوم الصحية</li>
                      <li>الموسى للرعاية الصحية المنزلية</li>
                    </ul>
                  </p>
                  <br />

                  <div className="description">
                    <h6>مستشفى الموسى للتأهيل و الرعاية الممتدة : </h6>
                    <p>
                      تبلغ سعة مستشفى التأهيل الشامل والرعاية الممتدة 300 سرير،
                      ويمتد على أرض مساحتها 30 ألف متر مربع، وسيكون المركز
                      الجديد الأول من نوعه في المملكة بإذن الله، حيث سيكون
                      المركز واحة استشفائية شاملة تخدم أهالي المنطقة والمملكة
                      والخليج.
                    </p>
                  </div>
                  <div className="description">
                    <h6>كلية الموسى للعلوم الصحية :</h6>
                    <p>
                      تم تأسيس كلية الموسى للعلوم الصحية عام ٢٠١٩ وتعد أول كلية
                      خاصة غير ربحية في المنطقة.
                      <br />
                      تتطلع كلية الموسى للعلوم الصحية لتخريج نخبة من ممرضات
                      المستقبل بتوفير بيئة تشجع على التعلم مزودة بالتكنولوجيا
                      الحديثة ومناهج مطورة بطرق تدريس مبتكرة من خلال تعاونهامع
                      معهد MGH للمهن الصحية في بوستن. ويلتزم جميع العاملين في
                      الكلية بتوفير مستوى تعليمي راقي على قدر من الكفاءة
                      والجودة. <br />
                      <a
                        href="https://www.almoosacollege.edu.sa"
                        target="_blank"
                      >
                        https://www.almoosacollege.edu.sa
                      </a>
                    </p>
                  </div>
                  <div className="description">
                    <h6>الموسى للرعاية الصحية المنزلية :</h6>
                    <p>
                      يقدم مستشفى الموسى للرعاية المنزلية خدمات رعاية شاملة على
                      يد كفاءات طبية وتمريضية متميزة، بما في ذلك الرعاية
                      التمريضية، والعلاج الطبيعي والتأهيلي، رعاية كبار السن،
                      رعاية ما بعد العمليات الجراحية وادارة الأمراض المزمنة
                      بالمنزل
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
