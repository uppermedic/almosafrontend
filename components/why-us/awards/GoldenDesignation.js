import React from 'react';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';

const GoldenDesignation = () => {
  const { language } = i18n;
  return (
    <section className="golden-designation">
      <div className="head-banner">
        <div className="container">
          <h2>
            {(language == 'en' &&
              'Golden Designation from the Planetree Organization') ||
              'الوسام الذهبي من منظمة بلانتري '}
          </h2>
        </div>
      </div>
      <div className="container">
        {/* ***********English Content*********** */}
        {language == 'en' && (
          <div className="content">
            <div className="single-section">
              <Paragraph paragraph="At Al Moosa Specialist Hospital, we turn Illness to Wellness. We believe that in order to achieve this, it requires more than just a treatment regimen but a caring attitude and an atmosphere conducive to healing. Thus, Person-Centered Care is a key element in a thriving healthcare organization to achieve such holistic care that will benefit not only the patients but the staff and community alike." />
              <Paragraph paragraph="To attain this, our hospital partnered with the Planetree organization. Founded in <strong>1978 </strong>, Planetree is an international nonprofit organization that promotes patient-centered care in healthcare. Its mission is to establish and evaluate standards for healthcare providers based on a simple philosophy of designing healthcare services to suit patient needs, enhancing the role of personal compassion and human interaction in patient care, providing education and information resources in healthcare institutions, and highlighting the role of health care providers in promoting human communication, independence, freedom, family, friends, social support, and nutrition in healing and educating patients." />
              <Paragraph paragraph="Guided by their principles and framework, the hospital embarked to pursue its own Planetree Journey. Started in the latter part of the year <strong>2014  </strong>and was, later on, received the recognition of Planetree Silver Merit Certification for Excellence in Person-Centered Care in <strong>2015 </strong>. It was then in August 2017, that the hospital achieved the Golden Merit Certification for Excellence in Person-Centered Care and was Re-Certified in the year <strong>2020</strong>." />
              <Paragraph paragraph="Being the First Hospital in the Middle East to be awarded as a Planetree Certified hospital, it continues to excel in providing high-quality service and care to its patients. True to its commitment to employing Person-Centered Care, initiatives have been embedded in the daily practices in the organization." />
            </div>
            <div className="single-section">
              <Title title="Initiatives for Patient" />
              <Menu
                items={[
                  {
                    text: 'Care Partner Program :',
                    subItems: [
                      "At Al Moosa Specialist Hospital, we value the importance of family and friends in the patient's overall healing. That is why we encourage family members to partner with us in enhancing the hospital experience of your loved ones by allowing you to care for them. A Care Partner can be a spouse, family members, a significant other, or a friend chosen by the patient to learn ways of supporting his/her hospitalized loved one."
                    ]
                  },
                  {
                    text: 'Valet Parking Services :',
                    subItems: [
                      'We offer you an unrivalled valet parking service that is being offered to the visitors and clients for a minimum fee of <strong>SR </strong> <strong>10 </strong>for the first <strong>2</strong> hours.'
                    ]
                  },
                  {
                    text: 'Bed Side Reporting :',
                    subItems: [
                      'Every shift change, patients are encouraged to participate in the daily bedside reporting. The outgoing and the incoming caregivers on duty talk about the patient plan of care, plan for the day, and safety check.'
                    ]
                  },
                  {
                    text: 'Open Medical Records :',
                    subItems: [
                      'Open Medical Records and Patient Portal, and Almoosa App allow patients to view their medical records in terms of their Laboratory and Radiologic results and their prescribed medications to take.'
                    ]
                  },
                  {
                    text: 'Patient Directed Visitation :',
                    subItems: [
                      'Al Moosa Specialist Hospital allows visitation that gives the patient the preference for their visitation.'
                    ]
                  },
                  {
                    text: '24hr Virtual Visitation:',
                    subItems: [
                      'Visitation that allows the patient to be visited by his/her loved ones virtually at their own preferred timings .'
                    ]
                  },
                  {
                    text: 'Quiet Time :',
                    subItems: [
                      'At Al Moosa Specialist Hospital, we offer you a quiet & peaceful place to stay and recover. Quiet time happens between <strong>2300H (11:00pm) </strong>  until <strong>0500H (5:00pm)  </strong> to which limited movement in the halls, keeping the level of your voice low and silencing your phone is expected.'
                    ]
                  },
                  {
                    text: 'Patient Choice Award :',
                    subItems: [
                      "To acknowledge top-performing physicians who have gotten a high accumulated percentage out from their Press Ganey scores – an integrated survey that asks patient-centered questions and gives clients the most comprehensive picture of their patient's care experiences."
                    ]
                  },
                  {
                    text: 'Art Carts/Crafts and Activities in Pedia Ward :',
                    subItems: [
                      'Scheduled rounds by the event officer, offering a variety of activities that a patient can choose from. They range from coloring books, art crafts and the like that the patient will surely enjoy. It is being offered to Pediatric patients admitted to the hospital as a positive distraction.'
                    ]
                  },
                  {
                    text: 'Story Hour for Pedia patients :',
                    subItems: [
                      'Aside from the art crafts being offered to Pediatric patients, scheduled story hour by the Social Worker staff is also integral to make the hospital stay of the patient memorable'
                    ]
                  },
                  {
                    text: 'Playstation/Xbox game :',
                    subItems: [
                      'Our Pedia Ward also offers Playstation/Xbox which the patient can play whenever they like it during their hospital stay as long as their conditions permits.'
                    ]
                  },
                  {
                    text: 'Music Time:',
                    subItems: [
                      'Music time is an initiative being offered to patients and staff. It started when one former patient of the hospital volunteered to provide his musical expertise to render music through playing his violin.'
                    ]
                  },
                  {
                    text: 'Winter Cart:',
                    subItems: [
                      'Simple treats are offered to the patient during the winter season, serving sweets, dates, snacks, and traditional coffee.'
                    ]
                  },
                  {
                    text: 'Wellness stairs:',
                    subItems: [
                      'Al Moosa Specialist Hospital employs enabling inscriptions and visual images placed in the stairways to encourage staff and visitors to use the stairs.'
                    ]
                  },
                  {
                    text: 'Medication Delivery:',
                    subItems: [
                      'Delivery of medication to patients was one of the initiatives conceived during the lockdown. Being true to its commitment of providing holistic person-centered care to its patient, Al Moosa Specialist hospital extends its help to deliver the medication right at the patient’s doorsteps due to lockdown and curfew imposed.'
                    ]
                  },
                  {
                    text: 'Provision of transport for HDU patients:',
                    subItems: [
                      'Al Moosa Specialist Hospital provides transport services to its <strong>HDU  </strong> patients especially to patient who doesn’t have a constant transport from their home to the hospital and vice versa. '
                    ]
                  },
                  {
                    text: 'Communication Boards:',
                    subItems: [
                      'Communication Boards are strategically placed in the patient rooms to encourage constant communication and information sharing between the caregivers and the patient.'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="Initiatives for Staff" />
              <Menu
                items={[
                  {
                    text: 'Thank You and Birthday Card from CEO : ',
                    subItems: [
                      'Celebrating a birthday in Al Moosa Specialist Hospital comes with a twist. Each staff who has a scheduled birthday will receive birthday card greetings signed by the CEO himself.'
                    ]
                  },
                  {
                    text: 'Caregiver of the month and Caregiver of the Year :',
                    subItems: [
                      'Acknowledging exceptional caregivers and caring for the Caregiver initiative is having the Caregiver of the Month/Year award. Being given and rewarded to caregivers who are excellent and exceeded their expected clinical efforts.'
                    ]
                  },
                  {
                    text: 'Diwaniyah :',
                    subItems: [
                      'It is a gathering with the leaders and caregivers to let their voices be heard. It is open for all to let everyone get the information right from the leaders themselves.'
                    ]
                  },
                  {
                    text: 'Lunch with the CEO :',
                    subItems: [
                      'An informal meeting with the <strong>CEO   </strong> , held every quarter participated by frontline staff from every department. Conversation among the participants and the <strong>CEO   </strong>  revolves around the department and individual concerns, suggestions and ideas.'
                    ]
                  },
                  {
                    text: 'Breakfast with the Bosses :',
                    subItems: [
                      'A breakfast meeting session was given among Doctors who got the highest-ranking scores raked in Press Ganey. It is a way for the Hospital Administration to give back to its deserving Physician for their job well done.'
                    ]
                  },
                  {
                    text: 'Planetree Retreat :',
                    subItems: [
                      'The retreat offers tools and support for nurturing compassion among all caregivers and leaders and embedding compassionate human interactions into organizational processes and practices.'
                    ]
                  },
                  {
                    text: 'Remittance Day :',
                    subItems: [
                      'Monthly support service is offered to the staff to help them send their remittances to their loved ones back home.'
                    ]
                  },
                  {
                    text: 'Massage on the go! :',
                    subItems: [
                      'Massage on the go! Is one of the initiative under Caring for the Caregiver. It is a brief massage <strong>(3-4mins)   </strong>  offered to the staff upon request.'
                    ]
                  },
                  {
                    text: 'Bike2Work :',
                    subItems: [
                      'It aims to encourage staff to come and report to work and improve their health using their bikes.'
                    ]
                  },
                  {
                    text: 'Staff Bazaar :',
                    subItems: [
                      'A quarterly event for the team to have a platform for them to showcase their products made by them be it crafts, food, garments, etc. being sold to fellow colleagues.'
                    ]
                  },
                  {
                    text: 'Leadership Rounds :',
                    subItems: [
                      'Each Director is assigned to designated departments to have rounds with and connect, and to connect with the staff and patients alike and to ask for their concerns for the day. The rounds are then followed by debriefing session for the associated action to be taken.'
                    ]
                  },
                  {
                    text: 'WalkwithUs :',
                    subItems: [
                      'An event that encourages staff to walk a certain distance to promote healthy living and an active lifestyle .'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="Service-Oriented Initiatives" />
              <Menu
                items={[
                  {
                    text: 'Spend A Night :',
                    subItems: [
                      'A newly birthed concept that was implemented recently that place one of the hospital directors to have a sleepover for a night to have an immersive experience of what it feels like to be treated in Al Moosa Specialist Hospital.'
                    ]
                  },
                  {
                    text: 'Wear A New Hat :',
                    subItems: [
                      "Directors suit up to become a regular staff to adopt his/her typical day to day duties. Placing themselves in that person's shoes, they experienced first-hand what it feels like to be in their place."
                    ]
                  }
                ]}
              />
            </div>
          </div>
        )}

        {/* ***********Arabic Content*********** */}

        {language == 'ar' && (
          <div className="content">
            <div className="single-section">
              <Paragraph paragraph="تعمل منظمة البلانتري الغير ربحية مع المستشفيات حول العالم على تأسيس معايير لمقدمي الرعاية الصحية تناسب احتياجات المرضى، ووتعمل أيضا على تعزيز التفاعل البشري في رعاية المرضى، وتثقيف المرضى ووتزويدهم بجميع المعلومات اللازمة عن حالتهم الصحية كما  تولي اهتماما بالغا لدور والأسرة والأصدقاء والدعم الاجتماعي في رحلة العلاج " />
              <Paragraph paragraph="بدأ مستشفى الموسى التخصصي رحلته مع البلينتري  في أواخر عامـ 2014 وحصل لاحقًا على الاعتراف بشهادة الاستحقاق الفضية للتميز في الرعاية المتمحورة  على الانسان في عام 2015. وفي أغسطس 2017 ، حصل المستشفى على شهادة الاستحقاق الذهبي للتميز في الرعاية المتمحورة حول الانسان  وتم إعادة اعتماده في عام 2020." />
              <Paragraph paragraph="نظرًا لكوننا أول مستشفى معتمد في الشرق الأوسط من 'بلين تري' ، فإننا نواصل مساعينا الدؤوبة لـ تقديم خدمة ورعاية عالية الجودة لمرضانا. إيمانًا بمسؤوليتنا نحو تطبيق نظام الرعاية التي تركز على المريض، وذلك عن طريق إدخال بعض المبادرات  في الممارسات اليومية داخل المستشفى التي من شانها تحسين تجربة المرضى ومقدمي الرعاية الصحية على حد سواء ." />
            </div>
            <div className="single-section">
              <Title title="مبادرات للمرضى" />
              <Menu
                items={[
                  {
                    text: 'برنامج شريك الرعاية :',
                    subItems: [
                      'نحن  نؤمن بـدور العائلة والأصدقاء في رحلة شفاء المريض ولهذا نشجع أفراد الأسرة على المشاركة في رعاية المرضى. شريك الرعاية هو الزوج أو أحد أفراد الأسرة أو صديق يختاره المريض ليشاركه رحلة الإقامة والعلاج داخل المستشفى. يمكن للمرافق مساعدة المريض على الحركة و التنقلات ، اختيار الوجبات ، مساعدة المريض في تغيير ملابسة والأمور الشخصية ،  بالإضافة إلى تقديم الدعم العاطفي والمعنوي.'
                    ]
                  },
                  {
                    text: 'خدمة صف لسيارات :',
                    subItems: [
                      'يتم تقديم خدمة صف السيارات  للزوار مقابل رسوم رمزية .'
                    ]
                  },
                  {
                    text: 'التقارير السريرية:',
                    subItems: [
                      'نشجع مرضانا  على المشاركة في التقارير اليومية جنبًا إلى جنب مع مقدمي الرعاية الصحية ليكونوا جزءاً من خطة رعايتهم  .'
                    ]
                  },
                  {
                    text: 'تطبيق الموسى :',
                    subItems: [
                      'يسمح تطبيق الموسى للمرضى بالاطلاع على سجلاتهم الطبية و نتائج الأشعة والتحاليل  وكذلك معرفة الأدوية الموصوفة لهم.في اي وقت ومن اي مكان .'
                    ]
                  },
                  {
                    text: '	الزيارات :',
                    subItems: [
                      'ُتيح مستشفى الموسى التخصصي للمريض تحديد الأشخاص المُرحب بزيارتهم.في الاوقات التي يفضلها المريض .'
                    ]
                  },
                  {
                    text: 'زيارة افتراضية لمدة 24 ساعة :',
                    subItems: [
                      'نوفر خدمة الزيارات الإفتراضية لمرضانا في الأوقات التي يفضلونها بأريحية و خصوصية .'
                    ]
                  },
                  {
                    text: 'وقت الهدوء:',
                    subItems: [
                      'بين الساعة 11:00 م وحتى 5:00 م ، خلال هذا الوقت تكون الحركة محدودة في الممرات مع وجوب غلق الهواتف الجوالة و انخفاض الأصوات الخارجية  .'
                    ]
                  },
                  {
                    text: 'جائزة أفضل طبيب :',
                    subItems: [
                      'تُمنح الجائزة للأطباء المتميزين بناءً على نتائج استبيان متكامل للمرضى ،  يطرح الاستبيان  أسئلة تخص المريض و تمنحه الفرصة لعرض تجربته مع فريق الرعاية الصحية في المستشفى .'
                    ]
                  },
                  {
                    text: 'أنشطة للأطفال :',
                    subItems: [
                      'تقدم المبادرة  مجموعة متنوعة من الأنشطة التي يمكن للطفل الاختيار من بينها،  تشمل الأنشطة الرسم والتلوين وقراءة القصص .',
                      'توفر مبادرة الاطفال أيضًا جهاز "بلاي ستيشن" و "إكس بوكس" يمكن للمريض تشغيله في الوقت الذي يريده أثناء إقامته في المستشفى طالما تسمح حالته الصحية بذلك .'
                    ]
                  },
                  {
                    text: 'كشتة الشتاء :',
                    subItems: [
                      'هدايا عينية بسيطة تُقدم للمريض خلال فصل الشتاء، تشمل الحلويات والتمر والوجبات الخفيفة والقهوة العربية .'
                    ]
                  },
                  {
                    text: 'مبادرة "سلالم العافية" :',
                    subItems: [
                      'لتشجيع الموظفين والزوار على استخدام السلالم، استخدم مستشفى الموسى التخصصي الرسوم و النقوش الجذابة بالاضافة الى تمارين بسيطة يمكن للزائر أو الموظف عملها أثناء صعودة .'
                    ]
                  },

                  {
                    text: 'عربة الشتاء:',
                    subItems: [
                      'علاجات بسيطة تقدم للمريض خلال فصل الشتاء، تتراوح بين الحلويات والتمر والوجبات الخفيفة والقهوة التقليدية.'
                    ]
                  },
                  {
                    text: 'مبادرة "سلالم العافية":',
                    subItems: [
                      'لتشجيع الموظفين والزوار على استخدام السلالم، حيث يستخدم مستشفى الموسى التخصصي النقوش والصور الجذابة على درجات السلالم.'
                    ]
                  },
                  {
                    text: 'توصيل الأدوية :',
                    subItems: [
                      'تم تفعيلها  أثناء حظر التجول ، لتخفيف العبء على مرضانا و ضمان وصول العلاج مباشرة إلى باب المريض. خاصة لكبار السن و مرضى الأمراض المزمنة .'
                    ]
                  },
                  {
                    text: 'توفير وسائل النقل لمرضى الغسيل الكلوي :',
                    subItems: [
                      'يقدم مستشفى الموسى التخصصي خدمات النقل لمرضى وحدة الغسيل الكلوي من والى المستشفى .'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="مبادرات لمقدمي الرعاية :" />
              <Menu
                items={[
                  {
                    text:
                      'بطاقات أعياد الميلاد موقعة ومهداة من المدير التنفيذي '
                  },
                  {
                    text: 'جائزة مقدم الرعاية المثالي خلال الشهر أو العام',
                    subItems: [
                      'تكريمًا لمقدمي الرعاية المتميزين وتقديرًا لجهودهم، تقوم المستشفى بتشجيعهم من خلال جائزة مقدم الرعاية المثالي للشهر أو للعام.'
                    ]
                  },
                  {
                    text: 'ديوانية الموسى :',
                    subItems: [
                      'اجتماع مفتوح بين القادة ومقدمي الرعاية يتيح لجميع الموظفين معرفة الأحداث الحالية وتوجهات المستشفى والمشاريع المستقبلية .'
                    ]
                  },
                  {
                    text: 'غداء مع المدير التنفيذي :',
                    subItems: [
                      'اجتماع غير رسمي مع المدير التنفيذي خارج إطار العمل، يتم كل ثلاثة أشهر في موعد على الغداء، ويشارك فيه موظفين من جميع الأقسام. يستمع فيه المدير التنفيذي للموظفين و أفكاراهم و شكواهم .'
                    ]
                  },
                  {
                    text: 'بلانتري ريتريت (Plantree retreat) :',
                    subItems: [
                      'يهدف الى غرس مبادئ الخدمة المتركزة حول الانسان وتريخ مبدأ التعاطف والرحمة بين جميع مقدمي الرعاية والقادة .'
                    ]
                  },

                  {
                    text: 'يوم الحوالات :',
                    subItems: [
                      'خدمة دعم شهرية للموظفين لمساعدتهم في إرسال تحويلاتهم إلى بلادهم .'
                    ]
                  },

                  {
                    text: 'مبادرة ركوب الدراجات :',
                    subItems: [
                      'مبادرة لتشجيع الموظفين على الحضور للعمل باستخدام الدراجة بدلاً من السيارة لمساعدتهم على تبني نظام حياة صحي و التشجيع على ممارسة الرياضة '
                    ]
                  },
                  {
                    text: ' بازار الموظفين :',
                    subItems: [
                      'حدث ربع سنوي للموظفين ليكون لديهم منصة لعرض منتجاتهم من الحرف اليدوية أو المواد الغذائية أو الملابس وما إلى ذلك، ويتم بيعها لزملائهم .'
                    ]
                  },
                  {
                    text: 'امشي معنا:',
                    subItems: [
                      'لتشجيع الموظفين على المشي لمسافة معينة بهدف تعزيز الحياة الصحية .'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="المبادرات الموجهة نحو تحسين الخدمات" />
              <Menu
                items={[
                  {
                    text: 'مبادرة ليلة في المستشفي',
                    subItems: [
                      'مفهوم جديد تم تطبيقه مؤخرًا، وفيه يقوم  أحد المدراء بالمبيت داخل أحد غرف التنويم بالمستشفى  ليقوم بتقييم وتجربة خدمات الرعاية الصحية وتلقي العلاج داخل مستشفى الموسى .'
                    ]
                  },
                  {
                    text: 'مبادرة تبادل الأدوار',
                    subItems: [
                      'فية يقوم المدراء بتبديل مهامهم مع موظفين من إدارات مختلفة و القيام بكافة أعمالهم لمدة يوم عمل كامل  لتقدير جهودهم .'
                    ]
                  }
                ]}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoldenDesignation;

// small components
const Title = ({ title }) => {
  return <h3 className="golden-designation-title">{title}</h3>;
};

const Paragraph = ({ paragraph }) => {
  return (
    <p className="golden-designation-paragraph">
      <Markdown>{paragraph}</Markdown>
    </p>
  );
};

const Menu = ({ items }) => {
  return (
    <ul className="golden-designation-menu">
      {items.map((item, index) => {
        return (
          <li>
            <strong>{item.text}</strong>

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

const Menu2 = ({ items }) => {
  return (
    <ul className="golden-designation-menu">
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

/* */
