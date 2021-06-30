import React from 'react';
import { i18n, withTranslation } from 'root/i18n';

const Content = ({ t }) => {
  let { language } = i18n;

  return (
    <div className="content">
      <div className="overlay" />
      <div className="container">
        <div className="inner-content">
          <div className="title">
            <h2>
              {language === 'ar' ? `طلب تقرير طبي` : `Request Medical Report`}
            </h2>
          </div>
          <div className="card">
            <p>
              {language === 'ar'
                ? `يمكن للمريض طلب تقرير طبي من مكتب التقارير الطبية ASH بدون أي رسوم لأول مرة.`
                : `The patient can request a medical report from ASH medical reports office without any fees for the first time.`}
            </p>
            <p>
              {language === 'ar'
                ? `للتواصل مع مكتب التقارير الطبية :`
                : `To contact the medical reports office :`}
            </p>
            <ul className="info">
              <li>
                <span className="icon">
                  <i className="fas fa-phone-square-alt" />
                </span>
                <span className="text">
                  <strong>
                    {language === 'ar' ? `الهاتف: ` : `Telephone: `}
                  </strong>
                  <a href="tel:0135369666">
                    <strong>0135369666 </strong>
                  </a>
                  --
                  {language === 'ar' ? (
                    <strong>تحويلة : 1032</strong>
                  ) : (
                    <strong> Ext : 1032</strong>
                  )}
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-envelope" />
                </span>
                <span className="text">
                  <strong>{language === 'ar' ? `إيميل: ` : `Email: `}</strong>
                  <a
                    target="_blank"
                    href="mailto:M.reports@almoosahospital.com.sa"
                  >
                    M.reports@almoosahospital.com.sa
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['menu', 'patient_guide'])(Content);
