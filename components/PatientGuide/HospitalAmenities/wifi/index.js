import React from 'react';
import { Container } from 'reactstrap';
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
          <Container>
            <div className="info">
              <h5>
                {language === 'ar' &&
                  `يمكنك الاستمتاع بخدمة الإنترنت (واي فاي) المجانية داخل المستشفى. كل ما عليك القيام به هو`}
                {language === 'en' &&
                  `We can enjoy a free internet (Wi-Fi) service while in the hospital`}
              </h5>
            </div>
            <div className="description">
              <ul>
                <li>
                  {language === 'ar' &&
                    `اختر شبكة مستشفى الموسى من قائمة الشبكة`}
                  {language === 'en' &&
                    `You can get it by selecting the network of Al-Moosa Hospital from the network list .`}
                </li>
                <li>
                  {language === 'ar' &&
                    `اطلب كلمة المرور من أي مقدم رعاية في مستشفى الموسى.`}
                  {language === 'en' &&
                    `Requesting a password from any receptionist .`}
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);
