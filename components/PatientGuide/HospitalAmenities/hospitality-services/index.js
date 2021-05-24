import React from 'react';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="hospitality-services-content">
      <div className="card-title">
        <h2>{t('patient_guide:hospitalit services')}</h2>
      </div>

      <div className="container">
        <div className="card-wrapper">
          <div className="dining-card">
            {language == 'en' && (
              <div className="description">
                <h5>Sidra Lounge:</h5>
                <p>
                  With its signature approach, Sidra Lounge creates a refined
                  culinary and lifestyle experience for visitors to Almoosa
                  Specialist Hospital. Taking its name from the tree renowned as
                  a symbol of nourishment, Sidra welcomes its guests to a place
                  of calm, comfort and relaxation to indulge in a high-quality
                  menu of meals, bites and drinks, all freshly prepared. For
                  those wishing to take away, the Sidra On The Go concept has
                  been designed for the ultimate convenience.
                </p>
              </div>
            )}
            {language == 'ar' && (
              <div className="description">
                <h5>ردهة السدرة:</h5>
                <p>
                  من خلال تصميمها المميّز، تخلق ردهة السدرة تجربة طهي باسلوب
                  عالمي راق لزوّار مستشفى الموسى التخصصي. اُقتبس إسمها من شجرة
                  تشتهر بالإحساء كرمز للكرم والضيافه. السدرة ترحب بضيوفها في جوّ
                  من الهدوء والراحة والاسترخاء لاختبار تجربة عالية الجودة من
                  وجبات الطعام، والمشروبات الطازجة والمختارة بعناية.
                </p>
              </div>
            )}

            {language == 'en' && (
              <div className="description">
                <h5>The Leaf Kitchen:</h5>
                <p>
                  Set atop the tallest hospital in the Middle East, The Leaf
                  Kitchen welcomes its visitors to an elevated experience, where
                  casual dining meets blissful tranquility. The Leaf Kitchen’s
                  design soothes the mind with its color palette and materials
                  evoking nature, while its menu places the emphasis on fresh,
                  healthy ingredients for your wellbeing.
                </p>
              </div>
            )}
            {language == 'ar' && (
              <div className="description">
                <h5>مطبخ ورقة الشجرة:</h5>
                <p>
                  يقع مطبخ الأوراق على قمة أعلى مستشفى في الشرق الأوسط ،
                  ويرحبيقع في أطول مستشفى في الشرق الأوسط، ويرحب بزوّاره لتجربة
                  فريدة، حيث يمتزج تناول الطعام بالهدوء والسكينة. تصميم المطبخ
                  يهدئ العقل والروح من خلال لوحة الألوان والمواد التي تستحضر
                  الطبيعة، في حين ترتكز قائمته على المكوّنات الطازجة والصحيّة
                  لرفاهيتك.
                </p>
              </div>
            )}

            {language == 'en' && (
              <div className="description">
                <h5>Hospitality services:</h5>
                <p>
                  In line with the leading-edge, patient-centric approach at
                  Almoosa Specialist Hospital, patients have access to
                  round-the-clock room service, allowing them to order via
                  tablet from a special menu of beverages and healthy snacks and
                  meals.
                  <br />
                  Visitors to the hospital can also make use of a golf cart
                  service, transporting them from the parking lots to the
                  hospital entrance for their convenience. Inside the hospital,
                  concierge and butler services are provided to take care of
                  administration or pharmacy needs, allowing visitors to relax
                  and enjoy refreshments in the meantime.
                  <br />
                  All food and beverage services are catered from a new,
                  expanded kitchen, totaling 600m2, which has been built and
                  fitted to the highest ISO standards.
                </p>
              </div>
            )}
            {language == 'ar' && (
              <div className="description">
                <h5>خدمات الضيافة:</h5>
                <p>
                  تماشيا مع النهج الرائد والمتمحور حول الانسان في مستشفى الموسى
                  التخصصي، يمكن للمرضى الوصول إلى خدمة الغرف على مدار الساعة،
                  ممّا يسمح لهم بالطلب عبر الكمبيوتر اللوحي من قائمة خاصة من
                  المشروبات والوجبات الصحيّة. <br />
                  يمكن لزوّار المستشفى أيضا الاستفادة من خدمة عربة الغولف، لنقل
                  المرضى من مواقف السيارات إلى مدخل المستشفى لضمان أقصى مستويات
                  الراحة. يتم توفير خدمات الاستقبال والارشاد والخادم "البتلر"،
                  داخل المستشفى، لتسهيل الاجراءات الادارية او طلب الادوية من
                  الصيدلية، ممّا يسمح للزوار بالاسترخاء والاستمتاع بالمرطبات في
                  غضون ذلك.
                  <br />
                  يتم تقديم جميع خدمات الأغذية والمشروبات من مطبخ جديد موسّع،
                  تبلغ مساحتة 600 متر مربع، والذي تم بناؤه وتركيبه وفقاً لأعلى
                  معايير الايزو ISO.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);
