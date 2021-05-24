import React from 'react';
import Hero from 'src/components/layout/Hero';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;

  return (
    <div className="content">
      <div className="title">
        <h2>{t('mosques')}</h2>
      </div>
      <div className="info">
        <h5 className="note">
          {language === 'ar' && `يتوفر داخل مستشفى الموسى التخصصي مسجدان :`}
          {language === 'en' && `There are two mosques in the hospital :`}
        </h5>
        {language === 'ar' && (
          <div className="desc">
            <div className="one">
              <div className="type">
                <h6>للرجال:</h6>
              </div>
              <div className="location">
                <p>
                  <span className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="txt">
                    مقابل الاستقبال الرئيسي في الدور الثاني.
                  </span>
                </p>
              </div>
            </div>
            <div className="one">
              <div className="type">
                <h6> للنساء :</h6>
              </div>
              <div className="location">
                <p>
                  <span className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="txt">
                    يقع في الطابق الثالث من البرج الطبي الجنوبي
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
        {language === 'en' && (
          <div className="desc">
            <div className="one">
              <div className="type">
                <h6>For Men:</h6>
              </div>
              <div className="location">
                <p>
                  <span className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="txt">
                    Located In front of the main reception on the second floor.
                  </span>
                </p>
              </div>
            </div>
            <div className="one">
              <div className="type">
                <h6>For Women:</h6>
              </div>
              <div className="location">
                <p>
                  <span className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="txt">
                    Located on the 3rd floor of the south Medical Tower
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* </Hero> */}
    </div>
  );
};

export default withTranslation(['patient_guide'])(Content);
