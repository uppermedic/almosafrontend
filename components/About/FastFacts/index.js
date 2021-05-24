import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

const index = ({ t }) => {
  const { language } = i18n;
  return (
    <section className="fast-facts">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={7} />
          </Col>
          <Col sm="12" md="8">
            <Container>
              {/* **********English Content ********** */}
              <h2 className="title">{t('menu:fast facts')}</h2>
              {language == 'en' && (
                <div className="content">
                  <div className="single-section">
                    <Paragraph paragraph="Almoosa Specialist Hospital was founded in 1996, now the hospital’s bed capacity is 450" />
                    <Paragraph paragraph="The 17-story medical tower is the tallest hospital in Al-Ahsa - Saudi Arabia. Its majesty is seen for miles, and the gleaming structure portrays the level of care within, representing a beacon of hope for health care and wellness for the community." />
                    <Paragraph paragraph="Almoosa’s emblem, the local Sidra tree, symbolizes life and nurturing care for patients, visitors, and the local community. Influences of the Sidra tree are found in the building's gentle curving façade. Throughout the interior architecture, features referencing nature continue to soothe anxiety and reinforce the Almoosa brand." />
                    <Paragraph paragraph="The building embraces the Al-Ahsa community and the Almoosa brand. A three-story-high glass Atrium graciously welcomes visitors into the building. The ground level hosts food, retail, and respite spaces, reinforcing a sense of hospitality and reducing anxiety upon arrival." />
                  </div>

                  <div className="single-section">
                    <Title title="Cutting edge technologies:" />
                    <Menu
                      items={[
                        { text: 'Fully automated lab' },
                        { text: 'Pharmacy Automation and robotics from BD' },
                        { text: 'Patient Entertainment systems.' },
                        {
                          text: 'Electronic hand hygiene system in every room.'
                        },
                        { text: 'Real-time tracking system.' },
                        { text: 'Linear Accelerator for cancer care.' },
                        { text: 'Digital operating rooms.' },
                        { text: 'Cath lab and Angio labs.' },
                        {
                          text:
                            'Largest and most advanced CSSD unit in the region'
                        },
                        { text: 'Pneumatic tube system.' },
                        { text: 'Helipad' }
                      ]}
                    />
                  </div>
                  <div className="single-section">
                    <Title title="Healing environment features :" />
                    <Menu
                      items={[
                        { text: 'All Single rooms' },
                        { text: 'All rooms have a view of natural light.' },
                        { text: 'Hanging Gardens for patients and staff.' },
                        { text: 'Food court for staff and patients.' },
                        { text: 'Gym and wellness center for the team.' },
                        {
                          text:
                            'Power of Art: distinguished Selection of local and international art works, to integrate art in the healing journey'
                        }
                      ]}
                    />
                  </div>
                  <div className="single-section">
                    <Title title="Pharmacy Automation:" />
                    <Paragraph paragraph="Automated dispensing cabinet designed to improve patient safety outcomes." />
                    <Paragraph paragraph="The inpatient pharmacy system will reduce medication errors and improve quality of care." />
                    <Paragraph paragraph="It will give more time to focus on the patient by improving nursing and pharmacy staff efficiency." />
                    <Paragraph paragraph="Heighten medication security and improve medication tracking. Therefore, it will reduce inventory costs and optimize inventory to minimize the impact of drug shortages." />
                    <Paragraph paragraph="Automated lab system was introduced with the latest technologies used in laboratory science." />
                    <Paragraph paragraph="Samples are treated automatically and without any human intervention to ensure that there are no errors." />
                    <Paragraph paragraph="The system speed reaches 8000 samples per hour." />
                    <Paragraph paragraph="The system supports the work with emergency samples to provide faster service to patients and provide better healthcare." />
                    <Paragraph paragraph="This system is supplied by Abbott Laboratories, which has more than 130 years in this field." />
                    <Paragraph paragraph="All analyzes are done on Alinity devices, which won the 2017 Clinical Laboratory Equipment Award" />
                  </div>
                  <div className="single-section">
                    <Title title="LEED Gold Certified Building from USBGC" />
                    <div className="sub-single-section">
                      <SubTitle title="LEED Gold :" />
                      <Menu
                        items={[
                          {
                            text:
                              'The benefits of pursuing LEED certification include the following:',
                            subItems: [
                              'Reduced environmental impact.',
                              'Optimal building performance and lower operational costs',
                              'Increased employee satisfaction',
                              'increased asset value',
                              'enhanced productivity'
                            ]
                          }
                        ]}
                      />
                      <Paragraph paragraph="The project leveraged the unique credits related to medical facilities to promote building performance and features to improve occupant health and well-being." />
                      <Paragraph paragraph="Almoosa Hospital operation team and the LEED Consultant had planned an intensively integrated process that brought together a wide variety of experts to optimize the design and construction process, efficient service delivery and a healthy indoor environment." />
                    </div>
                    <div className="sub-single-section">
                      <SubTitle title="Features :" />
                      <Menu
                        items={[
                          {
                            text: 'Accessible gardens (Level 04 & Level 05)'
                          },
                          { text: 'Ground floor triple-height Atrium' },
                          {
                            text:
                              'Outpatient Pharmacy with a robotic dispensing system'
                          },
                          { text: '45 Clinics' },
                          {
                            text: '10 Operation Rooms, Day hospital, and PACU'
                          },
                          { text: 'Floor CSSD' },
                          { text: ' Laboratory' },
                          {
                            text:
                              '4 Burn beds & 19-bed patient unit (Medical ICU)'
                          },
                          { text: '22 bed (Surgical ICU) & CT scan' },
                          { text: ' 18 bed CCU' },
                          { text: 'Cardiology & 2 Cath Labs:' },

                          {
                            text:
                              'Infusion & 18 Bed patient unit (Medical Oncology unit)'
                          },
                          { text: '22 Bed patient unit (Orthopedic)' },
                          { text: '22 Bed patient unit (Bariatric)' },
                          { text: '22 Bed patient unit (General Surgical)' },
                          { text: '22 Bed patient unit (Neuro Medical Unit)' },
                          { text: '22 Bed patient unit (General Surgical)' },
                          { text: 'Administration floor.' }
                        ]}
                      />
                    </div>
                  </div>
                  <div className="single-section">
                    <Title title="Centers of excellence :" />
                    <Menu
                      items={[
                        { text: 'ASH heart and lung center' },
                        { text: 'Orthopedic and sport injuries center' },
                        { text: 'Cancer center' },
                        { text: 'Neuroscience center' }
                      ]}
                    />
                  </div>
                  <div className="single-section">
                    <Title title="First-Ins :" />
                    <Paragraph paragraph="ASH was the first hospital in the eastern province to perform:" />
                    <Menu
                      items={[
                        { text: 'First awake craniotomy' },
                        { text: 'First TAVR.' },
                        { text: 'First Nano-arthroscopy.' },
                        { text: 'First trans-sphenoidal surgery.' },
                        { text: 'First parotid tumor excision.' },
                        { text: 'Awake thoracotomy.' },
                        { text: 'REZUM technology.' },
                        { text: 'DMEK surgery.' },
                        { text: 'Carotid stenting.' },
                        { text: 'Popliteal artery pseudo aneurysm stenting.' },
                        { text: 'Pelvic congestion syndrome coiling.' },
                        {
                          text: 'Renal artery embolization of Angio myolipoma.'
                        },
                        { text: 'Cardiac MRI services.' }
                      ]}
                    />
                  </div>
                </div>
              )}

              {/* **********Arabic Content ********** */}

              {language == 'ar' && (
                <div className="content">
                  <div className="single-section">
                    <Paragraph paragraph="سنة التأسيس 1996" />
                    <Paragraph paragraph="السعة السريرية 450 سريرًا" />
                  </div>

                  <div className="single-section">
                    <Title title="البرج الشمالي" />

                    <Paragraph paragraph=" 17 طابقًا هو أطول مستشفى في الأحساء." />

                    <Paragraph paragraph="برج طبي مجهز بـــ 200 سرير ويضم العديد من المراكز المتميزة ، سيكون هذا البرج تحفة فنية في مجال المنشآت الطبية، حيث تم تصميمه ليراعي العديد من عناصر البيئة الاستشفائية من خال توفير البهو الفسيح والدهاليز الواسعة والألوان المريحة، وكذلك الأسطح الخضراء لكل من المريض والزائر ومقدمي الرعاية." />
                    <Paragraph paragraph="هذا المشروع سوف يضيف 220 سريراً وسيكون مقرا لـ 4 مراكز (مركز العظام والمفاصل ومركز القلب ومركز السرطان ومركز العلوم العصبية)." />
                  </div>
                  <div className="single-section">
                    <Title title="التقنيات المتطورة" />
                    <Menu
                      items={[
                        { text: 'مختبر مؤتمت بالكامل' },
                        { text: 'مختبر مؤتمت بالكامل' },
                        { text: 'الصيدلية المؤتمتة.' },
                        { text: 'نظام صرف الأدوية المؤتمت لمرضى التنويم.' },
                        { text: 'أنظمة ترفيه المريض.' },
                        { text: 'نظام نظافة الأيدي الإلكتروني في كل غرف.' },
                        { text: 'نظام تتبع في الوقت الحقيقي.' },
                        { text: 'غرف عمليات رقمية.' },
                        { text: 'معمل قسطرة ومختبرات تصوير الاوعية.' },
                        {
                          text:
                            'أكبر وحدة تعقيم مركزي وأكثرها تقدمًا في المنطقة.'
                        },
                        { text: 'مهبط للطائرات.' },
                        {
                          text:
                            'جميع الغرف خاصة وتتمتع جميع الغرف بإطلالة على الضوء الطبيعي.'
                        },
                        { text: 'حدائق معلقة.' },
                        { text: 'قاعات طعام للموظفين والمرضى.' },
                        { text: 'صالة رياضية ومركز صحي.' },
                        {
                          text:
                            'مجموعة متميزة من الأعمال الفنية المحلية والعالمية لدمج الفن في رحلة الشفاء.'
                        }
                      ]}
                    />
                  </div>
                  <div className="single-section">
                    <Title title="مراكزالتميز" />
                    <Menu
                      items={[
                        { text: 'مركز القلب والرئة' },
                        { text: 'مركز علم الأعصاب' },
                        { text: 'مركز السرطان' },
                        { text: 'مركز جراحة العظام' }
                      ]}
                    />
                  </div>
                  <div className="single-section">
                    <Title title="كان لنا السبق في المنطقة الشرقية و المملكة في اجراء :" />
                    <Menu
                      items={[
                        { text: 'الملاحة العصبية في عمليات العمود الفقري' },
                        {
                          text:
                            'حج القحف اليقظ او ما يسمي باللغة الدارجة "استئصال ورم الدماغ أثناء اليقظة"'
                        },
                        { text: 'جراحة عبر المريء' },
                        { text: 'أول TAVR' },
                        { text: 'أول تنظير للمفاصل بتقنية النانوسكوبي' },
                        { text: 'جراحة تنظير قاعدة الجمجمة الوتدي عبر الانف' },
                        { text: 'الاستئصال الأول لورم الغدة النكفية' },
                        {
                          text:
                            'علاج تضخم البروستاتا الحميد باستخدام تكنولوجيا الريزوم "'
                        },
                        { text: 'جراحة DMEK' },
                        {
                          text:
                            'استخدام تقنية العلاج الكيماوي بالتسخين الحراري لاستئصال اورام البطن'
                        },
                        { text: 'جراحة تجريف العنق الليمفاوية من العنق' },
                        { text: 'تركيب دعامة الشريان السباتي' },
                        {
                          text:
                            'تركيب دعامة لعلاج تمدد الشريان المأبضي( شريان الركبة)'
                        },
                        {
                          text:
                            'وقف تدفق الدم باقل تدخل جراحي لعلاج انصمام الوريد الحوضي'
                        },
                        {
                          text:
                            'وقف تدفق الدم لورم كلوي ضخم لتخفيف النزيف خلال العملية الجراحية لاستئصال الورم'
                        },
                        {
                          text:
                            'لأول مره في الاحسا توفر خدمة تصوير القلب بالرنين المغناطيسي'
                        }
                      ]}
                    />
                  </div>
                </div>
              )}
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withTranslation('menu')(index);

// small components
const Title = ({ title }) => {
  return <h3 className="fast-facts-title">{title}</h3>;
};

const SubTitle = ({ title }) => {
  return <h4 className="fast-facts-subtitle">{title}</h4>;
};

const Sub_subTitle = ({ title }) => {
  return <h5 className="fast-facts-sub-subtitle">{title}</h5>;
};

const Paragraph = ({ paragraph }) => {
  return (
    <p className="fast-facts-paragraph">
      <Markdown>{paragraph}</Markdown>
    </p>
  );
};

const Menu = ({ items }) => {
  return (
    <ul className="fast-facts-menu">
      {items.map((item, index) => {
        return (
          <li>
            <Markdown>{item.text}</Markdown>
            {item.subItems && (
              <ul>
                {item.subItems.map((subItem, index) => {
                  return (
                    <li className="sub-item">
                      <Markdown>{subItem}</Markdown>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
