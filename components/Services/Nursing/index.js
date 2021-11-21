import React from 'react';
import { Container } from 'reactstrap';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';

const Nursing = () => {
  const { language } = i18n;

  return (
    <section className="nursing" id="nursing-section">
      <Container>
        <h2 className="title">
          {language === 'en' ? 'Nursing Department' : 'قسم التمريض'}
        </h2>
        {language === 'en' ? (
          <div className="content">
            {/* **********English Content ********** */}

            <div className="single-section text-center">
              <h3>
                <strong>COLLABORATE. INNOVATE. CULTIVATE.</strong>
              </h3>
            </div>
            <div className="single-section">
              <Title title="A message from the CNO" />
              <Paragraph paragraph="Thank you for searching about nursing at Almoosa Specialist Hospital. Whether you are considering an education in nursing or you are an experienced nurse looking for a career growth, we are glad you have searched for us." />
              <Paragraph paragraph="At ASH, our nurses put the patient experience first and use their clinical and interpersonal talents to make an impact in patient care. We believe that excellence in nursing happens when nurses are equipped with competence and continuing education, are provided with the right resources, are led with visionary leaders, and are supported in an environment of gratitude." />
              <Paragraph paragraph="Nursing at ASH is on the Journey to Excellence to achieve Magnet Recognition. Magnet recognized hospitals are named as such because they attract and retain the best nursing professionals. In addition, these hospitals demonstrate better patient outcomes and higher nursing education and engagement. " />
              <Paragraph paragraph="We are looking for high-quality professionals who would take the extra mile to make a difference for a patient or a family, a colleague, or the organization. We value individuals who bring in diverse ideas, who want to be part of a solution, and who are respectful always. " />
              <Paragraph paragraph="As you search for good opportunities for your nursing career, please send your inquiries through … so that we can help you find what would fit you best." />
              <Paragraph paragraph="If you want to give your best and be among the best, you have landed in the right place. We would be glad to have you join in our journey to Collaborate, Innovate, Cultivate." />
            </div>

            <div className="single-section">
              <Title title="Nursing Mission" />
              <Paragraph paragraph="We provide world-class human centered care for our diverse patients, families and the community with competence and compassion while advancing our profession through innovative research and education. " />
            </div>

            <div className="single-section">
              <Title title="Nursing Vision" />
              <Paragraph paragraph="Committed to the health and well-being of the individuals and the community entrusted to our care. Led by knowledge, empowered by skill, and motivated by compassion." />
            </div>

            <div className="single-section">
              <Title title="Nursing Department Values :" />
              <Menu
                items={[
                  {
                    text: `<strong>Human Centered Care</strong> – The people we heal, their families and communities, and our staff are our trusted partners in care.`
                  },
                  {
                    text: `<strong>Innovation</strong> – We use leading best practices, efficiency and advanced technology to champion healing and wellness.Pharmacy Automation and robotics from BD`
                  },
                  {
                    text: `<strong>Ethics</strong> – The highest moral standards of the communities we serve are at the forefront of our thoughts and actions.`
                  },
                  {
                    text: `<strong>Empowerment</strong> – We help everyone we serve become stronger, more confident, and make their own decisions about their lives.`
                  },
                  {
                    text: `<strong>Excellence</strong> – We achieve excellence by giving our best to everything we do.`
                  }
                ]}
              />
            </div>

            <div className="single-section">
              <Title title="Nursing Strategic priorities" />
              <Menu
                items={[
                  {
                    text: `<strong>SP1: TRANSFORMATIONAL LEADERSHIP</strong> <br/> As leaders, we advocate and guide transformation through shared vision and decision making. We communicate, collaborate and advance in order to achieve positive change that has an organization-wide impact. `
                  },
                  {
                    text: `<strong>SP2: STRUCTURAL EMPOWERMENT</strong> <br/>ASH nurses at all levels are empowered to develop professionally and to engage in shared decision making. We are committed to continuous learning and growth to advance the nursing profession, patient care and well-being of the community. `
                  },
                  {
                    text: `<strong>SP3: EXEMPLARY PROFESSIONAL PRACTICE </strong> <br/>ASH Nursing Professional Practice focuses on human catered care and supports the improvement of patient outcomes and promotes a safe and healthy work environment that nurtures interprofessional collaboration for effective and efficient performance. `
                  },
                  {
                    text: `<strong>SP4: NEW KNOWLEDGE, INNOVATIONS AND IMPROVEMENTS</strong> <br/>ASH nurses are encouraged and supported to contribute to the development of nursing research and integrate the latest evidence-based finding into practice to improve care and service `
                  },
                  {
                    text: `<strong>SP5: EMPIRICAL OUTCOMES </strong> <br/>ASH nurses strive to continuously improve patient outcomes, nursing outcomes, workplace outcomes and organizational outcomes through the development, implementation, integration and dissemination of best practices in practice.`
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="Nursing Shared Governance" />
              <Paragraph paragraph="At Almoosa Specialist Hospital, patient centered care is sustained by nurses who are formally empowered to make decisions about clinical practice standards, quality improvement, staff and professional development and research. Nurses at all levels at ASH are key players in advancing patient care through professional engagement and shared governance. " />
            </div>
            <div className="single-section">
              <Title title="Nursing Professional Practice Model" />
              <Paragraph paragraph="The Nursing Professional Practice Models (PPM) at ASH defines and guides how nurses’ practice, collaborate, innovate, and develop professionally to provide quality care. At the center of our PPM is our commitment to the patient, family and the community." />
            </div>
            <div className="single-section">
              <Title title="Nursing Care Delivery System" />
              <Paragraph paragraph="Nurses at all levels hold the responsibility to provide continuous, consistent and competent care. The Nursing Care Delivery System embraces the patient and family at the center of the care provided. This coincides with the Professional Practice Model and our culture of caring and healing. The patient and family participate in decisions regarding the patient's care plan." />
            </div>
            <div className="single-section">
              <Title title="Magnet at Almoosa Specialist Hospital" />
              <div className="sub-single-section">
                <SubTitle title="The Gold Standard of Nursing Excellence" />
                <Paragraph paragraph="Almoosa Specialist Hospital is on the Journey to Magnet® Excellence. This extraordinary journey will allow our hospital a prestigious designation that is awarded by the American Nurses Credentialing Center® (ANCC) that serves as the gold standard and validation of the level of excellence in care that our nurses and our entire interprofessional teams provide. Almoosa Specialist Hospital’s official journey to Magnet Excellence became effective on August 1, 2020 after finalizing the Magnet Recognition Pre-Intent Program International Membership Agreement. This agreement will move us progressively forward for our Magnet Recognition." />
                <Paragraph paragraph="Our journey to Magnet® Excellence is a remarkable milestone that shows that Almoosa Specialist Hospital is committed to ensuring Excellence for our patients and that we are committed to doing it every day!" />
              </div>
            </div>
            {/*
                            <div className="single-section">
							<Title title="Clinical Excellence and Quality" />
							<Paragraph paragraph="To be added later" />
						</div>

						<div className="single-section">
							<Title title="Nursing Research" />
							<Paragraph paragraph="" />
						</div>

						<div className="single-section">
							<Title title="Professional Development" />
							<Paragraph paragraph="To be added later" />
						</div>

						<div className="single-section">
							<Title title="Achievements and more" />
							<Paragraph paragraph="To be added later" />
						</div>

						<div className="single-section">
							<Title title="Awards and Recognitions" />
							<Paragraph paragraph="To be added later" />
						</div> */}

            <div className="single-section">
              <Title title="The DAISY AWARD" />
              <img src="/images/services/support/nursing.png" alt="nursing" />
              <Paragraph paragraph="Help us celebrate the compassion and skills of your fellow extraordinary nurses by nominating them to the DAISY AWARD. <a href='https://www.surveymonkey.com/r/9DC38NY' target='_blank' rel='noopener noreferrer nofollow'>https://www.surveymonkey.com/r/9DC38NY</a> <br/> <a href='www.surveymonkey.com' target='_blank'>www.surveymonkey.com </a>" />
              <img src="/images/services/support/external.png" alt="external" />
            </div>
            <div className="single-section">
              <Title title="Join Almoosa Nursing Team" />
              <Paragraph paragraph="<a href='https://www.linkedin.com/in/almoosa-recruitment-495208142/' target='_blank' rel='noopener noreferrer nofollow'>https://www.linkedin.com/in/almoosa-recruitment-495208142/</a>" />
            </div>
          </div>
        ) : (
          <div className="content">
            {/* **********Arabic Content ********** */}

            <div className="single-section text-center">
              <h3>
                <strong>نتعاون .. نبتكر .. ونصنع فرقاً</strong>
              </h3>
            </div>
            <div className="single-section">
              <Title title="رسالة من رئيسة قسم التمريض" />
              <Paragraph paragraph="شكراَ لاهتمامك بقسم التمريض في مستشفى الموسى التخصصي ..  سواء كنت هنا لتتعلم أو كنت ممرضة ذات خبرة وتبحثين عن نمو وظيفي، يسعدنا أنك بحثت عنا." />
              <Paragraph paragraph="في مستشفى الموسى التخصصي ، تضع ممرضاتنا تجربة المريض أولاً..  نستخدم مواهبنا و تدريبنا السريري لإحداث تأثير في رعاية المرضى. . نعتقد أن التميز في التمريض يحدث عندما نمكن الممرضات عن طريق التعليم المستمر، والموارد المناسبة ، تحت قيادة طموحة و رؤية واضحة في جو عمل يسودة التقدير والاحترام" />
              <Paragraph paragraph="نشق طريقنا الآن إلى رحلة التميز لتحقيق تقدير  Magnet،تم تسمية مستشفيات Magnet المعترف بها على هذا النحو لأنها تجذب وتحتفظ بأفضل المتخصصين في التمريض. بالإضافة إلى ذلك ، تُظهر هذه المستشفيات نتائج أفضل للمرضى وتعليمًا ومشاركة أعلى في التمريض." />
              <Paragraph paragraph="نحن نبحث عن محترفين..عن الممروضون والممرضات مستعدون لبذل جهدًا إضافيًا لإحداث فرق لمريض أو عائلة أو زميل أو منظمة. نحن نقدر الأفكار الخلاقة ونسعى لجعلها حقيقة، وجودك معنا يعني أنك أصبحت جزءاَ من الحل." />
              <Paragraph paragraph="إذا كنت تبحثين عن فرصة جيدة لتنمية مسارك المهني، يرجى إرسال استفساراتك حتى نتمكن من مساعدتك في العثور على أفضل ما يناسبك." />
              <Paragraph paragraph="إذا كنت تريد أن تقدم أفضل ما لديك وأن تكون من بين الأفضل ، فقد وصلت إلى المكان الصحيح. يسعدنا انضمامك إلينا في رحلتنا نحو التعاون والابتكار والتثقيف." />
            </div>

            <div className="single-section">
              <Title title="رسالتنا" />
              <Paragraph paragraph="نقدم رعاية تتمحور حول الإنسان لمرضانا وأسرهم والمجتمع بكفاءة وتعاطف مع الارتقاء بمهنتنا من خلال البحث والتعليم والابتكار. " />
            </div>

            <div className="single-section">
              <Title title="رؤيتنا" />
              <Paragraph paragraph="تقودنا المعرفة ..  وتقوينا المهارة، وتحفزنا  الرحمة لتحقيق عافية ورفاهية الأفراد والمجتمع المكلفون برعايته." />
            </div>

            <div className="single-section">
              <Title title="قيمنا" />
              <Menu
                items={[
                  {
                    text: `<strong>رعاية تتمحور حول الإنسان</strong> –  الأشخاص الذين نعالجهم وأسرهم ومجتمعاتهم وموظفونا هم شركائنا في الرعاية.`
                  },
                  {
                    text: `<strong>الابتكار</strong> – نستخدم أفضل الممارسات الرائدة والكفاءة والتكنولوجيا المتقدمة لتعزيز الشفاء والعافية.`
                  },
                  {
                    text: `<strong>الأخلاق</strong> – ننتهج أعلى المعايير الأخلاقية للمجتمعات التي نخدمها.`
                  },
                  {
                    text: `<strong>التمكين</strong> – نحن نساعد كل شخص نخدمه على أن يصبح أقوى وأكثر ثقة، ويتخذ قراراته الخاصة بشأن حياته.`
                  },
                  {
                    text: `<strong>التميز</strong> – نحقق التميز من خلال بذل قصارى جهدنا في ما نقوم به.`
                  }
                ]}
              />
            </div>

            <div className="single-section">
              <Title title="الأولويات الاستراتيجية للتمريض" />
              <Menu
                items={[
                  {
                    text: `<strong>القيادة التحويلية</strong> <br/> كقادة؛ نحن ندعو إلى التحول ونوجهه من خلال الرؤية المشتركة واتخاذ القرار. نتواصل ونتعاون ونتقدم من أجل تحقيق تغيير إيجابي له تأثير على مستوى المؤسسة. `
                  },
                  {
                    text: `<strong>تعزيز قدرات طاقمنا التمريضي</strong> <br/>يتم تمكين ممرضاتنا على جميع المستويات للتطوير المهني والمشاركة في صنع القرار. نحن ملتزمون بالتعليم المستمر والنمو للنهوض بمهنة التمريض ورعاية المرضى ورفاهية المجتمع.`
                  },
                  {
                    text: `<strong>ممارسة مهنية نموذجية </strong> <br/>تركز الممارسة المهنية للتمريض بمستشفانا على رعاية الإنسان وتدعم تحسين نتائج المرضى وتعزز بيئة عمل آمنة وصحية تغذي التعاون بين المهنيين من أجل أداء فعال .`
                  },
                  {
                    text: `<strong>التطوير</strong> <br/>يتم تشجيع ممرضاتنا ودعمهم للمساهمة في تطوير أبحاث التمريض ودمج أحدث الاكتشافات القائمة على الأدلة في الممارسة لتحسين الرعاية والخدمات.`
                  },
                  {
                    text: `<strong>تحسين تجربة المرضى</strong> <br/>تسعى ممرضاتنا إلى التحسين المستمر لنتائج المرضى ونتائج التمريض ونتائج مكان العمل والنتائج التنظيمية من خلال تطوير وتنفيذ وتكامل ونشر أفضل الممارسات في الممارسة العملية.`
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="الحوكمة المشتركة" />
              <Paragraph paragraph="في مستشفى الموسى التخصصي ، يتم الحفاظ على الرعاية التي تركز على المريض من قبل الممرضات المخولات رسميًا لاتخاذ قرارات بشأن معايير الممارسة السريرية، وتحسين الجودة، والتطوير المهني والبحثي للموظفين. الممرضات على جميع المستويات في مستشفانا هم شركاء أساسيون في النهوض برعاية المرضى من خلال المشاركة المهنية والحوكمة المشتركة." />
            </div>
            <div className="single-section">
              <Title title="نموذج الممارسة المهنية للتمريض" />
              <Paragraph paragraph="تحدد نماذج الممارسة المهنية للتمريض (PPM) وتوجه كيفية ممارسة الممرضات وتعاونهم وابتكارهم وتطويرهم بشكل احترافي لتقديم رعاية جيدة. " />
            </div>
            <div className="single-section">
              <Title title="نظام تقديم الرعاية التمريضية" />
              <Paragraph paragraph="يتحمل الممرضون على جميع المستويات مسؤولية توفير رعاية مستمرة ومتسقة ومختصة. يحتضن نظام تقديم الرعاية التمريضية المريض وعائلته في مركز الرعاية المقدمة. يتزامن هذا مع نموذج الممارسة المهنية وثقافتنا في الرعاية والشفاء. يشارك المريض والأسرة في القرارات المتعلقة بالمريض." />
            </div>
            <div className="single-section">
              <Title title="رحلتنا إلى الماجنت" />
              <div className="sub-single-section">
                <SubTitle title="المعيار الذهبي للتميز في التمريض" />
                <Paragraph paragraph="الاعتراف الدولي المرموق للجودة ماجنيت  Magnet® يٌمنح من المركز الأمريكي لاعتماد مؤهلات التمريض، يعتبر هذا الاعتراف جائزه تُمنح لمؤسسات الرعاية الصحية التي حققت معايير ماجنيتMagnet® في تقديم رعاية ذات جودة استثنائية في مجال التمريض، و الإبداع في الممارسة المهنية للتمريض. وحسب تقييم المرضى فإن شهادة الاعتراف من ماجنيت Magnet® هي أعلى تميز في مجال تقديم أفضل الخدمات التمريضية والمصدر الرئيسي لأفضل الممارسات التمريضية في جميع أنحاء العالم." />
                <div>
                  <Sub_subTitle title="ما هو اعتماد ماجنت للممرضات؟" />
                  <Paragraph paragraph="بالنسبة للممرضات، فإن Magnet يعني التطوير والتقدم المهني داخل المستشفى ، مما يعزز تمكينهم ويوفر لهم قدرًا أكبر من الاستقلالية في بيئة العمل." />
                </div>
                <div>
                  <Sub_subTitle title="ما هو Magnet للأطباء (الفرق متعددة التخصصات)؟" />
                  <Paragraph paragraph="يوفر Magnet إطارًا للتميز في نتائج المرضى، مما يعود بالفائدة على المستشفى بأكملها. تخلق ثقافة Magnet بيئة من الشراكة والتنسيق بين الفريق الطبي بأكمله لتحويل الرعاية من خلال التعاون والابتكار والرعاية الجيدة للمرضى" />
                </div>
                <div>
                  <Sub_subTitle title="ما هو الماجنيت للمريض والمجتمع؟" />
                  <Paragraph paragraph="بالنسبة للمرضى، توفر المستشفيات الحاصلة على اعتماد Magnet أفضل رعاية ومتميزة ، يقدمها أكثر الممرضين الموهوبين والأكفاء ومقدمي الرعاية المحترفين. توضح الأبحاث أن Magnet يوفر فوائد محددة لمنظمات الرعاية الصحية ومجتمعاتها، مثل:" />
                  <Menu
                    items={[
                      {
                        text:
                          'زيادة رضا المريض، وتوافر المساعدة واستلام معلومات الخروج.'
                      },
                      {
                        text: 'انخفاض معدلات الوفاة داخل المستشفى.'
                      },
                      {
                        text: 'انخفاض معدلات الفشل في الإنقاذ.'
                      },
                      {
                        text: 'معدلات أقل للإصابة بالعدوى.'
                      },
                      {
                        text: 'ارتفاع الرضا الوظيفي بين الممرضات.'
                      }
                    ]}
                  />
                </div>
                <div>
                  <Sub_subTitle title="لماذا يتقدم مستشفى الموسى التخصصي بطلب للحصول على Magnet؟" />
                  <Paragraph paragraph='نحن ملتزمون بتقديم رعاية تتمحور حول الإنسان، ويعتبر تحقيق Magnet شهادة مميزة وتأكيدًا على أن مستشفى الموسى التخصصي يوفر رعاية استثنائية ذات جودة عالمية للمرضى. بما يتناسب مع رؤية المستشفى وهو ان نكون نظام صحي عالمي ينشر الصحة ويحارب المرض"' />
                </div>
              </div>
            </div>

            <div className="single-section">
              <Title title="جائزة DAISY" />
              <img src="/images/services/support/nursing.png" alt="nursing" />
              <Paragraph paragraph="اشكر ممرضك\ ممرضتك  اليوم.. <br/> تأسست جائزة DAISY من قبل مؤسسة DAISY لتخليد ذكرى J. Patric Barnes الذي توفي في الـ 33 من عمره من جراء مرض مناعة ذاتية." />
              <Paragraph paragraph="انبهرت عائلة بارنز بالمهارات الطبية والعناية المتميزة للممرضات اللاتي اعتنين بـ باتريك، لذلك ابتكروا هذه الجائزة الدولية ليقولوا 'شكراً' للممرضات في كل مكان." />
              <Paragraph paragraph="ابحث عن نماذج الترشيح لجائزة DAISY ، تحت رعاية مستشفى الموسى التخصصي <br/> ستتواجد لجنة جائزة DAISY على مدار العام.<br/> <a href='https://www.surveymonkey.com/r/9DC38NY' target='_blank' rel='noopener noreferrer nofollow'>https://www.surveymonkey.com/r/9DC38NY</a> <br/> <a href='www.surveymonkey.com' target='_blank' rel='noopener noreferrer nofollow'>www.surveymonkey.com </a>" />
              <img src="/images/services/support/external.png" alt="external" />
            </div>
            <div className="single-section">
              <Title title="انضم لنا" />
              <Paragraph paragraph="<a href='https://www.linkedin.com/in/almoosa-recruitment-495208142/' target='_blank' rel='noopener noreferrer nofollow'>https://www.linkedin.com/in/almoosa-recruitment-495208142/</a>" />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Nursing;

// small components
const Title = ({ title }) => {
  return <h3 className="nursing-title">{title}</h3>;
};

const SubTitle = ({ title }) => {
  return <h4 className="nursing-subtitle">{title}</h4>;
};

const Sub_subTitle = ({ title }) => {
  return <h5 className="nursing-sub-subtitle">{title}</h5>;
};

const Paragraph = ({ paragraph }) => {
  return (
    <p className="nursing-paragraph">
      <Markdown>{paragraph}</Markdown>
    </p>
  );
};

const Menu = ({ items }) => {
  return (
    <ul className="nursing-menu">
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
