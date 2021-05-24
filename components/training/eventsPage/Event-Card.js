import React, { useEffect } from 'react';
import { Link, i18n, withTranslation } from 'root/i18n';
import { strippedContent, truncate } from 'src/utils/helpers';
import moment from 'moment';

const Event_Card = ({ cardData, t }) => {
  const lang = i18n.language;
  //console.log(cardData);

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

  return (
    // need to be cosider for this url ===??? /education/single/1
    <Link
      href={`/training-education/event/${
        lang && String(cardData[lang].title).split(' ').join('-')
      }?id=${cardData.id}`}
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
              {lang &&
                cardData[lang].title &&
                truncate(cardData[lang].title, 20, '...')}
            </h3>
            <p>{lang && cardData[lang].speaker_name}</p>
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
