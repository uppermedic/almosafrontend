import React from 'react';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';

const PrivacyPolicy = () => {
  const { language } = i18n;
  return (
    <section className="privacy">
      <div className="container">
        <div className="title">
          <h2>{(language == 'en' && 'Privacy Policy') || 'سياسة الخصوصية'}</h2>
        </div>
        {/* **********English Content ********** */}

        {language == 'en' && (
          <div className="content">
            <div className="single-section">
              <Paragraph paragraph="Almoosa Specialist Hospital website puts the confidential information of its users and visitors at the top of the list of priorities, and its management makes every effort to provide valuable services to all its participants." />
              <Paragraph paragraph="All visitors and users of the website must become aware of the conditions and the principles that govern the privacy and confidential information in order to know and understand the mechanism of updating them although the website management is not obliged to declare of any amendments or changes related to these conditions or principles. Your use of the site will therefore mean your acceptance to all the conditions and to whatever changes or amendments here after." />
            </div>
            <div className="single-section">
              <Title title="The security of personal information" />
              <Menu
                items={[
                  {
                    text:
                      'A document of privacy and confidential information has been prepared to help the visitors and the users of the website to fully understand the nature of the data collected from them when visiting the website and the way such data is dealt with.'
                  },
                  {
                    text:
                      'The management of the site takes all the appropriate actions and measures to maintain personal information and guarantees to protect them from loss or unauthorized access or misuse or modification or disclosure. Of the most important measures taken by the hospital to protect personal information:',
                    subItems: [
                      'Strict actions and appropriate measures to maintain the security of the information and the use of modern technology to ensure protection from fraud or unauthorized access to our systems.',
                      'Regular and periodic update of the procedures and protection measures that meet or exceed the standards.',
                      'Our staff are qualified and trained to respect the confidentiality of personal information for our visitors.'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="Collection of Personal Information" />
              <Menu
                items={[
                  {
                    text:
                      'Once a user visits the website of the Almoosa Specialist Hospital, the company’s own server logs his IP address the Internet user’s IP, date and time of the visit and the URL of any web site it is referred to the website of the Almoosa Specialist Hospital.'
                  },
                  {
                    text:
                      'Most of the electronic websites Once visited they put a small file on the hard drive of the visitor (browser), and it is called “cookies”. These are text files, some sites deposit on the hard drive of the visitor’s computer. These text files contain information that would allow for the site that deposited it to retrieve it back when needed during the next visit of the user to the site and this information is saved and it contains:',
                    subItems: [
                      'The username and the password.',
                      'saving of the settings page, if available on the website.',
                      'saving of the colors that have been selected by the user.',
                      'The impossibility to vote more than once by the same user.'
                    ]
                  },
                  {
                    text:
                      'The browser (the user) does not have to enter the password on each visit the system will be able to detect the location through the cookies files, or may prevent the user from repeating the process of voting if he has already voted, and so on … On this basis, the website of the Almoosa Specialist Hospital will use the information in the cookie’s files for technical purposes of their own and when visiting more than once. It can also change the information contained within cookies or add new information whenever you visit the website of the Almoosa Specialist Hospital.'
                  },
                  {
                    text:
                      'If you use direct application or sent us an electronic email through the website of the Almoosa Specialist Hospital providing us with your personal data, we will share the necessary data with other bodies or other departments, to serve you more effectively. We will not share your personal data with any entity. By submitting your data and your personal information through the electronic website of the Almoosa Specialist Hospital, it means you fully agree to the storage, processing and use of such data by the Saudi authorities. We always reserve the right to disclose any information to the competent authorities, when it is necessary to satisfy any law, regulation or governmental request.'
                  },
                  {
                    text:
                      'You are fully responsible for your own correctness and sincerity of the data you send through this portal.'
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="Protecting your privacy" />
              <Menu
                items={[
                  {
                    text:
                      'To help you protect your personal information, we recommend the following:',
                    subItems: [
                      'contact us immediately when you think that someone was able to get your password, or use the code, or PIN, or any other confidential information.',
                      'Do not give out confidential information over the phone or Internet unless you know the identity of the person or the partner who receives the information.',
                      'Use a secure browser when dealing with online transactions and closing down of all unused applications on the network, and make sure that the antivirus software updated at all times.',
                      'If you have any enquiries or opinions on the principles of privacy, you can communicate with the Department of the website through the following e-mail: <a target="_blank" href="mailto:webmaster@almoosahospital.com.sa">webmaster@almoosahospital.com.sa</a>'
                    ]
                  },
                  {
                    text:
                      'To keep your personal data, the electronic storage and the personal data sent will be secured by using the appropriate security technologies.'
                  },
                  {
                    text:
                      'This portal (website) may contain electronic links to sites or portals that may use different methods for protecting information and privacy not similar to what we use. We are not responsible for the contents, methods and characteristics of these other sites, and advise you to consult the privacy notices of those sites.'
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="Sending Electronic e-mails to our Organization" />
              <Paragraph paragraph="When you inquire or request information about a program or a specific service, or if you give additional information using whatever means of communication with the company , whether electronic or non-electronic, such as an inquiry on our site, we will use your email address to respond to your inquiry, as it is possible to save and keep your e-mail address and your message and our response will be for the purposes of quality control, and we may do so for legal and censorship purposes." />
              <Paragraph paragraph=' Almoosa Specialist Hospital may, from time to time, send you email regarding our programs and services. If at any time you wish to be removed from our mailing list you can reply as directed to any incoming email, or send an email to  <a target="_blank" href="mailto:Unsubscribe@almoosahospital.com.sa">Unsubscribe@almoosahospital.com.sa </a>' />
            </div>
          </div>
        )}

        {/* **********Arabic Content ********** */}

        {language == 'ar' && (
          <div className="content">
            <div className="single-section">
              <Paragraph paragraph="تضع بوابة مستشفي الموسي التخصصي سرية معلومات مستخدميها وزوارها على رأس قائمة الأولويات، وتبذل إدارة البوابة كل جهودها لتقديم خدمة ذات جودة عالية لكل المستفيدين." />
              <Paragraph paragraph="يجب على زوار البوابة والمستفيدين من خدماتها الاطلاع المستمر على شروط ومبادئ الخصوصية وسرية المعلومات لمعرفة أية تحديثات تتم عليها، علماً بأن إدارة البوابة غير مطالبة بالإعلان عن أية تحديثات تتم على تلك الشروط والمبادئ، ويعني استخدامك للبوابة اطلاعك وموافقتك على تلك الشروط والمبادئ وما يتم عليها من تعديلات مستمرة." />
            </div>
            <div className="single-section">
              <Title title="أمن المعلومات الشخصية" />
              <Menu
                items={[
                  {
                    text:
                      'تم إعداد وثيقة الخصوصية وسرية المعلومات لمساعدة الزوار والمستخدمين على تفهم طبيعة البيانات التي يتم جمعها منهم عند زيارة البوابة وكيفية التعامل معها.'
                  },
                  {
                    text:
                      'تقوم إدارة البوابة باتخاذ الإجراءات والتدابير المناسبة والملائمة للمحافظة على المعلومات الشخصية التي لديها بشكل آمن يضمن حمايتها من الفقدان أو الدخول غير المصرح به أو إساءة الاستخدام، أو التعديل والإفصاح غير المصرح بهما، ومن أهم التدابير المعمول بها في الشركة لحماية معلومات الزائر الشخصية:',
                    subItems: [
                      'الإجراءات والتدابير المشددة لحماية أمن المعلومات والتقنية التي نستخدمها للوقاية من عمليات الاحتيال والدخول غير المصرح به إلى أنظمتنا',
                      'التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو تزيد عن المعايير القياسية.',
                      ' إن موظفينا مؤهلون ومدربون على احترام سرية المعلومات الشخصية لزائرينا.'
                    ]
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="جمع المعلومات الشخصية" />
              <Menu
                items={[
                  {
                    text:
                      'بمجرد زيارة المستخدم لبوابة مستشفى الموسى التخصصي، يقوم الخادم الخاص بالشركة بتسجيل عنوان بروتوكول شبكة الإنترنت IP الخاص بالمستخدم وتاريخ ووقت الزيارة والعنوان URL الخاص بأي موقع إلكتروني تتم منه إحالتك إلى بوابة مستشفي الموسي التخصصي.'
                  },
                  {
                    text:
                      'تضع معظم المواقع الإلكترونية بمجرد أن تتم زيارتها ملفاً صغيراً على القرص الصلب الخاص بجهاز الزائر (المتصفح)، ويسمى هذا الملف “كوكيز” (Cookies) ، وملفات الكوكيز عبارة عن ملفات نصية، تقوم بعض المواقع التي تزورها بإيداعها على القرص الصلب في جهازك، وتحتوي هذه الملفات النصية على معلومات تتيح للموقع الذي أودعها أن يسترجعها عند الحاجة لها خلال زيارة المستخدم المقبلة للموقع ومن هذه المعلومات المحفوظة:',
                    subItems: [
                      ' تذكر اسم مستخدم وكلمة مرور.',
                      'حفظ إعدادات الصفحة في حال كان ذلك متاح على البوابة.',
                      'حفظ الألوان التي تم اختيارها من قبل المستخدم.',
                      'عدم إتاحة إمكانية التصويت أكثر من مرة لنفس المستخدم.'
                    ]
                  },
                  {
                    text:
                      ' وقد لا يضطر المتصفح إلى إدخال كلمة المرور في كل زيارة إذ سيتمكن نظام الموقع من اكتشافها عن طريق ملفات الكوكيز، أو قد تمنع المستخدم من تكرار عملية التصويت إذا كان قد قام بالتصويت مسبقاً وهكذا… وعلى هذا الأساس فإن بوابة مستشفي الموسي التخصصي ستستخدم المعلومات الموجودة في ملفات الكوكيز لأغراض فنية خاصة بها وذلك عند زيارتها أكثر من مرة، كما أن البوابة بإمكانها تغيير المعلومات الموجودة ضمن ملفات الكوكيز أو إضافة معلومات جديدة كلما قمت بزيارة بوابة مستشفي الموسي التخصصي.'
                  },
                  {
                    text:
                      'إذا قمت باستخدام تطبيق مباشر أو أرسلت لنا بريداً إلكترونيًا عبر البوابة الإلكترونية لمستشفي الموسي التخصصي تزودنا فيه ببيانات شخصية، فإننا لا نشارك تلك المعلومات مع أي جهة أخري. وبتقديمك لبياناتك ومعلوماتك الشخصية من خلال البوابة الإلكترونية لمستشفي الموسي التخصصي، فإنك توافق تمامًا على تخزين ومعالجة واستخدام تلك البيانات من قبل السلطات السعودية. ونحن نحتفظ بالحق في كل الأوقات في كشف أي معلومات للجهات المختصة، عندما يكون ذلك ضروريا للالتزام بأي قانون أو نظام أو طلب حكومي.'
                  },
                  {
                    text:
                      ' إنك مسئول بمفردك عن تمام وصحة وصدق البيانات التي ترسلها من خلال هذه البوابة.'
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="حماية خصوصيتك" />
              <Menu
                items={[
                  {
                    text:
                      'لكي نتمكن من مساعدتك في حماية معلوماتك الشخصية فإننا نوصي بما يلي:',
                    subItems: [
                      ' الاتصال بنا بشكل فوري عندما تظن أن شخصاً ما استطاع الحصول على كلمة السر الخاصة بك، أو رمز الاستخدام، أو الرقم السري، أو أي معلومات سرية أخرى.',
                      'لا تعط معلومات سرية عبر الهاتف أو شبكة الإنترنت ما لم تعرف هوية الشخص أو الطرف المستقبل للمعلومة.',
                      'استخدم متصفح آمن عند قيامك بإنجاز المعاملات عبر الإنترنت مع إغلاق التطبيقات غير المستخدمة على الشبكة، وتأكد من أن برنامج الحماية من الفيروسات محدث على الدوام.',
                      ' في حالة وجود أية استفسارات أو آراء حول مبادئ الخصوصية، يمكن التواصل مع إدارة البوابة عبر البريد الإلكتروني التالي: <a target="_blank" href="mailto:webmaster@almoosahospital.com.sa">webmaster@almoosahospital.com.sa</a>'
                    ]
                  },
                  {
                    text:
                      'للحفاظ على بياناتك الشخصية، يتم تأمين التخزين الإلكتروني والبيانات الشخصية المرسلة باستخدام التقنيات الأمنية المناسبة.'
                  },
                  {
                    text:
                      'هذه البوابة قد تحتوي على روابط إلكترونية لمواقع أو بوابات قد تستخدم طرقًا لحماية المعلومات وخصوصياتها تختلف عن الطرق المستخدمة لدينا. ونحن غير مسئولين عن محتويات وطرق وخصوصيات هذه المواقع الأخرى، وننصحك بالرجوع إلى إشعارات الخصوصية الخاصة بتلك المواقع.'
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="إرسال الرسائل الإلكترونية إلى المستشفي" />
              <Paragraph paragraph="عندما تقوم بالاستفسار أو طلب معلومات حول برنامج ما أو خدمة محددة أو في حالة قيامك بإعطاء معلومات إضافية مستخدما أياً من وسائل الاتصال مع الشركة سواء كانت إلكترونية أو غير إلكترونية، مثل طلب الاستفسار على موقعنا، فإننا سنستخدم عنوان بريدك الإلكتروني للرد على استفساراتك، كما أنه من الممكن حفظ عنوان بريدك ورسالتك وإجابتنا عليها لأغراض مراقبة الجودة، كما أننا قد نقوم بذلك للغايات القانونية والرقابية." />
              <Paragraph paragraph='قد ترسل لكم مستشفي الموسي التخصصي، من حين لآخر، بريدًا إليكترونيًا بخصوص برامجنا وخدماتنا. وإذا رغبتم في أي وقت في شطبكم من قائمتنا البريدية، يمكنكم إرسال الرد على أي بريد إليكتروني وارد حسب التوجيهات، أو إرسال بريد اليكتروني إلى: <a target="_blank" href="mailto:Unsubscribe@almoosahospital.com.sa">Unsubscribe@almoosahospital.com.sa </a>' />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivacyPolicy;

// small components
const Title = ({ title }) => {
  return <h3 className="privacy-title">{title}</h3>;
};

const Paragraph = ({ paragraph }) => {
  return (
    <p className="privacy-paragraph">
      <Markdown>{paragraph}</Markdown>
    </p>
  );
};

const Menu = ({ items }) => {
  return (
    <ul className="privacy-menu">
      {items.map((item, idx) => {
        return (
          <li key={idx}>
            {item.text}
            {item.subItems && (
              <ul>
                {item.subItems.map((subItem, index) => {
                  return (
                    <li className="sub-item" key={index}>
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
