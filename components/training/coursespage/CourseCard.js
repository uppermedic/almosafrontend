import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { truncate } from 'src/utils/helpers';
import moment from 'moment';
import { removeSpChar } from 'src/utils/helpers';
import { useRouter } from 'next/router';

const CourseCard = ({ cardData }) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  return (
    <Link
      href={`/${locale}/training-education/courses/${
        locale &&
        removeSpChar(String(cardData[locale]?.title)).split(' ').join('-')
      }/?id=${cardData?.id}`}
    >
      <a>
        <div className="course-card">
          <div>
            <img src={cardData?.image} alt="course Img" />
          </div>
          <div className="info-box">
            <h3>
              {locale &&
                cardData[locale]?.title &&
                truncate(cardData[locale]?.title, 20, '...')}
            </h3>
            <h5>
              {locale && cardData[locale]?.speaker_name !== '-'
                ? truncate(cardData[locale]?.speaker_name, 20, '...')
                : cardData[locale]?.speaker_name}
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
export default CourseCard;
