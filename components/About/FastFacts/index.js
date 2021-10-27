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
            <h2 className="title">{t('menu:fast facts')}</h2>

            <Container>
              {/* **********English Content ********** */}
              {language == 'en' && (
                <div className="content">
                  <div className="single-section">
                    <Paragraph paragraph="Almoosa Specialist Hospital is a world-class health system that promotes wellness and heals illness founded in 1996 as the first private hospital in Ahsa, offering high-quality integrated healthcare ." />
                    <Paragraph paragraph="Ranked among the best ten hospitals in the GCC, we ensure to provide our patients with the best care in the Kingdom and GCC with qualified, competent caregivers using the latest technologies and evidence-based techniques ." />
                    <Paragraph paragraph="Almoosa Specialist Hospital is an academic teaching hospital accredited by the Saudi Commission for Health Specialties SCHS, in 12 residency programs and two fellowships programs ." />
                    <Paragraph paragraph="The hospital provides the best human-centered care in a capacity of over  460  beds, with a diverse team of more than 3000 caregivers working together to achieve one mission:  To promote hope and well-being for our society ." />
                  </div>

                  <div className="single-section">
                    <Title title="About the new expansion – the North Tower" />
                    <Paragraph paragraph="The 17-story medical tower is the tallest hospital in Al-Ahsa - Saudi Arabia. Its majesty is seen for miles, and the gleaming structure portrays the level of care within, representing a beacon of hope for health care and wellness for the community ." />
                    <Paragraph paragraph="Almoosa’s emblem, the local Sidra tree, symbolizes life and nurturing care for patients, visitors, and the local community. Influences of the Sidra tree are found in the building's gentle curving façade. Throughout the interior architecture, features referencing nature continue to soothe anxiety and reinforce the Almoosa brand ." />
                    <Paragraph paragraph="The building embraces the Al-Ahsa community and the Almoosa brand. A three-story-high glass Atrium graciously welcomes visitors into the building. The ground level hosts food, retail, and respite spaces, reinforcing a sense of hospitality and reducing anxiety upon arrival ." />
                  </div>

                  <div className="single-section">
                    <Title title="Cutting edge technologies :" />
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
                    <Title title="Pharmacy Automation :" />
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
                              'The benefits of pursuing LEED certification include the following :',
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
                    <Title title="Our leading programs and Centers of excellence :" />
                    <Menu
                      items={[
                        {
                          text: 'The region most favored Bone and Joint Center'
                        },
                        { text: 'Comprehensive cancer center' },
                        {
                          text:
                            'A world-class neuroscience center with a stroke program'
                        },
                        {
                          text:
                            'Advanced heart center with all the latest cardiac modalities such as hybrid Operation room and Electrophysiology lab'
                        },
                        {
                          text:
                            "The region's largest and most comprehensive maternity and children's program"
                        }
                      ]}
                    />
                  </div>
                  <div className="single-section">
                    <Title title="First-Ins :" />
                    <Paragraph paragraph="ASH was the first hospital in the eastern province to perform :" />
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
                    <Paragraph paragraph="مستشفى الموسى التخصصي هو نظام صحي عالمي موثوق ينشر الصحة و يحارب المرض ، تأسس المستشفى عامـ1996 كأول مستشفى خاص يقدم رعاية صحية متكاملة في الأحساء.. تم تصنيف مستشفى الموسى  ضمن أفضل عشرة مستشفيات في دول مجلس التعاون الخليجي  من حيث رضا المرضى من قِبل منظمة  PressGaney ." />
                    <Paragraph paragraph="نضمن لك  أفضل رعاية صحية  بمعايير استراتيجية باستخدام أحدث التكنولوجيا المتوفرة  والتقنيات القائمة على الأدلة على يد كادر طبي من مختلف التخصصات  الدقيقة و فريق  تمريضي معتمد ." />
                    <Paragraph paragraph="مستشفى الموسى هو مستشفى تعليمي مُعتمد من الهيئة السعودية للتخصصات الصحية  في 10 برامج للإقامة الطبية و 2 برنامج زمالة في بيئة تعليمية ثرية تحفز على التعلم والإبداع ." />
                    <Paragraph paragraph="يوفر المستشفى رعاية تتمحور حول الإنسان بسعة سريرية 460 سريرًا ، مع فريق متنوع يضم أكثر من 3000 مقدم رعاية يعملون معًا لتحقيق رسالة واحدة: أن نخدم بشغف، ونقود التحول المجتمعي من خلال تقديم خدمات صحية فعالة ." />
                  </div>

                  <div className="single-section">
                    <Title title="عن البرج الشمالي" />

                    <Paragraph paragraph="مكون من 17 طابق كأطول مستشفى في الأحساء - المملكة العربية السعودية، يمكن رؤيته على بعد أميال، ويصور الهيكل اللامع مستوى الرعاية في الداخل، مما يمثل منارة الأمل للرعاية الصحية والعافية للمجتمع ." />

                    <Paragraph paragraph="يرمز شعار مستشفى الموسى 'شجرة السدرة المحلية' إلى الحياة والرعاية الصحية للمرضى والزوار والمجتمع المحلي في الأحساء، يمكن ملاحظة شكل وتأثير شجرة السدرة في مبنى مستشفى الموسى والعمارة الداخلية مما يشير إلى الطبيعية ويساعد في تخفيف التوتر وتعزيز علامة الموسى التجارية ." />
                    <Paragraph paragraph="المبنى يعبر عن مجتمع الأحساء واسم الموسى، حيث الردهة الزجاجية المكونة من ثلاثة طوابق تستقبل الزوار إذ يحتوي الطابق الأول على مناطق الراحة والأكل ومنطقة شراء الهدايا مما يعزز الشعور بالضيافة وتخفيف القلق عند الوصول ." />
                  </div>
                  <div className="single-section">
                    <Title title="التقنيات المتطورة" />
                    <Menu
                      items={[
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
                    <Title title="مراكز التميز و البرامج الطبية" />
                    <Menu
                      items={[
                        { text: 'مركز العظام والمفاصل' },
                        { text: 'مركز السرطان' },
                        {
                          text:
                            'مركز علم الأعصاب و يقدم برنامج   متكامل لإدارة السكتة الدماغية'
                        },
                        {
                          text:
                            'مركز قلب متقدم مزود بأحدث الأجهزة التكنولوجية القلبية مثل غرف العمليات المتكاملة Hybrid OR ومختبر الفيزيولوجيا الكهربية'
                        },
                        { text: 'أكبر وأشمل برنامج للأم و الطفل في المنطقة' }
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
