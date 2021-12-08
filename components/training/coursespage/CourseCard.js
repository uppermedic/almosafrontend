import React, { useEffect, useState } from 'react';
import { Link, i18n, withTranslation } from 'root/i18n';
import { truncate } from 'src/utils/helpers';
import moment from 'moment';

const courseCard = ({ cardData, t }) => {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <Link
      href={`/${locale}/training-education/courses/${
        language && String(cardData[language]?.title).split(' ').join('-')
      }/?id=${cardData?.id}`}
    >
      <a>
        <div className="course-card">
          <div>
            <img src={cardData?.image} alt="course Img" />
          </div>
          <div className="info-box">
            <h3>
              {language &&
                cardData[language]?.title &&
                truncate(cardData[language]?.title, 20, '...')}
            </h3>
            <h5>
              {language && cardData[language]?.speaker_name !== '-'
                ? truncate(cardData[language]?.speaker_name, 20, '...')
                : cardData[language]?.speaker_name}
            </h5>

            <div className="d-flex  course-date">
              <p>
                {t('start')} : {moment(cardData?.start_date).format('D MMM')}
              </p>
              <p>
                {t('end')} : {moment(cardData?.end_date).format('D MMM')}
              </p>
            </div>
            <h5 className="courseCost">
              {t('cost')}: {cardData?.cost}
            </h5>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default withTranslation('common')(courseCard);
