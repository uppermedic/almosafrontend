import React from 'react';
import Ratings from 'react-ratings-declarative';
import { Link, i18n, withTranslation } from 'root/i18n';
import { truncate } from 'src/utils/helpers';
import moment from 'moment';

const courseCard = ({ cardData, t }) => {
  const lang = i18n.language;
  return (
    <Link
      href={`/training-education/course/${
        lang && String(cardData[lang].title).split(' ').join('-')
      }?id=${cardData.id}`}
    >
      <div className="course-card">
        <div>
          <img src={cardData.image} alt="course Img" />
        </div>
        <div className="info-box">
          <h3>
            {lang &&
              cardData[lang].title &&
              truncate(cardData[lang].title, 20, '...')}
          </h3>
          <h5>{lang && cardData[lang].speaker_name}</h5>
          {/* <div>
            <Ratings
              rating={cardData.rate}
              widgetDimensions="20px"
              widgetSpacings="5px"
            >
              <Ratings.Widget
                widgetRatedColor="#5BAC32"
                widgetDimension="25px"
              />
              <Ratings.Widget
                widgetRatedColor="#5BAC32"
                widgetDimension="25px"
              />
              <Ratings.Widget
                widgetRatedColor="#5BAC32"
                widgetDimension="25px"
              />
              <Ratings.Widget
                widgetRatedColor="#5BAC32"
                widgetDimension="25px"
              />
              <Ratings.Widget
                widgetRatedColor="#5BAC32"
                widgetDimension="25px"
              />
            </Ratings>
            <span className="rate-num">{cardData.rate}</span>
          </div> */}
          <div className="d-flex  course-date">
            <p>
              {t('start')} : {moment(cardData.start_date).format('D MMM')}
            </p>
            <p>
              {t('end')} : {moment(cardData.end_date).format('D MMM')}
            </p>
          </div>
          <h5 className="courseCost">
            {t('cost')}: {cardData.cost}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default withTranslation('common')(courseCard);
