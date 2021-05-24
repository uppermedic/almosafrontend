import React from 'react';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="gardens-content">
      <div className="title">
        <h2>
          {(language === 'en' && 'Gardens and greenery') ||
            'الحدائق والمساحات الخضراء'}
        </h2>
      </div>
      <div className="container">
        <div className="inner-content">
          {language == 'en' && (
            <>
              <div className="description">
                <p>
                  The design of the north tower is based on the green
                  architecture style, the optimal use of energy, maintaining a
                  clean environment, the integration of natural elements such as
                  sunlight and gardens, and easy access ، more than two floors
                  “second and fifth floor"
                </p>
              </div>
              <div className="description">
                <h5>Alfaisal Park:</h5>
                <p>
                  In Front of the north tower, provides recreational attractions
                  such as children's games and seating umbrellas, the park also
                  represents a natural outlet for patients
                </p>
              </div>
              <div className="description">
                <h5>Play together Park:</h5>
                <p>
                  One of “Play Together initiatives” in Al-Ahsa in Al-Faisal
                  neighborhood in Al-mubarraz on an area of more than
                  <strong> 2200 </strong>
                  square meters to include more than 12 games specialized in the
                  integration of children with disabilities with their healthy
                  peers to contribute to the realization of the values of
                  integration.
                </p>
              </div>
            </>
          )}

          {language == 'ar' && (
            <>
              <div className="description">
                <p>
                  اعتمد تصميم البرج الشمالي على أسلوب العمارة الخضراء صديقة
                  البيئة، والاستخدام الأمثل للطاقة، وتقليل الضرر على البيئة
                  المحيطة، إضافة إلى دمج العناصر الطبيعية كضوء الشمس والحدائق،
                  وإمكانية الوصول إليها بسهولة ، في اكثر من طابق " الطابق الثاني
                  والخامس"
                  <br />
                  <br />
                  بالاضافة الى حديقة الفيصل المقابلة للبرج الشمالي و التى توفر
                  عوامل جذب ترفيهية من العاب الأطفال ومظلات الجلوس ، كما تمثل
                  الحديقه متنفساً طبيعيا للمرضى
                </p>
              </div>
              <div className="description">
                <h5>حديقة نلعب معاً:</h5>
                <p>
                  تقع حديقة الموسى إحدى حدائق مبادرة نلعب معاً بالاحساء في حي
                  الفيصل بالمبرز على مساحة تزيد عن <strong>2200</strong> متر
                  مربع لتضم اكثر من 12 لعبة متخصصة في الدمج للأطفال من ذوي
                  الاعاقة مع قرنائهم من الأطفال السليمين لتساهم في تحقيق قيم
                  الدمج.
                  <br />
                  <br />
                  يذكر بأنه تم إنشاء الحديقة امتدادًا لسلسلة حدائق نلعب معاً
                  والتي كانت أولها حديقة المهيدب في حي الهدا بمدينة الخبر، ومن
                  المتوقع بمشيئة الله افتتاح الحديقة الثالثة في مدينة الدمام
                  مطلع العام القادم.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
