import React, { useState, useEffect } from 'react';
import { Link, i18n, withTranslation } from 'root/i18n';
import { Container, Row, Col } from 'reactstrap';
import { strippedContent } from 'src/utils/helpers';

const index = ({ data, t }) => {
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

  const startDate = new Date(data.start_date);
  const endDate = new Date(data.end_date);
  const handleClickReg = () => {
    sessionStorage.setItem('reg_id', data.id);
  };

  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <section className="course-info">
      <Container>
        <Row className="pb-5">
          <Col md={6} className="mx-0 px-0">
            <img src={data.image} alt="course-info" />
          </Col>
          <Col md={6} className="info">
            <h2> {language && data[language].title} </h2>
            <div className="date-location">
              <ul>
                <li>
                  <i className="fas fa-calendar-alt"></i>
                  {startDate.getDate()} {monthNames[startDate.getMonth()]} -
                  {endDate.getDate()} {monthNames[endDate.getMonth()]},
                  {startDate.getFullYear()}
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  {data.email}
                </li>
                <li>
                  <i className="fas fa-phone-square-alt"></i>
                  {data.phone}
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  {language && data[language].location}
                </li>
              </ul>
            </div>
            <div className="cost">
              <p>
                <i className="fas fa-dollar-sign"></i>
                {t('cost')} : {data.cost}
              </p>
              <p>
                <i className="fas fa-microphone"></i>
                {language && data[language].speaker_name}
              </p>
            </div>
            <Link href={`/${locale}/training-education/register`}>
              <a>
                <button onClick={handleClickReg}>
                  {language == 'en' ? 'Register' : 'سجل الأن'}
                </button>
              </a>
            </Link>
          </Col>
        </Row>
        <Row className="about pb-5">
          <Col xs={12}>
            <h2>{language == 'en' ? 'About THE Course' : 'عن الدورة'}</h2>
          </Col>
          <Col xs={12}>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    language && data[language] && data[language].content
                      ? strippedContent(data[language].content)
                      : ''
                }}
              />
            </p>
          </Col>
        </Row>
        <Row className="topics">
          <Col xs={12} className="mb-3">
            <h2> {language == 'en' ? 'Topics Time line:' : 'المواعيد'} </h2>
          </Col>
          <Col xs={12}>
            {data.timelines.map((time, index) => {
              return (
                <div key={index}>
                  <h4>{language && time[language].title} :</h4>
                  <div className="times">
                    <p>
                      <span> {time.start.slice(0, -3)} </span> :{' '}
                      <span>{time.end.slice(0, -3)}</span>
                    </p>
                    <p className="lecture">
                      {language == 'en' ? 'Lecture' : 'محاضرة'} :
                      <span> {language && time[language].lecture_title}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withTranslation('common')(index);
