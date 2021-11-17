import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

import Card from './Card';
const data = [
  {
    id: 1,
    en: {
      title: 'Joint Commission International Accreditation- JCI',
      content: `<a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'>JCI</a> is an independent, not for profit organization accredits and certify healthcare organizations and programs across the globe. <a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'>JCI</a> accreditation and certification is recognized as a global leader for healthcare quality of care and patient safety.<br/><br/> (ASH) started <a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'>JCI</a> accreditation journey in the year <strong>2009</strong> and successfully achieved the gold seal for <a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'>JCI</a>. Hospital achieved 4 successful accreditations from <a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'>JCI</a>. By implementing <a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'>JCI</a> standard in ASH the patient care become standardized which directly increases patient satisfaction. <br/><br/> ASH is continuously working on implementing most recent evidence-based practice to achieve highest level of care in patient and to improve patient safety and quality of care in the hospital. `
    },
    ar: {
      title: 'اعتماد اللجنة الدولية المشترك JCI',
      content: `تعتبر اللجنة الدولية المشتركة ممن أرقى الهيئات عالميًا في مجال تقييم مستويات الجودة في المنشآت الصحية ويعتبر اعتمادها من أهم  الاعتمادات العالمية المتخصصة في جودة منشآت الرعاية الصحية <br/><br/>
        فخورون بحصولنا على <a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'>اعتماد اللجنة الدولية المشتركة (JCI)</a> اربع مرات متتالية خلال أعوام <strong>2009</strong> و<strong>2012</strong> و<strong>2015</strong> و <strong>2018</strong>.<br/><br/>
        حيث أقرت اللجنة الدولية المشتركة <a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'>JCI</a> أن مستشفى الموسى التخصصي يلتزم بأعلى المعايير الدولية في مراقبة الجودة وسلامة المرضى<br/><br/>
        يركز الاعتماد  على جودة الرعاية المقدمة  للمرضى، وعلى إدارة المؤسسة والأنظمة الطبية المعمول بها، كما تعمل معايير<a href="https://www.jointcommissioninternational.org" target='_blank' rel='noopener noreferrer nofollow'> JCI </a>على تحديد وتقييم الوظائف الرئيسية بالمستشفيات ومؤسسات الرعاية الصحية، وتتضمن هذه الوظائف تحقيق الأهداف العالمية المتعلقة بسلامة المرضى ومكافحة العدوى، والتعليم، وإدارة المعلومات والموارد البشرية، ونُظم إدارة المرافق المختلفة، وكذلك النظم القيادية والإدارية.
      `
    }
  },
  {
    id: 2,
    en: {
      title:
        'Saudi Central Board for Accreditation of Healthcare Institutions- CBAHI ',
      content: `Almoosa Specialist Hospital in <strong>2013</strong> was accredited by the <a href="https://portal.cbahi.gov.sa/arabic/home" target='_blank' rel='noopener noreferrer nofollow'>Saudi Central Board for Accreditation</a> of Healthcare Institutions, following the evaluation of 811 standards.<br/><br/>
      CBAHI is the official board authorized to grant accreditation to all healthcare facilities in Saudi Arabia. The Central Board's prominent role is establishing and evaluating quality standards for health care and patient safety in all Saudi health care establishments.<br/><br/>
      The hospital achieved re-accreditation in in <strong>2017</strong>, With 99.11 success rate`
    },
    ar: {
      title: 'اعتماد المركز السعودي لاعتماد المنشآت الصحية CBAHI',
      content: `المركز السعودي لاعتماد المنشآت الصحية هو الهيئة الرسمية المسؤولة عن منح الاعتماد لجميع منشآت الرعاية الصحية في المملكة العربية السعودية.<br/><br/>
        يتمثل الدور الرئيسي لها في وضع معايير الجودة الأساسية للرعاية الصحية وسلامة المرضى، وتقييمها في جميع مؤسسات الرعاية الصحية السعودية. <br/><br/>
        حصل مستشفى الموسى على <a href="https://portal.cbahi.gov.sa/arabic/home" target='_blank' rel='noopener noreferrer nofollow'>اعتماد المركز السعودي لاعتماد المنشآت الصحية</a> مرتين على التوالي في عام   <strong>2013</strong>، <strong>2017</strong> ,وفي عام <strong>2021</strong> بنسبة 99.11% 
      `
    }
  },
  {
    id: 3,
    en: {
      title:
        'Chamber of Commerce Award for Best Facility atthe Major Economic Entities Level',
      content: `Almoosa Hospital won the Chamber of Commerce Award in <strong>2014</strong>, which is the first award to the development sectors in the Al-Ahsa region to contribute to the development and upgrading of local performance.
      <br/><br/> The award is one of the Chamber's initiatives that aim to support the business sector in Al-Ahsa, improve its performance, and honor the companies and institutions that have contribute distinctly to the development boom taking place in the Kingdom.`
    },
    ar: {
      title:
        'جائزة الغرفة التجارية كأحسن منشأة على مستوى الكيانات الاقتصادية الكبرى',
      content: `الجائزة هي إحدى مبادرات الغرفة التجارية بالاحساء  التي تهدف إلى دعم قطاع الأعمال في الأحساء، وتحسين أدائه، وتكريم الشركات والمؤسسات التي ساهمت بشكل متميز في ازدهار التنمية التي تشهدها المملكة العربية السعودية. <br/>
        حصل مستشفى الموسى على جائزة الغرفة التجارية في عام  <strong>2014</strong> على مستوى الكيانات الاقتصادية الكبرى ، وهي الجائزة الأولى لقطاعات التطوير - في منطقة الأحساء - للمساهمة في تطوير ورفع مستوى الأداء المحلي.`
    }
  },
  {
    id: 4,
    en: {
      title: 'HCCAP',
      content: `In <strong>2015</strong>, the Nutrition and Food Services Department at Almoosa Hospital won accreditation by <a href="https://www.fda.gov/food/hazard-analysis-critical-control-point-haccp/haccp-principles-application-guidelines" target='_blank' rel='noopener noreferrer nofollow'>HACCP</a>, an international food safety certification in all stages, from catering, storage, cooking, to serving the meal to the final consumer. The criteria have been audited by an independent team of international surveyors from the United Kingdom authorized by the HACCP.<br/><br/>
      `
    },
    ar: {
      title: ' شهادة سلامة الخدمات الغذائية من HACCP',
      content: `في عام <strong>2015</strong>، حصل قسم الخدمات الغذائية في مستشفى الموسى التخصصي على الاعتماد من قبل <a href="https://www.fda.gov/food/hazard-analysis-critical-control-point-haccp/haccp-principles-application-guidelines" target='_blank' rel='noopener noreferrer nofollow'>(Hazard Analysis and Critical Control Points – HACCP)</a>  وهي شهادة دولية لسلامة الخدمات الغذائية في جميع المراحل، من التورريد الى والتخزين والطبخ ، إلى تقديم الوجبة إلى المستهلك النهائي. وقد قام بمراجعة المعايير فريق مستقل من المفتشين الدوليين من المملكة المتحدة .`
    }
  },
  {
    id: 5,
    en: {
      title: 'Golden Designation from the Planetree Organization',
      content: `<a href="https://planetree.org/certification/about-planetree/" target='_blank' rel='noopener noreferrer nofollow'>Planetree</a> is an international nonprofit organization that promotes patient-centered care in healthcare. <br/> <br/> Guided by their principles and framework, the hospital embarked on pursuing its <a href="https://planetree.org/certification/about-planetree/" target='_blank' rel='noopener noreferrer nofollow'>Planetree</a> Journey. It started in the latter part of <strong>2014</strong> and was, later received the recognition of <a href="https://planetree.org/certification/about-planetree/" target='_blank' rel='noopener noreferrer nofollow'>Planetree</a> Silver Merit Certification for Excellence in Person-Centered Care in <strong>2015</strong>. It was then, in August <strong>2017</strong>, that the hospital achieved the Golden Merit Certification for Excellence in Person-Centered Care and was Re-Certified in the year <strong>2020</strong>.<br/><br/> Being the First Hospital in the Middle East to be awarded as a <a href="https://planetree.org/certification/about-planetree/" target='_blank' rel='noopener noreferrer nofollow'>Planetree</a> Certified hospital, it continues to provide high-quality service and care to its patients. True to its commitment to employing Person-Centered Care, initiatives have been embedded in the daily practices in the organization. <br/> <br/> Person-Centered Care in Al Moosa Specialist Hospital at a glance <br/> <br/> <a href="/about/awards/golden-designation"><strong>Read more ...</strong></a>`
    },
    ar: {
      title: 'الوسام الذهبي من منظمة Planetree للرعاية المتركزة حول المريض',
      content: `تعتبر <a href="https://planetree.org/certification/about-planetree/" target='_blank' rel='noopener noreferrer nofollow'>Planetree</a> المنظمة الرائدة حول العالم في تحسين تجربة المرضى ونشر ثقافة التعاطف والانسانية في الرعاية الصحية <br/><br/>
        حصل مستشفى الموسى التخصصي  على الوسام الفضي في عام <strong>2015</strong> كأول مستشفى في الشرق الأوسط  يحصل على هذا الوسام <br/><br/>
        وفي عام <strong>2017</strong>، منحت منظمة <a href="https://planetree.org/certification/about-planetree/" target='_blank' rel='noopener noreferrer nofollow'>Planetree</a>  الوسام الذهبي لمستشفى الموسى التخصصي لدوره في توفير الرعاية الصحية المتركزة حوال الانسان ولتميزه في مجال تجربة المرضى <br/><br/>
        في عام <strong>2020</strong> حصل المسشتفى مرة أخرى على الوسام الذهبي مع مرتبة الشرف لالتزامه ومواصلته تقديم رعاية صحية تتميز بالتعاطف والانسانية وتضع المريض في محور اهتمامها  <br/><br/>
        <a href="/about/awards/golden-designation" target='_blank' rel='noopener noreferrer nofollow'><strong>اقرأ المزيد ... </strong></a>`
    }
  },
  {
    id: 6,
    en: {
      title: 'College of American Pathologists - CAP',
      content: `ASH Laboratory won accreditation by the <a href="https://www.cap.org/" target='_blank' rel='noopener noreferrer nofollow'>American College of Pathologists (CAP)</a> in <strong>2017</strong>. This marked a significant shift in the hospital’s level of patient-centered care by
      improving the quality of laboratory services,
      and aiming to conform to best practices for patient safety in the laboratory. <br/> <br/>
      This accreditation is a sign of the Almoosa Specialist Hospital Laboratory’s a commitment to quality and a pact with the community that the hospital will achieve the highest standards of laboratory services.
      The laboratory has been always keen to be recognized for its implementation of international standards, particularly those measured by the <a href="https://www.cap.org/" target='_blank' rel='noopener noreferrer nofollow'>CAP</a> team from the United States. 
  `
    },
    ar: {
      title: 'اعتماد المختبر من الكلية الأمريكية لعلوم الأمراض - CAP',
      content: `تعد الكلية الامريكية لعلماء الامراض والتشريح <a href="https://www.cap.org/" target='_blank' rel='noopener noreferrer nofollow'>(CAP- College of American Pathologists)</a> هي أعلى الجهات العلمية التي تضع معايير الجودة للمختبرات حول العالم <br/> <br/>
        في عام <strong>2017</strong> حصل مختبر مستشفى الموسى التخصصي على اعتماد الكلية الأمريكية لعلماء الأمراض  وقد شكل ذلك تحولاً كبيراً في مستوى  جودة الخدمات  والالتزام بأفضل الممارسات في مجال سلامة المرضى في المختبر `
    }
  },
  {
    id: 7,
    en: {
      title: `King Abdulaziz Quality Award <strong>2018</strong> - KAQA   (Silver Award)`,
      content:
        'King Abdulaziz Quality Award: <a href="https://kaqa.org.sa/" target="_blank" rel="noopener noreferrer nofollow">KAQA</a> aims at honoring the best performing establishments that achieve the highest standards of quality by obtaining the appropriate recognition at the national level for their achievements and ranking among the best local establishments.'
    },
    ar: {
      title: 'وسام الملك عبد العزيز للجودة - KAQA',
      content: `حقق مستشفى الموسى التخصصي بالأحساء انجازًا كبيرًا حيث فاز <a href="https://kaqa.org.sa/" target='_blank' rel='noopener noreferrer nofollow'> بجائزة الملك عبد العزيز للجودة</a> في دورتها الرابعة لعام <strong>2018</strong>م، ويُعد المستشفى الخاص الوحيد بالمملكة الذي يفوز بها لاجتيازه المعايير التي حددتها الجائزة. <br/><br/>
        تهدف الجائزة إلى تكريم أفضل المنشآت ذات الأداء المتميز والتي تحقق أعلى مستويات الجودة، وتحفيز القطاعات الإنتاجية والخدمية والتعليمية والصحية والحكومية لتطبيق أسس وتقنيات الجودة الشاملة من أجل رفع مستوى جودة الأداء وتفعيل التحسين المستمر لعملياتها الداخلية وتحقيق رضا المستفيدين. <br/><br/>
         <a href="https://kaqa.org.sa/"> جائزة الملك عبد العزيز للجودة</a> تحرص بشكل كبير على حوكمة عمليات التقييم والتحكيم لضمان الحيادية والعدالة، واتاحة الفرصة للاستفادة من الخبرات الوطنية والدولية لمزيد من المهنية والاحترافية في أعمالها.`
    }
  },
  {
    id: 8,
    en: {
      title: `Bariatric Center of Excellence (BCOE) from SRC in <strong>2018</strong>`,
      content: `The global standard for quality of surgical care from <a href="https://www.surgicalreview.org/" target='_blank' rel='noopener noreferrer nofollow'>SRC</a>. It is focused on improving the safety and quality of patient care and lowering the cost associated with successful treatment.`
    },
    ar: {
      title: 'اعتماد مركز السمنة كمركز امتياز من SRC',
      content: `<a href="https://www.surgicalreview.org/" target='_blank' rel='noopener noreferrer nofollow'> SRC </a> هي منظمة غير ربحية تمنح اعتمادات عالمية للمستشفيات والجراحين بهدف تحسين سلامة المرضى وتقليل معدلات العدوى والوفيات في العمليات.<br/><br/>في عام <strong>2018</strong> أصبح مركز السمنة في مستشفى الموسى التخصصي مركز امتياز في جراحات السمنة ومنح الاعتماد بجدراة من منظمة <a href="https://www.surgicalreview.org/" target='_blank' rel='noopener noreferrer nofollow'>SRC</a> والتي  تعد المعيار العالمي للجودة في جراحات السمنة `
    }
  },
  {
    id: 9,
    en: {
      title: `C. Everett Koop National Health Award - KOOP <strong>2019 </strong>`,
      content: `The C. Everett Koop National Health Awards recognize outstanding worksite health promotion and improvement programs. The Health Project's mission is to seek out, evaluate, promote, and disseminate the lessons learned from good health promotion and disease prevention programs with demonstrated effectiveness in influencing personal health habits and cost-effective use of health care resources. We achieved bronze award.  `
    },
    ar: {
      title: 'جائزة C. Everett Koop الوطنية لتعزيز الصحة في بيئات العمل',
      content: `جائزة C. Everett Koop الوطنية هي جائزة تمنح لأصحاب البرامج المتميزة لتعزيز وتحسين الصحة في مواقع العمل. الجائزة عبارة عن مبادرة مقدمة من مشروع الصحة (The Health Project) وهي منظمة غير ربحية تأسست عام <strong>1994 </strong>، The Health Project قامت بمنح جوائز سنوية للمؤسسات التي تملك برامج مثبتة لتحسين الصحة وتوفير التكاليف من خلال جائزة C. Everett Koop الوطنية للصحة. <br/><br/>
        تركز الجائزة على تأسيس برامج تعزيز الصحة والوقاية من الأمراض وتقييمها وتعزيزها ونشرها، مع إثبات فعاليتها في التأثير على العادات الصحية الشخصية والاستخدام الأمثل لموارد الرعاية الصحية.<br/><br/>
        في عام <strong>2019 </strong> حصل مستشفى الموسى على مرتبة الشرف من  C. Everett Koop `
    }
  },
  {
    id: 10,
    en: {
      title: 'HIMSS stage 7 EMRAM',
      content: `
      ASH has proudly achieved the highest level of the <a href="https://www.himss.org">HIMSS</a> Analytics Electronic Medical Records Adoption Model (EMRAM) which scores hospitals from 0-7 relative to their inpatient electronic medical records (EMR) capabilities. <br/><br/>
      This accreditation is a clear representation of the hospital’s efforts to advance health and wellness for everyone, everywhere through health information and technology and our ongoing commitment to improving patient safety and the overall quality of clinical care through the effective use and deployment of electronic medical record technology . <br/><br/>
      In ASH, Technology is embedded in everything we do, in all clinical processes and our nursing workflows to improve patient safety and the overall quality of clinical care.
      <a href="https://www.himss.org">HIMSS (Healthcare Information and Management Systems Society)</a> is an international organization which supports hospitals to benchmark and improve their use of digital technology, through various digitalized healthcare adoption models, ranging from 0-7.`
    },
    ar: {
      title:
        'الحصول  على المستوى السابع من اعتماد الجمعية الأمريكية لنظم إدارة المعلومات الصحية HIMSS 7',
      content: `حصل مستشفى الموسى التخصصي على المستوى السابع من اعتماد الجمعية الأمريكية لنظم إدارة المعلومات الصحية يعد هذا الانجاز انجازاً مهماً في رحلته نحو الابتكار في تكنولوجيا المعلومات . كما يدل على مدى اهتمام المستشفى  بسلامة المرضى والتزامه بتطوير وجودة الخدمات واستخدام الملف الالكتروني بفاعلية قصوى  ، يذكر أن المستشفى حصل على اعتماد المستوى السادس عام 2019  .<br/><br/>
      <a href="https://www.himss.org">HIMSS</a> هي منظمة غير ربحية، امريكية تقدم استشارات رائدة في تكنولوجيا المعلومات الصحية ، وذلك من خلال توظيف كافة خبراتها وقدراتها لتطوير الجودة والسلامة والكفاءة في الرعاية الصحية وتعمل على تمكين القادة من استخدام المعلومات الصحيحة عند اتخاذ القرارات<br/><br/> يشمل التصنيف ثماني مراحل تبدأ من المستوى صفر إلى المستوى السابع لتقييم مدى فاعلية المستشفيات في تطبيق الانظمة المعلوماتية والتكنلوجيا الصحية.
      `
    }
  },
  {
    id: 11,
    en: {
      title: ' American Association of Blood Banks - AABB',
      content: `Almoosa Specialist Hospital is also accredited by the <a href="https://www.aabb.org/" target='_blank' rel='noopener noreferrer nofollow'>American Association of Blood Banks</a>, which is granted to blood banks that conform to the AABB standards and are surveyed every two years for administrative and practical organization and quality control.<br/> <br/> The Hospital achieved re-accreditation recently in month Mar 2021`
    },
    ar: {
      title: 'اعتماد بنك الدم من الجمعية الأمريكية AABB',
      content: `تعد الجمعية الأمريكية لبنوك الدم <a href="https://www.aabb.org/" target='_blank' rel='noopener noreferrer nofollow'>AABB - (American Association of Blood Banks)</a>هي أعلى الجهات العلمية، والأشد صرامة والتي تعنى بمنح الاعتمادات لبنوك الدم داخل الولايات المتحدة الأمريكية وحول العالم . <br/><br/>
        يمنح الاعتماد لبنوك الدم التي تتوافق مع معايير الجمعية الامريكية لبنوك الدم  حيث يتم متابعتها مرة كل عامين  وذلك بهدف تحسين جودة الأداء في فحص دم المتبرعين و نقل الدم الآمن للمرضى و تحقيق الاجراءات والسياسات الخاصة بسلامة المرضى و المتبرعين على حدٍ سواء.<br/><br/>
        في عام <strong>2019 </strong> تم اعتماد مستشفى الموسى التخصصي من قبل الجمعية الأمريكية لبنوك الدم كأول مستشفى في منطقة الأحساء يحصل على هذه الاعتماد الدولي `
    }
  },
  {
    id: 12,
    en: {
      title: ' Our Journey to Magnet',
      content:
        '<a href="https://www.nursingworld.org/organizational-programs/magnet">Magnet Recognition Program</a> is the gold standard given to hospitals for quality patient care, nursing excellence and innovations in professional nursing practice.'
    },
    ar: {
      title: 'رحلتنا إلى الماجنت',
      content: ` تعتبر شهادةماجنيت <a href="https://www.nursingworld.org/organizational-programs/magnet" target='_blank' rel='noopener noreferrer nofollow'>Magnet</a>   أعلى اعتماد  في مجال التمريض  والمصدر الرئيسي لأفضل الممارسات التمريضية في جميع أنحاء العالم <br/><br/>
        بدأنا رحلتنا نحو الحصول على اعتماد <a href="https://www.nursingworld.org/organizational-programs/magnet" target='_blank' rel='noopener noreferrer nofollow'>Magnet</a>    في عام <strong>2020</strong>  وقطعنا شوطا كبير في تطوير فريق التمريض مهنيا وتحسين الرعاية المقدمة للمرضى <br/><br/>
        نحن نحرص على الحصول على إعتماد الـــ  <a href="https://www.nursingworld.org/organizational-programs/magnet" target='_blank' rel='noopener noreferrer nofollow'>Magnet</a> لأننا ملتزمون بتقديم رعاية بمعايير عالمية عالية متركزة حول المريض `
    }
  },

  {
    id: 13,
    en: {
      title: ' ACR - American College of Radiology',
      content: `<a href="https://www.acr.org/" target='_blank' rel='noopener noreferrer nofollow'>ACR</a> accreditation is recognized as the gold standard in medical imaging.  It helps assure our patients that we provide the highest image quality and safety and that our facility meets equipment, medical personnel, and quality assurance requirements. During the accreditation process, the <a href="https://www.acr.org/" target='_blank' rel='noopener noreferrer nofollow'>ACR</a> evaluates equipment and staff to promote high standards in all aspects of practice and patient safety. You can rest assured that we offer top-quality services.`
    },
    ar: {
      title: ' اعتماد الكلية الأمريكية للأشعة - ACR',
      content: `تعتبر الكلية الأميركية للأشعة <a href="https://www.acr.org/" target='_blank' rel='noopener noreferrer nofollow'> ACR - American College of Radiology </a> ACR أكبر وأقدم هيئة أعتماد للتصوير الطبي. حيث ينتسب اليها أكثر من <strong>34000 </strong>طبيب يعملون على  التأكد من التزام قسم الأشعه  بأعلى المعايير وذلك بإخضاع كل من الأجهزة والطاقم الطبي والفني في القسم لمجموعة من الأختبارات الصارمة
    وتقديم توصيات مصممة لتحسين السلامة والجودة والكفاءة والفعالية لقسم الأشعه بالإضافة إلى مراجعة مؤهلات الأطباء والفنين والإداريين  لضمان جودة وراحة المريض. <br/><br/>
    في عام <strong>2020</strong> حصل قسم الاشعة في مسشتفة الموسى التخصصي على اعتماد <a href="https://www.acr.org/" target='_blank' rel='noopener noreferrer nofollow'>ACR </a>  الامر الذي يعني حصول مرضانا على التصوير الدقيق والعالي الجودة الذي يحتاجه مقدمي الرعاية لاكتشاف وتشخيص الامراض بشكل سريع ودقيق . 
    `
    }
  },
  {
    id: 14,
    en: {
      title: ' ASHP accreditation',
      content: `The Almoosa Specialist Hospital achieved the  American Society of Health-System Pharmacists – <strong>ASHP</strong> accreditation in September <strong>2021</strong>, to be  the 2nd international hospital to achieve <strong>ASHP</strong> outside the US . <br/><br/> (ASHP) is a professional organization representing the interests of pharmacists who practice in hospitals, health maintenance organizations, long-term care facilities, home care, and other components of health care.
                <br/> <br/> Accreditation criteria : <ul> <li>Quality</li> <li>Medication safety</li> <li>Leadership and management</li> <li>Education and Training</li> <li>Information management</li> <li>Supply chain</li> <li>Drug policy and drug information</li> </ul>`
    },
    ar: {
      title: 'اعتماد ASHP',
      content: `حصل مستشفى الموسى التخصصي على اعتماد الجمعية الأمريكية لصيادلة النظام الصحي - <strong>ASHP</strong> في سبتمبر <strong>2021</strong>، ليكون ثاني مستشفى دولي يحصل على اعتماد ASHP خارج الولايات المتحدة.
      . <br/><br/> <strong>(ASHP)</strong> هي منظمة مهنية تمثل شؤون الصيادلة في المستشفيات ومؤسسات الصحة ومرافق الرعاية طويلة الأجل والرعاية المنزلية ومكونات الرعاية الصحية الأخرى. <br/> <br/> معايير الاعتماد : <ul> <li>جودة</li> <li>سلامة الدواء</li> <li>القيادة والإدارة</li> <li>التعليم والتدريب</li> <li>دارة المعلومات</li> <li>الموردين</li> <li>السياسة الدوائية والمعلومات الدوائية</li> </ul>`
    }
  },
  {
    id: 15,
    en: {
      title: 'ISO 45001',
      content: `Almoosa Specialist Hospital always strive to implement world class standard, and this makes us to go for <strong>ISO</strong> standards for Nutrition and Food Services department by replacing HCCAP. <br/> <br/> In <strong>2018</strong>, the Nutrition and Food Services Department at Almoosa Hospital successfully achieved ISO accreditation .`
    },
    ar: {
      title: ' اعتماد الأيزو 45001',
      content: `يسعى مستشفى الموسى دائمًا لتطبيق المعايير العالمية ويجلعنا ذلك ملتزمين تجاه تطبيق معايير الأيزو لقسم خدمات التغذية والغذاء عن طريق استبدال HCCAP.
<br/> <br/> في عام <strong>2018</strong> نجح قسم التغذية وخدمات الغذاء في مستشفى الموسى في الحصول على اعتماد الأيزو 45001`
    }
  }
];
const index = ({ t }) => {
  const { language } = i18n;
  return (
    <section className="awards">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={4} />
          </Col>
          <Col sm="12" md="8">
            <Row>
              <Col>
                <h2>{t('menu:awards')}</h2>
              </Col>
            </Row>
            <Container>
              <Row className="mt-5">
                {data.map(item => (
                  <Col xl={6} className="col_1">
                    <Card item={item} key={item.id} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withTranslation('menu')(index);
