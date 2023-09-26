import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { truncate, removeSpChar } from 'src/utils/helpers';
import moment from 'moment';
import { useRouter } from 'next/router';

const EventCard = ({ cardData}) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

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
      href={`/${locale}/training-education/events/${
        locale &&
        removeSpChar(String(cardData[locale]?.title)).split(' ').join('-')
      }/?id=${cardData?.id}`}
    >
      <a>
        <div className="card">
          <img src={cardData.image} alt="event-card" />
          <div className="content-event-card">
            <div className="event-date">
              <p>{day}</p>
              <p>{monthNames[month]?.slice(0, 3)}</p>
            </div>
            <div className="banner">
              <div>
                <h3>
                  {locale &&
                    cardData[locale]?.title &&
                    truncate(cardData[locale]?.title, 20, '...')}
                </h3>
                <p>
                  {locale && cardData[locale]?.speaker_name !== '-'
                    ? truncate(cardData[locale]?.speaker_name, 20, '...')
                    : cardData[locale]?.speaker_name}
                </p>
              </div>
              <div>
                <p>
                  {t('end')} : {moment(cardData?.end_date).format('D MMM')}
                </p>
                <p>
                  {t('cost')} : {cardData?.cost}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default EventCard;
