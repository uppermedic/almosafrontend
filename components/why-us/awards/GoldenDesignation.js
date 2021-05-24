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
              <strong>
                Person-Centered Care in Al Moosa Specialist Hospital at a glance
              </strong>
            </div>
            <div className="single-section">
              <Title title="Initiatives for Patient" />
              <Menu
                items={[
                  {
                    text: 'Care Partner Program:',
                    subItems: [
                      'At Al Moosa Specialist Hospital, we value the importance of family and friends in the overall healing of the patient that is why we encourage family members to partner with us in enhancing the hospital experience of your loved ones by giving you the opportunity to care for them. A Care Partner is a spouse, family members, a significant other or a friend chosen by the patient to learn ways of supporting his/her hospitalized loved one. Responsibility of a Care Partner lies in caring for the patient which includes, but not limited to any of the following activities such as; helping in personal needs; providing caring touch; assist in feeding and meal selection; assisting in the mobility of the patient; helps in providing emotional and spiritual support and assist in providing distractive activities.'
                    ]
                  },
                  {
                    text: 'Valet Parking Services:',
                    subItems: [
                      'We offer you an unrivalled valet parking service that is being offered to the visitors and clients for a minimum fee of <strong>SR </strong> <strong>10 </strong>for the first <strong>2</strong> hours.'
                    ]
                  },
                  {
                    text: 'Bed Side Reporting:',
                    subItems: [
                      'Every shift change, patients are encouraged to participate in the daily bedside reporting together with the outgoing and the incoming caregivers on duty to talk about the patient plan of care, plan for the day, and safety check.'
                    ]
                  },
                  {
                    text: 'Open Medical Records:',
                    subItems: [
                      'Open Medical Records and Patient Portal and Almoosa App allow patients to view their medical records in terms of their Laboratory and Radiologic results as well as their prescribed medications to take.'
                    ]
                  },
                  {
                    text: 'Patient Directed Visitation:',
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
                    text: 'Quiet Time:',
                    subItems: [
                      'At Al Moosa Specialist Hospital, we offer you a quiet & peaceful place to stay and recover. Quiet time happens between <strong>2300H (11:00pm) </strong>  until <strong>0500H (5:00pm)  </strong> to which limited movement in the halls, keeping the level of your voice low and silencing your phone is expected.'
                    ]
                  },
                  {
                    text: 'Patient Choice Award:',
                    subItems: [
                      'It is an initiative that acknowledges and awards top performing Physician who have gotten a high accumulated percentage out from their Press Ganey scores – an integrated survey that ask patient-centered questions and gives clients the most comprehensive picture of their patient’s care experiences. '
                    ]
                  },
                  {
                    text: 'Art Carts/Crafts and Activities in Pedia Ward:',
                    subItems: [
                      'Scheduled rounds by the person-in-charge offering a variety of activities that a patient can choose from. Ranging from coloring books, art crafts and the like that will surely be enjoyed by the patient. It is being offered to Pediatric patients admitted in the hospital as a positive distraction. '
                    ]
                  },
                  {
                    text: 'Story Hour for Pedia patients:',
                    subItems: [
                      'Aside from the art crafts being offered to Pediatric patients, scheduled story hour by the Social Worker staff is also integral to make the hospital stay of the patient memorable'
                    ]
                  },
                  {
                    text: 'Playstation/Xbox game:',
                    subItems: [
                      'Our Pedia Ward also offers Playstation/Xbox which the patient can play whenever they like it during their hospital stay as long as their conditions permits.'
                    ]
                  },
                  {
                    text: 'Music Time:',
                    subItems: [
                      'Music time is an initiative being offered to patient and staff. It started when one former patient of the hospital volunteered to offer his musical expertise to render music through the playing of his violin.'
                    ]
                  },
                  {
                    text: 'Winter Cart:',
                    subItems: [
                      'Simple treats offered to the patient during winter season. Ranging from sweets, dates, snacks and traditional coffee.'
                    ]
                  },
                  {
                    text: 'Wellness stairs:',
                    subItems: [
                      'To encourage staff and visitors to use the stairs, Al Moosa Specialist Hospital employs encouraging inscriptions and visual images placed in the stairways. '
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
                      'Communication Boards is strategically placed in the patient rooms to encourage constant communication and information sharing between the caregivers and the patient.'
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
                    text: 'Thank You and Birthday Card from CEO: ',
                    subItems: [
                      'Celebrating a birthday in Al Moosa Specialist Hospital comes with a twist. Each staff who has a scheduled birthday will receive birthday card greetings signed by the CEO himself.'
                    ]
                  },
                  {
                    text: 'Caregiver of the month and Caregiver of the Year:',
                    subItems: [
                      'Acknowledging exceptional caregivers and one of the Caring for the Caregiver initiative is having the Caregiver of the Month/Year award. Being given and rewarded to caregivers who are excellent and exceeded their expected clinical efforts.'
                    ]
                  },
                  {
                    text: 'Diwaniyah :',
                    subItems: [
                      'It is a town hall meeting with the leaders and caregivers who can let their voices be heard. Part of the meeting was letting all the staff know what is currently happening and where the hospital is heading. It is a meeting that is open for all to attend and can let everyone gets the information right from the leaders themselves.'
                    ]
                  },
                  {
                    text: 'Lunch with the CEO:',
                    subItems: [
                      'An informal meeting with the <strong>CEO   </strong> , held every quarter participated by frontline staff from every department. Conversation among the participants and the <strong>CEO   </strong>  revolves around the department and individual concerns, suggestions and ideas.'
                    ]
                  },
                  {
                    text: 'Breakfast with the Bosses:',
                    subItems: [
                      'A breakfast meeting session was given among Doctors who got the highest-ranking scores raked in Press Ganey. It is a way for the Hospital Administration to give back to its deserving Physician for their job well done.'
                    ]
                  },
                  {
                    text: 'Planetree Retreat:',
                    subItems: [
                      'Retreat offers tools and support for nurturing compassion among all caregivers and leaders, and for embedding compassionate human interactions into organizational processes and practices.'
                    ]
                  },
                  {
                    text: 'Remittance Day:',
                    subItems: [
                      'A monthly support service offered to the staff to help them in sending their remittances to their love ones back home. A Telemoney kiosk is being set-up to render services to the staff instead of going to the branch where the bank is located.'
                    ]
                  },
                  {
                    text: 'Massage on the go!:',
                    subItems: [
                      'Massage on the go! Is one of the initiative under Caring for the Caregiver. It is a brief massage <strong>(3-4mins)   </strong>  offered to the staff upon request.'
                    ]
                  },
                  {
                    text: 'Bike2Work:',
                    subItems: [
                      'An initiative to encourage staff to come and report to work and improve their health using their bikes.'
                    ]
                  },
                  {
                    text: 'Staff Bazaar:',
                    subItems: [
                      'A quarterly event for the staff to have a platform for them to showcase their products made by them be it crafts, food, garments, etc. being sold to fellow colleagues.'
                    ]
                  },
                  {
                    text: 'Leadership Rounds:',
                    subItems: [
                      'Each Director is assigned to designated departments to have rounds with, and to connect with the staff and patients alike and to ask for their concerns for the day. The rounds are then followed by debriefing session for the associated action to be taken.'
                    ]
                  },
                  {
                    text: 'WalkwithUs:',
                    subItems: [
                      'An event that encourages staff to walk a certain distance with a purpose to promote healthy living and active lifestyle.'
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
                    text: 'Spend A Night:',
                    subItems: [
                      'A newly birthed concept that was implemented recently, that place one of the directors of the hospital to have a sleepover for a night to have an immersive experience of what it feels like to be treated in Al Moosa Specialist Hospital.​​​​​​​'
                    ]
                  },
                  {
                    text: 'Wear A New Hat:',
                    subItems: [
                      'This is an Initiative that Directors suits up to become a regular staff to adopt his/her normal day to day duties. Placing themselves in that person’s shoes, they experienced first-hand what it feels like to be in their place.'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section-nosubitems">
              <Title title="Health Care Institution who visited Al Moosa Specialist Hospital" />
              <Menu2
                items={[
                  {
                    text:
                      'Johns Hopkins Aramco Healthcare <strong> (JHAH)</strong>  '
                  },
                  {
                    text:
                      'King Abdullah bin Abdulaziz University Hospital <strong> (KAAUH)</strong> '
                  },
                  {
                    text:
                      'King Faisal Specialist Hospital & Research Centre <strong> (KFSHRC)</strong> '
                  },
                  {
                    text: 'King Fahad Medical City <strong> (KFMC)</strong> '
                  },
                  {
                    text: 'Ministry of Health <strong> (MOH)</strong> '
                  },
                  {
                    text: 'Fakeeh Hospital'
                  },
                  {
                    text:
                      'Sultan Bin Abdulaziz Huminatarian City <strong> (SBAHC)</strong> '
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
              <Paragraph paragraph="في مستشفى الموسى التخصصي، يتحول المرض إلى عافية وصحة، ولكن ذلك يتطلب أكثر من مجرد نظام علاجي، عن طريق توفير أجواء محيطة مليئة بالرعاية والاهتمام. " />
              <Paragraph paragraph="لذلك فالرعاية التي تركز على المريض هي عنصر أساسي في منظمة الرعاية الصحية، التي تعود بالكثير من الإيجابيات على المرضى والموظفين والمجتمع على حدٍ سواء." />
              <Paragraph paragraph="ولتحقيق ذلك، دخل مستشفانا في شراكة مع منظمة 'بلان تري' التي تأسست في عام <strong>1978 </strong>، وهي منظمة دولية غير ربحية تعمل على تعزيز الرعاية الصحية التي تركز على المريض." />
              <Paragraph paragraph="تتمثل مهمتها في إنشاء وتقييم معايير لمقدمي الرعاية الصحية تناسب احتياجات المرضى، وتعزيز دور الاهتمام والتفاعل البشري في رعايتهم، وتوفير موارد التعليم والمعلومات في مؤسسات الرعاية الصحية، وتسليط الضوء على دور مقدمي الرعاية الصحية في تعزيز التواصل البشري والأسرة والأصدقاء والدعم الاجتماعي في شفاء وتثقيف المرضى." />
              <Paragraph paragraph="كما تابعت المستشفى رحلتها مع 'بلان تري' التي بدأت في الجزء الأخير من عام <strong>2014  </strong>وحصلت لاحقًا على الاعتراف بشهادة الاستحقاق الفضية من 'بلان تري' للتميز في الرعاية المركزة على الأشخاص في عام <strong>2015 </strong>. وفي أغسطس 2017 ، حصلت المستشفى على شهادة الاستحقاق الذهبي للتميز في الرعاية المركزة على الأشخاص وتم إعادة اعتماده في عام <strong>2020</strong>." />
              <Paragraph paragraph="نظرًا لكوننا أول مستشفى معتمد في الشرق الأوسط من 'بلان تري' ، فإننا نواصل التفوق في تقديم خدمة ورعاية عالية الجودة لمرضانا. إيمانًا بمسؤوليتنا نحو تطبيق نظام الرعاية التي تركز على المريض، وذلك عن طريق إدخال بعض المبادرات التفاعلية في الممارسات اليومية داخل المستشفى." />
              <strong>
                لمحة عن "الرعاية التي ترتكز على المرضى" في مستشفى الموسى
              </strong>
            </div>
            <div className="single-section">
              <Title title="مبادرات للمرضى" />
              <Menu
                items={[
                  {
                    text: ' برنامج رعاية المرافقين:',
                    subItems: [
                      'في مستشفى الموسى التخصصي، نقدر أهمية دور العائلة والأصدقاء في شفاء للمريض ولهذا نشجع أفراد الأسرة على المشاركة معنا في تعزيز تجربة المستشفى. شريك الرعاية هو الزوج أو أحد أفراد الأسرة أو أحد الأشخاص المهمين أو الصديق الذي يختاره المريض ليشاركه رحلة الإقامة والعلاج داخل المستشفى.  تكمن مسؤولية المُرافق في رعاية المريض والتي تشمل؛ المساعدة في الاحتياجات الشخصية، المساعدة في التغذية واختيار الوجبات، المساعدة في حركة المريض، بالإضافة إلى تقديم الدعم العاطفي والمعنوي.'
                    ]
                  },
                  {
                    text: 'خدمات ركن السيارات: ',
                    subItems: [
                      'نقدم لك خدمة ركن السيارات المتميزة والتي يتم تقديمها للزوار والعملاء مقابل رسوم لا تقل عن <strong>10 </strong>ريال سعودي لأول ساعتين.'
                    ]
                  },
                  {
                    text: 'التقارير السريرية:',
                    subItems: [
                      'يتم تشجيع المريض على المشاركة في التقارير اليومية جنبًا إلى جنب مع مقدمي الرعاية الصحية والحديث عن خطة الرعاية للمريض والتخطيط لليوم وفحوصات السلامة.'
                    ]
                  },
                  {
                    text: 'فتح السجلات الطبية:',
                    subItems: [
                      ' فتح السجلات الطبية وتطبيق الموسى للسماح للمرضى بالاطلاع على سجلاتهم الطبية من حيث نتائج المختبرات والأشعة وكذلك الأدوية الموصوفة لهم.'
                    ]
                  },
                  {
                    text: ' زيارة موجهة للمريض:',
                    subItems: [
                      'يسمح مستشفى الموسى التخصصي للمريض بتحديد الأفضلية للأشخاص المُرحب بزيارتهم.'
                    ]
                  },
                  {
                    text: 'زيارة افتراضية لمدة 24 ساعة:',
                    subItems: [
                      'نوفر زيارة  تسمح للمريض أن يزوره أحباؤه في الأوقات التي يفضلونها.'
                    ]
                  },
                  {
                    text: 'وقت الهدوء:',
                    subItems: [
                      'في مستشفى الموسى التخصصي، نقدم لك مكانًا هادئًا للإقامة والتعافي، يكون هذا الوقت بين الساعة 23:00 (11:00 مساءً) وحتى 5:00 مساءً حيث تكون الحركة محدودة في الصالات، وتنخفض الأصوات، وتُغلق الهواتف الجوالة.'
                    ]
                  },
                  {
                    text: ' جائزة من اختيار المريض:',
                    subItems: [
                      'إنها مبادرة تعترف بالأطباء الأفضل أداءً وتكافئهم بناءً على نتائج استبيان متكامل يطرح أسئلة تخص المريض تمنحه الفرصة لعرض تجربته مع فريق الرعاية الصحية في المستشفى.'
                    ]
                  },
                  {
                    text: 'عربات فنية / أشغال يدوية وأنشطة في عالم بيديا:',
                    subItems: [
                      'مبادرة تقدم مجموعة متنوعة من الأنشطة التي يمكن للمريض الاختيار من بينها. بدءًا من كتب التلوين والحرف الفنية التي يستمتع بها المريض. يتم تقديم المبادرة لمرضى الأطفال داخل المستشفى  باعتبارها وسيلة إيجابية للتسلية ورفع الروح المعنوية لديهم.'
                    ]
                  },
                  {
                    text: ' ساعة القصة لمرضى بيديا:',
                    subItems: [
                      'مبادرة تقدم ساعة يقوم خلالها الأخصائي الاجتماعي بإلقاء القصص القصيرة على مرضى الأطفال.'
                    ]
                  },
                  {
                    text: ' لعبة بلاي ستيشن / إكس بوكس:',
                    subItems: [
                      'توفر مبادرة بيديا أيضًا جهاز "بلاي ستيشن" و "إكس بوكس" الذي يمكن للمريض تشغيله في الوقت الذي يريده أثناء إقامته في المستشفى طالما تسمح حالته الصحية بذلك.'
                    ]
                  },
                  {
                    text: 'وقت الموسيقى:',
                    subItems: [
                      'وقت الموسيقى هو مبادرة يتم تقديمها للمريض والموظفين. بدأ الأمر عندما تطوع مريض سابق في المستشفى لتقديم خبرته الموسيقية من خلال العزف على كمانه.'
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
                    text: 'توصيل الأدوية:',
                    subItems: [
                      'توصيل الأدوية للمرضى إحدى المبادرات التي تم وضعها أثناء حظر التجول. حيث يقدم مستشفى الموسى التخصصي مساعدته لتوصيل الدواء مباشرة إلى باب المريض.'
                    ]
                  },
                  {
                    text: ' توفير وسائل النقل لمرضى وحدة الاعتماد العالي HDU :',
                    subItems: [
                      'يقدم مستشفى الموسى التخصصي خدمات النقل لمرضى وحدة الاعتماد العالي <strong>HDU  </strong> خاصة  للمرضى الذين ليس لديهم وسيلة نقل مستمرة من منازلهم إلى المستشفى أو العكس.'
                    ]
                  },
                  {
                    text: ' لوحات التواصل:',
                    subItems: [
                      ' يتم وضع لوحات التواصل في غرف المرضى للتشجيع على التواصل المستمر وتبادل المعلومات بين مقدمي الرعاية الصحية والمريض.'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="مبادرات لطاقم العمل" />
              <Menu
                items={[
                  {
                    text: 'شكر وبطاقة عيد ميلاد من المدير التنفيذي: ',
                    subItems: [
                      'الاحتفال بعيد ميلاده في مستشفى الموسى التخصصي يأتي مع مبادرة ذوقية من المستشفى، حيث يحصل كل موظف على بطاقة عيد ميلاد موقعة من الرئيس التنفيذي بنفسه.'
                    ]
                  },
                  {
                    text: 'جائزة مقدم الرعاية المثالي خلال الشهر أو العام',
                    subItems: [
                      'تكريمًا لمقدمي الرعاية المتميزين وتقديرًا لجهودهم، تقوم المستشفى بتشجيعهم من خلال جائزة مقدم الرعاية المثالي للشهر أو للعام.'
                    ]
                  },
                  {
                    text: 'الديوانية:',
                    subItems: [
                      'اجتماع مفتوح مع القادة ومقدمي الرعاية للسماح لجميع الموظفين بمعرفة الأحداث الحالية وإلى أين يتجه المستشفى. إنه اجتماع مفتوح للجميع للحضور ويتيح للجميع الحصول على المعلومات مباشرة من الإداريين.'
                    ]
                  },
                  {
                    text: 'غداء مع الرئيس التنفيذي:',
                    subItems: [
                      'اجتماع غير رسمي مع الرئيس التنفيذي خارج إطار العمل، يتم كل ثلاثة أشهر في موعد على الغداء، ويشارك فيه الموظفين من جميع الأقسام. وتدور المحادثة بين المشاركين والرئيس التنفيذي حول اهتمامات الإدارة والأفراد والاقتراحات والأفكار.'
                    ]
                  },
                  {
                    text: 'الإفطار مع الرؤساء:',
                    subItems: [
                      'جلسة إفطار بين الأطباء الحاصلين على أعلى الدرجات في "بريس جاني" فهي مبادرة من إدارة المستشفى لرد الجميل لطبيبها وتقدريرًا لعمله الجيد.'
                    ]
                  },
                  {
                    text: 'بلانتري ريتريت (Plantree retreat):',
                    subItems: [
                      'يقدم الأدوات والدعم لتنمية التعاطف بين جميع مقدمي الرعاية والقادة، ودمج التفاعلات البشرية الرحيم في العمليات والممارسات التنظيمية.'
                    ]
                  },
                  {
                    text: 'يوم الحوالات:',
                    subItems: [
                      'خدمة دعم شهرية للموظفين لمساعدتهم في إرسال تحويلاتهم إلى أحبائهم في الوطن. يتم إنشاء كشك "تيلي ماني ( Telemoney)" لتقديم الخدمات للموظفين بدلاً من الذهاب إلى فروع البنك.'
                    ]
                  },
                  {
                    text: 'مبادرة التدليك والمساج:',
                    subItems: [
                      'مبادرة التدليك هي إحدى المبادرات التي تهدف لراحة مقدمي الرعاية الصحية واسترخائهم، عن طريق جلسة تدليك قصيرة <strong>(3-4 دقائق)  </strong>  تقدم للموظفين عند الطلب.'
                    ]
                  },
                  {
                    text: 'مبادرة لاستخدام الدراجات:',
                    subItems: [
                      'مبادرة لتشجيع الموظفين على الحضور والعمل وتحسين صحتهم باستخدام دراجاتهم.'
                    ]
                  },
                  {
                    text: ' بازار الموظفين:',
                    subItems: [
                      'حدث ربع سنوي للموظفين ليكون لديهم منصة لعرض منتجاتهم التي صنعوها سواء كانت الحرف اليدوية أو المواد الغذائية أو الملابس وما إلى ذلك، ويتم بيعها لزملائهم.'
                    ]
                  },
                  {
                    text: 'جولات القيادة:',
                    subItems: [
                      'يتم تعيين كل مدير في الأقسام لإجراء الجولات والتواصل مع الموظفين والمرضى على حد سواء والاستفسار عن مخاوفهم لهذا اليوم. ويلي الجولات جلسة لجمع المعلومات واتخاذ الإجراءات المناسبة.'
                    ]
                  },
                  {
                    text: 'امشوا معنا:',
                    subItems: [
                      'حدث يشجع الموظفين على المشي لمسافة معينة بهدف تعزيز الحياة الصحية ونمط الحياة النشيط.'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="المبادرات الموجهة نحو الخدمة" />
              <Menu
                items={[
                  {
                    text: 'مبادرة "اقضي ليلة"',
                    subItems: [
                      'مفهوم جديد تم تطبيقه مؤخرًا، وهو ما يجعل أحد مديري المستشفى يحصل على تجربة لمدة ليلة ليقوم بتقييم وتجربة خدمات الرعاية الصحية وتلقي العلاج داخل مستشفى الموسى.'
                    ]
                  },
                  {
                    text: 'مبادرة "ارتدي قبعة جديدة"',
                    subItems: [
                      'مبادرة يأخد فيها أحد المدراء دور الموظف العادي بكافة أدواره ومهامه الوظيفية، بهدف اختبار شعور الموظفين بشكل مباشر.'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section-nosubitems">
              <Title title="مؤسسات الرعاية الصحية التي زارت مستشفى الموسى التخصصي:" />
              <Menu2
                items={[
                  {
                    text:
                      'مركز جونز هوبكنز أرامكو الطبي <strong> (JHAH)</strong> .'
                  },
                  {
                    text:
                      'مستشفى جامعة الملك عبد الله بن عبد العزيز <strong> (KAAUH)</strong> .'
                  },
                  {
                    text:
                      'مستشفى الملك فيصل التخصصي ومركز الأبحاث <strong> (KFSHRC)</strong> .'
                  },
                  {
                    text: 'مدينة الملك فهد الطبية <strong> (KFMC)</strong> .'
                  },
                  {
                    text: 'وزارة الصحة <strong> (MOH)</strong> .'
                  },
                  {
                    text: 'مستشفى فقيه.'
                  },
                  {
                    text:
                      'مدينة سلطان بن عبد العزيز الهومينتارية <strong> (SBAHC)</strong> .'
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
