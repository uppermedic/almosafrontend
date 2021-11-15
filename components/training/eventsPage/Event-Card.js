import React, { useEffect, useState } from 'react';
import { Link, i18n, withTranslation } from 'root/i18n';
import { strippedContent, truncate } from 'src/utils/helpers';
import moment from 'moment';

const Event_Card = ({ cardData, t }) => {
  const { language } = i18n;

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const theDate = new Date(cardData.start_date);
  const day = theDate.getDate();
  const month = theDate.getMonth();
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    // need to be cosider for this url ===??? /education/single/1
    <Link
      href={`/${locale}/training-education/events/${
        language && String(cardData[language].title).split(' ').join('-')
      }/?id=${cardData.id}`}
    >
      <div className="card">
        <img src={cardData.image} />
        <div className="event-date">
          {/* Need to be cosider */}
          <p>{day}</p>
          <p>{monthNames[month].slice(0, 3)}</p>
        </div>
        <div className="banner">
          <div>
            <h3>
              {language &&
                cardData[language].title &&
                truncate(cardData[language].title, 20, '...')}
            </h3>
            <p>{language && cardData[language].speaker_name}</p>
          </div>
          <div>
            <p>
              {t('end')} : {moment(cardData.end_date).format('D MMM')}
            </p>
            <p>
              {t('cost')} : {cardData.cost}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default withTranslation('common')(Event_Card);
