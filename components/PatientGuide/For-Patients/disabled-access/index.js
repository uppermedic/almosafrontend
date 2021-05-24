import React from 'react';
import { i18n, withTranslation } from 'root/i18n';

const Content = ({ t }) => {
  let { language } = i18n;

  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <div className="top-border"></div>
          <div className="bottom-border"></div>
          <div className="title">
            <h2>{t('menu:disabled access')}</h2>
          </div>
          <h5 className="description">
            {language === 'ar' &&
              `يقوم مستشفى الموسى التخصصي بدعم ذوي الاحتياجات الخاصة والإعاقة وذويهم من خلال توفير بيئة آمنة ومريحة لهم، وتوفير الدعم اللازم لهم من أجل حصولهم على رعاية طبية متكاملة ومريحة، والتي تتميز ب:`}
            {language === 'en' &&
              `Almoosa Specialist Hospital cares for disabled patients and their
            families by providing a safe environment and support to receive the
            optimum care.`}
          </h5>

          <ul>
            <li>
              <span>
                {language === 'en' && `Parking lots for the disabled.`}
                {language === 'ar' &&
                  `مواقف للسيارات مناسبة لذوي الاحتياجات الخاصة والإعاقة.`}
              </span>
            </li>
            <li>
              <span>
                {language === 'en' &&
                  `Entrance designed for people with special needs.`}
                {language === 'ar' && `مدخل مريح ومناسب لهم.`}
              </span>
            </li>
            <li>
              <span>
                {language === 'en' && `Specially equipped bathrooms.`}
                {language === 'ar' && `دورات مياه مجهزة وملائمة.`}
              </span>
            </li>
            <li>
              <span>
                {language === 'en' &&
                  `Special seats for visitors with special needs are available next
                to all gates.`}
                {language === 'ar' &&
                  `مقاعد خاصة لذوي الاحتياجات الخاصة متوفرة بجانب كافة البوابات.`}
              </span>
            </li>
            <li>
              <span>
                {language === 'en' &&
                  `Wheelchair transfer assistance for people with disabilities.`}
                {language === 'ar' &&
                  `خدمة المساعدة على نقل الكرسي المتحرك للأشخاص ذوي الاحتياجات الخاصة والإعاقة.`}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['menu'])(Content);

/**
 *  –  –  –  –  –
 */
