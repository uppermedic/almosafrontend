import React from 'react';
import { i18n } from 'root/i18n';

const CovidMessage = () => {
  const { language } = i18n;

  return (
    <div className="covid-message">
      {/* ************ English Content ************ */}
      {language == 'en' && (
        <div className="content">
          <h2>
            Visitor, Family, and Care Partner Restrictions Related to COVID-19
            Pandemic
          </h2>
          <h3>A Message to our beloved patients, visitors & care partners</h3>
          <p>
            Al Moosa Specialist Hospital welcomes all our patients' families,
            friends and distinguished visitors. Because we believe that the
            presence of the family is an important source of psychological
            stability for the patient, as an important factor in speeding up the
            patient's recovery process, we strive to provide a 24/7 visiting
            policy.
            <br />
            We are proud to be the first recognized hospital in the Middle East
            to be recognized as a health facility providing human-centered care.
            <br />
            Unfortunately, the Coronavirus pandemic has brought with it many
            challenges that forced us to change our practices. As a
            human-centered hospital, it is our duty to take all measures to
            combat the spread of this disease and to ensure the protection of
            our patients, caregivers and visitors.
            <br />
            To achieve this, we had no choice but to implement new restrictions
            on visiting policy during this pandemic. On the one hand, we are
            looking for innovative ways to provide patient family visits (such
            as virtual visits) along with a limited number of hospital visits in
            certain cases.
          </p>
        </div>
      )}

      {/* ************ Arabic Content ************ */}
      {language == 'ar' && (
        <div className="content">
          <h2>قيود الزيارة والأسرة وشركاء الرعاية المتعلقة بجائحة COVID-19</h2>
          <h3>رسالة إلى زائرينا وشركاء الرعاية الأعزاء</h3>
          <p>
            يرحب مستشفى الموسى التخصصي بجميع عائلات مرضانا وأصدقائهم وزوارنا
            الكرام، ولأننا نؤمن بأن وجود الأسرة يشكل مصدرًا مهمًا للاستقرار
            النفسي للمريض، وإيمانًا منا بأنه عامل مهم في تسريع عملية شفاء
            المريض، نسعى جاهدين لتوفير سياسة زيارات على مدار الساعة طوال أيام
            الأسبوع ونفخر بكوننا أول مستشفى معترف به في الشرق الأوسط ويتم
            الاعتراف به كمرفق صحي يقدم رعاية تتمحور حول الإنسان.
            <br />
            لسوء الحظ، جلبت جائحة كورونا معها العديد من التحديات التي أجبرتنا
            على تغيير ممارساتنا كمستشفى يركز على الإنسان، فإن واجبنا هو اتخاذ
            جميع التدابير لمكافحة انتشار هذا المرض وضمان حماية مرضانا ومقدمي
            الرعاية والزائرين.
            <br />
            لتحقيق ذلك، لم يكن لدينا خيار سوى تنفيذ قيود جديدة على سياسة الزيارة
            أثناء هذا الوباء. من ناحية أخرى، نحن نبحث عن طرق مبتكرة لتوفير
            زيارات عائلية للمرضى (مثل الزيارات الافتراضية) إلى جانب عدد محدود
            للزيارات في المستشفى في حالات إنسانية معينة.
          </p>
        </div>
      )}
    </div>
  );
};

export default CovidMessage;
