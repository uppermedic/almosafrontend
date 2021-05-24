import React from 'react';
import PageTitle from 'src/components/PatientGuide/HospitalAmenities/re-page-title/index.js';

import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="wifi-content">
      <div className="title">
        <h2>{t('patient_guide:wifi')}</h2>
      </div>

      <div className="cover">
        <div className="inner-content">
          <div className="info">
            <h5>
              {language === 'ar' &&
                `يمكنك الاستمتاع بخدمة الإنترنت (واي فاي) المجانية داخل المستشفى. كل ما عليك القيام به هو`}
              {language === 'en' &&
                `You can enjoy free internet (Wi-Fi) service inside the hospital. All you have to do is`}
            </h5>
          </div>
          <div className="description">
            <ul>
              <li>
                {language === 'ar' && `اختر شبكة مستشفى الموسى من قائمة الشبكة`}
                {language === 'en' &&
                  `Select the of Al-Moosa Hospital network  from the network list`}
              </li>
              <li>
                {language === 'ar' &&
                  `اطلب كلمة المرور من أي مقدم رعاية في مستشفى الموسى.`}
                {language === 'en' &&
                  `Request the password from any ASH caregiver.`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);
