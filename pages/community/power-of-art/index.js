import React from 'react';
import { PostWithRightImg } from 'src/components/reusableComponents/Post';
import PostHeading from 'src/components/reusableComponents/PostHeading';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { Container, Row, Col } from 'reactstrap';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';
import { strippedContent } from 'src/utils/helpers';

const PowerOfArt = ({ data }) => {
  const lang = i18n.language;
  return (
    <section className="power_of_art">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{lang && data[lang].title} </h1>
        </div>
      </Hero>
      {data?.contents[0] && (
        <PostWithRightImg
          title={lang && data.contents[0][lang].title}
          color="#55B047"
          paragraphs={[lang && data.contents[0][lang].content]}
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
                title={lang && data.contents[1][lang].title}
                color="#1E455C"
              />
              <div className="location_paragraph">
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        (lang &&
                          strippedContent(data.contents[1][lang]?.content)) ||
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
                title={(lang == 'en' && 'Objectives') || 'الأهداف'}
                color="#55B047"
              />
              <Row xs="1" lg="3">
                {data.objectives.map((obj, index) => {
                  return (
                    <Col key={index}>
                      <SingleObjectiev
                        index={index}
                        icon={obj.icon}
                        text={(lang && obj[lang].title) || 'Loading'}
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
                  (lang == 'en' && 'Participating groups') ||
                  'المجموعات المشاركة'
                }
                color="#1E455C"
              />
              <div className="par_groups_paragraph">
                <p>
                  {lang == 'en'
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
                          <h4>{lang && item[lang].title}</h4>
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
                  (lang && data.contents[2][lang].title) ||
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
                          (lang && data.contents[2][lang]?.content) ||
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
                          (lang && data.contents[3][lang].content) ||
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
                          (lang && data.contents[4][lang]?.content) ||
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
                          (lang && data.contents[5][lang]?.content) ||
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

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/1');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
