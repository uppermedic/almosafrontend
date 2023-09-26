import React from 'react';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Index = ({ data }) => {
const { t } = useTranslation('common');

  const router = useRouter();
  const { locale } = router;

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

  return (
    <section className="course-info">
      <Container>
        <Row className="pb-5">
          <Col md={6} className="mx-0 px-0">
            <img src={data.image} alt="course-info" />
          </Col>
          <Col md={6} className="info">
            <h2> {locale && data[locale].title} </h2>
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
                  {data.phone?.split(' ').join('')}
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  {locale && data[locale].location}
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
                {locale && data[locale].speaker_name}
              </p>
            </div>
            <Link href={`/${locale}/training-education/register`}>
              <a>
                <button onClick={handleClickReg}>
                  {locale == 'en' ? 'Register' : 'سجل الأن'}
                </button>
              </a>
            </Link>
          </Col>
        </Row>
        {locale && data[locale]?.content && (
          <Row className="about pb-5">
            <Col xs={12}>
              <h2>{locale == 'en' ? 'About THE Course' : 'عن الدورة'}</h2>
            </Col>
            <Col xs={12}>
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[locale]?.content
                      ? data[locale].content
                      : ''
                  }}
                />
              </p>
            </Col>
          </Row>
        )}
        {data?.timelines?.length > 0 && (
          <Row className="topics">
            <Col xs={12} className="mb-3">
              <h2> {locale == 'en' ? 'Topics Time line:' : 'المواعيد'} </h2>
            </Col>
            <Col xs={12}>
              {data.timelines.map((time, index) => {
                return (
                  <div key={index}>
                    <h4>{locale && time[locale].title} :</h4>
                    <div className="times">
                      <p>
                        <span> {time.start.slice(0, -3)} </span> :{' '}
                        <span>{time.end.slice(0, -3)}</span>
                      </p>
                      <p className="lecture">
                        {locale == 'en' ? 'Lecture' : 'محاضرة'} :
                        <span> {locale && time[locale].lecture_title}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Index;
