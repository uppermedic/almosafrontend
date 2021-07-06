import React from 'react';
import { Container } from 'reactstrap';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';

const Pharmacy = () => {
  const { language } = i18n;

  return (
    <section className="pharmacy" id="pharmacy-section">
      <h2 className="title">
        {language === 'en' ? 'The Pharmacy' : 'الصيدلية'}
      </h2>
      <Container>
        {language === 'en' ? (
          <div className="content">
            {/* **********English Content ********** */}

            <div className="single-section">
              <Title title="Outpatient Pharmacy (south tower)" />
              <Paragraph paragraph="Outpatient pharmacy located on the ground floor in the south tower, it operates around the clock (24 hours) and provides the following services :" />
              <Menu
                items={[
                  { text: 'Dispensing of medicines.' },
                  { text: 'Nutritional supplements.' },
                  { text: 'Mother and baby products.' },
                  { text: 'Skin & hair care products.' },
                  { text: 'Medical devices and equipment.' },
                  { text: 'Providing medical consultations.' }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="Automated Pharmacy (north tower)" />
              <Paragraph paragraph="A Smart Robotic Outpatient Pharmacy, which is the use of high-tech robotic machines in pharmacy practice and in the healthcare sector, which has many added values" />
            </div>

            <div className="single-section">
              <Title title="What is in it for the pharmacist ?" />
              <Menu
                items={[
                  {
                    text:
                      'Automatic preparation of medications with a dispensing speed that can reach up to 4000 packs per hour.'
                  },
                  { text: 'Can serve up to 6000 patient per day.' },
                  { text: 'High accuracy in medications dispensing.' },
                  { text: 'Enhance the patient experience.' },
                  {
                    text:
                      'High accuracy in medication dispensing, inventory/stock management and automatic checking for medication validity/expiry dates.'
                  }
                ]}
              />
            </div>
            <div className="single-section">
              <Title title="What is in it for the patient ?" />
              <Menu
                items={[
                  { text: 'Less waiting times.' },
                  {
                    text:
                      'More time will be available for patient counseling and drug therapy education'
                  },
                  {
                    text:
                      'Automatic checking for medications validity/expiry dates.'
                  }
                ]}
              />
            </div>

            <div className="single-section">
              <Title title="Aramco pharmacy :" />
              <Paragraph paragraph="Located on the first floor in the old building, and it works around the clock." />
            </div>

            <div className="single-section">
              <Title title="Inpatient pharmacies" />
              <Paragraph paragraph="Operate around the clock and provide the following services :" />
              <Menu
                items={[
                  { text: "Dispensing the wards' needs of medication." },
                  {
                    text: 'Intravenous administration of nutritional solutions.'
                  },
                  { text: 'Preparing liquid formulas for children.' }
                ]}
              />
            </div>

            <div className="single-section">
              <Title title="Automated drug dispensing system (Omnicell)" />
              <Paragraph paragraph='Inpatient pharmacies are distinguished by the automated drug dispensing system (Omnicell), which consists of medicine cabinets linked to the health information system "HIS" these cabinets identify each patient through his file number, dose are perfectly specified by the doctor promptly automatically and without any human intervention' />
              <Paragraph paragraph="This system will help reduce the possibility of medication errors, increase safety, and improve the quality of health care. It will also give more time for health care providers, including nurses and others, to focus on the patient and communicate with him humanely." />
              <Paragraph paragraph="The system also guaranteed High accuracy in medication dispensing, inventory/stock management, and automatic checking for medication validity/expiry dates." />
            </div>
          </div>
        ) : (
          <div className="content">
            {/* **********Arabic Content ********** */}

            <div className="single-section">
              <Title title="الصيدلية الخارجية في البرج الجنوبي" />
              <Paragraph paragraph="تقع في الطابق الأرضي، وتعمل على مدار الساعة (24 ساعة) وتقدم الخدمات التالية :" />
              <Menu
                items={[
                  { text: 'صرف الأدوية.' },
                  { text: 'المكملات الغذائية.' },
                  { text: 'منتجات الأم والطفل.' },
                  { text: 'منتجات العناية بالبشرة والشعر.' },
                  { text: 'الاجهزة والمعدات الطبية.' },
                  { text: 'تقديم الاستشارات الطبية والدوائية.' }
                ]}
              />
            </div>

            <div className="single-section">
              <Title title="صيدلية خارجية في البرج الشمالي" />
              <Paragraph paragraph="تقع في الطابق الأرضي، وتعمل على مدار الساعة (24 ساعة) وتقدم الخدمات التالية :" />
              <Menu
                items={[
                  { text: 'صرف أدوية مرضى القلب والسرطان والأعصاب والعظام.' },
                  { text: 'توفير الأجهزة والمعدات الطبية.' },
                  { text: 'تقديم الاستشارات الطبية.' },
                  { text: 'صرف أدوية مرضى الأورام والقلب والأعصاب والعظام.' }
                ]}
              />
              <Paragraph paragraph="الصدلية الخارجية مزودة بروبوت متطور يقوم  بصرف الأدوية للمرضى بشكل آلي يقلل هذا النظام من نسبة الخطأ ويقلل من وقت انتظار المرضى للحصول على الدواء ويحسن من تجربة المرضى بشكل عام " />
            </div>

            <div className="single-section">
              <Title title="صيدلية مرضى أرامكو" />
              <Paragraph paragraph="تقع في الطابق الأول في المبنى القديم، وتعمل على مدار الساعة " />
              <Paragraph paragraph="صيدليات داخلية لمرضى التنويم تعمل على مدار الساعة وتقدم الخدمات التالية :" />
              <Menu
                items={[
                  { text: 'صرف احتياجات الأجنحة من الدواء.' },
                  { text: 'تركيب محاليل التغذية عبر الوريد' },
                  { text: 'تحضير الأدوية السائلة للأطفال.' }
                ]}
              />
            </div>

            <div className="single-section">
              <Title title="نظام صرف الأدوية الآلي (Omnicell)" />
              <Paragraph paragraph="نفخر بوجود نظام صرف الأدوية الآلي في أجنحة التنويم (Omnicell) وهو مكون من خزائن للأدوية مربوطة بنظام المعلومات الصحي بحيث تتعرف هذه الخزائن على كل مريض من خلال رقم ملفه  وتصرف له الدواء  بالجرعة التي حددها الطبيب في الوقت المناسب  بشكل آلي وبدون أي تدخل بشري." />
              <Paragraph paragraph=" يساعد هذا النظام في تقليل احتمالات الأخطاء الدوائية وزيادة الأمان ووتحسين جودة الرعاية الصحية كما سيعطي مزيدًا من الوقت لمقدمي الرعاية الصحية من تمريض وغيرهم للتركيز على المريض والتواصل معه إنسانيًا." />
              <Paragraph paragraph="يساعد النظام أيضًا على تتبع مخزون الأدوية بحيث نستطيع تأمين حاجة كل قسم من الأدوية بوقت مسبق ونتجنب خطورة نقص الأدوية وخصوصا الأدوية التي يترتب عليها أنقاذ حياة المرضى." />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pharmacy;

// small components
const Title = ({ title }) => {
  return <h3 className="pharmacy-title">{title}</h3>;
};

const SubTitle = ({ title }) => {
  return <h4 className="pharmacy-subtitle">{title}</h4>;
};

const Sub_subTitle = ({ title }) => {
  return <h5 className="pharmacy-sub-subtitle">{title}</h5>;
};

const Paragraph = ({ paragraph }) => {
  return (
    <p className="pharmacy-paragraph">
      <Markdown>{paragraph}</Markdown>
    </p>
  );
};

const Menu = ({ items }) => {
  return (
    <ul className="pharmacy-menu">
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
