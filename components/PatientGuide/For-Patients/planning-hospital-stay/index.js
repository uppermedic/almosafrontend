import React from 'react';
import { i18n, withTranslation } from 'root/i18n';

const Content = ({ t }) => {
  let { language } = i18n;
  let data = {
    ar: `
    قبل البدء في إجراءات القبول ، ستتلقى جميع المعلومات اللازمة المتعلقة بإقامتك في المستشفى من طبيبك أو الممرضة المخصصة أو معلم المريض. نحن في مستشفى الموسى نهتم بكافة التفاصيل المتعلقة بإقامة المرضى.</br></br>
    يجب عليك إحضار جميع المستندات الطبية والأدوية التي تتناولها (في عبواتها الأصلية) عند وصولك إلى المستشفى. بمجرد دخولك المستشفى ، يمكن لفريق رعاية المستشفى تزويدك بالعلاجات الموصوفة لك.
  `,
    en: `
    Before starting the admission procedures, you will receive all necessary information about your stay in the hospital from your doctor, the nurse assigned to care for you, or the patient educator. We at Al-Moosa Hospital take care of the details related to the stay of patients in the hospital.
    </br></br>
    You must bring all medical documents and medicines you take (in their original packages) when you arrive at the hospital. As soon as you enter the hospital, the hospital care team can provide you with the prescribed treatments.
  `
  };
  return (
    <div className="content">
      <div className="overlay" />
      <div className="container">
        <div className="inner-content">
          <div className="title">
            <h2>{t('patient_guide:Planning Stay')}</h2>
          </div>
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

export default withTranslation(['patient_guide'])(Content);
