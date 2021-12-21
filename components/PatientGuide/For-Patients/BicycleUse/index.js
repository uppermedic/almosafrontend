import React from 'react';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="bicycle-use-content">
      <div className="title">
        <h2>{(language === 'en' && 'Bike to work') || 'ركوب الدراجات'}</h2>
      </div>
      <div className="container">
        <div className="inner-content">
          {language == 'en' && (
            <div className="description">
              <p>
                We launched the bike to work initiative to encourage employees
                to adopt a healthy lifestyle, exercise cycling, replace the car
                with the bicycle as a means of Transportation, save parking
                space and preserve the environment.
                <br />
                <br />
                It is worth mentioning that the hospital offers the opportunity
                for its employees to get bicycles in easy installments and
                provides a dedicated bicycle parking lot in Front of the south
                tower. A complimentary breakfast is served to the staff members
                of the ASH biking team.
              </p>
            </div>
          )}

          {language == 'ar' && (
            <div className="description">
              <p>
                اطلقنا مبادرة ركوب الدراجة الى العمل بهدف تشجيع الموظفين على
                إتباع أسلوب حياة صحي وممارسة رياضة ركوب الدراجات والاستعاضة عن
                السيارة بالدراجة كوسيلة مواصلات بالاضافة إلى توفير مساحة المواقف
                والحفاظ على البيئة .
                <br />
                <br />
                الجدير بالذكر أن المستشفى يتيح الفرصة لموظفيه للحصول على
                الدراجات بأقساط ميسرة كما يوفر مكان مخصص للدراجات أمام البرج
                الجنوبي كما يتم تقديم وجبة إفطار مجانية للموظفين المنضمين لفريق
                دراجي الموسى.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
