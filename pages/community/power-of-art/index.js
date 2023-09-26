import React from 'react';
import { PostWithRightImg } from 'src/components/reusableComponents/Post';
import PostHeading from 'src/components/reusableComponents/PostHeading';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { Container, Row, Col } from 'reactstrap';
import { fetchData } from 'src/store/Request.js';
import { strippedContent } from 'src/utils/helpers';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PowerOfArt = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data[locale]?.title;

  return (
    <section className="power_of_art">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>
      {data?.contents[0] && (
        <PostWithRightImg
          title={locale && data.contents[0][locale].title}
          color="#55B047"
          paragraphs={[locale && data.contents[0][locale].content]}
          theImg={data.contents[0].images[0]}
          customParagraphSize="27px"
        />
      )}

      {/* _________________________________________ */}

      <div className="location">
        <Container>
          {data?.contents[1] && (
            <>
              <PostHeading
                title={locale && data.contents[1][locale].title}
                color="#1E455C"
              />
              <div className="location_paragraph">
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        (locale &&
                          strippedContent(data.contents[1][locale]?.content)) ||
                        'Loading....'
                    }}
                  />
                </p>
              </div>
            </>
          )}

          {data?.contents[1]?.images?.length > 0 && (
            <div className="location_gallery">
              <Row xs="1" md="2">
                {data.contents[1].images.map((img, index) => {
                  return (
                    <Col key={index}>
                      <div className="img-container">
                        <img
                          src={
                            img ||
                            '/images/community/power-of-art/Mask Group 1.png'
                          }
                          alt="location-img"
                        />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}

          {/* Still need data */}

          {data?.objectives?.length > 0 && (
            <div className="objectives">
              <PostHeading
                title={(locale == 'en' && 'Objectives') || 'الأهداف'}
                color="#55B047"
              />
              <Row xs="1" lg="3">
                {data.objectives.map((obj, index) => {
                  return (
                    <Col key={index}>
                      <SingleObjectiev
                        index={index}
                        icon={obj.icon}
                        text={(locale && obj[locale].title) || 'Loading'}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}

          {data?.participating?.length > 0 && (
            <div className="par_groups">
              <PostHeading
                title={
                  (locale == 'en' && 'Participating groups') ||
                  'المجموعات المشاركة'
                }
                color="#1E455C"
              />
              <div className="par_groups_paragraph">
                <p>
                  {locale == 'en'
                    ? 'Artwork falling under the following categories will be accepted'
                    : 'سيتم قبول الأعمال الفنية التي تندرج تحت الفئات التالية'}
                </p>
              </div>
              <div className="groups">
                <Row xs="1" md="3">
                  {data.participating.map((item, index) => {
                    return (
                      <Col key={index}>
                        <div className="single_col">
                          <h4>{locale && item[locale].title}</h4>
                        </div>
                        <div className="col_img">
                          <img src={item.image} alt="colums-img" />
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          )}

          <div className="why_participate">
            {data?.contents[2] && (
              <PostHeading
                title={
                  (locale && data.contents[2][locale].title) ||
                  'Why participate in the Power of Art initiative?'
                }
                color="#55B047"
              />
            )}
            <Row xs="1" xl="2">
              {data?.contents[2]?.images && (
                <Col>
                  <div className="post_img">
                    <img
                      src={
                        data?.contents[2]?.images[0] ||
                        '/images/community/power-of-art/stilte-ruimte-joseph-cals-1024x683.png'
                      }
                      alt="why-par img"
                    />
                  </div>
                </Col>
              )}
              <Col>
                {data?.contents[2] && (
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          (locale && data.contents[2][locale]?.content) ||
                          'Loading ...'
                      }}
                    />
                  </p>
                )}
                {data?.contents[3] && (
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          (locale && data.contents[3][locale].content) ||
                          'Loading ...'
                      }}
                    />
                  </p>
                )}
                {data?.contents[4] && (
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          (locale && data.contents[4][locale]?.content) ||
                          'Loading ...'
                      }}
                    />
                  </p>
                )}
                {data?.contents[5] && (
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          (locale && data.contents[5][locale]?.content) ||
                          'Loading ...'
                      }}
                    />
                  </p>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PowerOfArt;

// Help Components

const SingleObjectiev = ({ icon, text, index }) => {
  const bgColor = index == 0 ? '#FF7800' : index == 1 ? '#FFC100' : '#70BA1B';

  return (
    <div className="single_objective" style={{ backgroundColor: bgColor }}>
      <div className="icon">
        {/* <i className={icon}></i> */}
        <img src={icon} alt="icon" />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export async function getServerSideProps({locale}) {
  let { error, data } = await fetchData('/community/1');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [
        'common',
        'about',
        'news',
        'menu',
        'header',
        'footer',
        'patient_guide'
      ]))
    }
  };
}
