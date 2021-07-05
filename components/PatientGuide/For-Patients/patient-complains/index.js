import React from 'react';
import { i18n, withTranslation } from 'root/i18n';

const Content = ({ t }) => {
  let { language } = i18n;
  let data = {
    ar: `
    الشكاوى المقدمة من قبل مرضانا هي طرق أساسية لقياس وتحسين تجربة المريض.
    </br></br>
    يمكن للمريض تقديم شكواه من خلال مكتب علاقات المرضى </br> 
    تحويلة 1423 - جوال:
    <a href="tel:0552952660">0552952660</a> 
  `,
    en: `
    Complaints submitted by our patients are essential methods of measuring and improving the patient experience.
    </br></br>
    The patient can submit his complaint through the Patient Relations Office </br>
    Office <strong>1423</strong> - Tel:
    <a href="tel:0552952660"><strong>0552952660</strong></a>
  `
  };
  return (
    <div className="content">
      <div className="inner-content">
        <div className="title">
          <h2>{t('menu:patient complains')}</h2>
        </div>
        <div className="container">
          {language === 'ar' && (
            <div
              className="desc"
              dangerouslySetInnerHTML={{
                __html: data['ar']
              }}
            />
          )}
          {language === 'en' && (
            <div
              className="desc"
              dangerouslySetInnerHTML={{
                __html: data['en']
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['menu'])(Content);
