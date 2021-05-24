import React from 'react';
import { withTranslation, i18n } from 'root/i18n';

const Content = ({ t }) => {
  const { language } = i18n;
  return (
    <div className="gift-shop-content">
      <div className="title">
        <h2>{(language === 'en' && 'Gift shop') || 'متجر الورد والهدايا'}</h2>
      </div>
      <div className="container">
        <div className="inner-content">
          {language == 'en' && (
            <>
              <div className="description">
                <p>
                  Florist and gift shop is located in the main lobby of the
                  North Tower, the store offers a collection of fresh roses and
                  flower bouquets for your beloved ones.
                </p>
              </div>
              <div className="description">
                <h5>Working hours:</h5>
                <p>
                  9:00 am -12:00 noon
                  <br />
                  5:00 pm-9: 00 pm
                </p>
              </div>
              <div className="description">
                <h5>Available items:</h5>
                <ul>
                  <li>Children's gifts.</li>
                  <li>Candles.</li>
                  <li>Cards.</li>
                  <li> Flower bouquets.</li>
                  <li>Toys, cotton dolls, and stuffed animals.</li>
                </ul>
              </div>
            </>
          )}

          {language == 'ar' && (
            <>
              <div className="description">
                <p>
                  متجر الزهور والهدايا يقع في اللوبي الرئيسي للبرج الشمالي، يقدم
                  المتجر مجموعة متنوعة من أصناف الورود لتهديها لأحبابك من المرضي
                  المنومين.
                </p>
              </div>
              <div className="description">
                <h5>ساعات العمل:</h5>
                <p>
                  9:00 صباحاً -12:00 ظهراً
                  <br />
                  5:00عصراً -9:00 مساءاً
                </p>
              </div>
              <div className="description">
                <h5>الأصناف المتوفر:</h5>
                <ul>
                  <li>هدايا الأطفال.</li>
                  <li>شموع.</li>
                  <li>بطاقات.</li>
                  <li> باقات الزهور.</li>
                  <li>الألعاب والدمي القطنية والحيوانات المحشوة.</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
