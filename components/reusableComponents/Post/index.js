import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PostHeading from '../PostHeading';
import Markdown from 'markdown-to-jsx';
import { strippedContent, getEmbedVid } from 'src/utils/helpers.js';
import CardItem from './CardItem';
import { useRouter } from 'next/router';

const PostContent = ({ title, color, paragraphs, theVideo }) => {
  return (
    <div className="post_with_title">
      <div className="container">
        {/* if it's a post with two columns one paragraph and one img */}
        <div className="one_column_post_content">
          {title && <PostHeading title={title} color={color} />}
          <Container>
            <Row xs="1">
              {paragraphs && (
                <Col>
                  <div className="post-paragraph ">
                    {paragraphs?.map((paragraph, index) => {
                      return (
                        <p key={index} className="single_paragraph">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: paragraph || ' '
                            }}
                          />
                        </p>
                      );
                    })}
                  </div>
                </Col>
              )}
            </Row>
            {theVideo && (
              <Row className="top-section">
                <Col>
                  <div className="video-wrapper">
                    <div className="video-div">
                      <iframe
                        width="100%"
                        height="100%"
                        src={getEmbedVid(theVideo)}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

const PostContentWithCards = ({ title, color, paragraphs, items }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="post_with_title">
      <div className="container">
        {/* if it's a post with two columns one paragraph and one img */}
        <div className="one_column_post_content">
          {title && <PostHeading title={title} color={color} />}
          <Container>
            <Row xs="1">
              {paragraphs && (
                <Col>
                  <div className="post-paragraph ">
                    {paragraphs?.map((paragraph, index) => {
                      return (
                        <p key={index} className="single_paragraph">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: paragraph || ' '
                            }}
                          />
                        </p>
                      );
                    })}
                  </div>
                </Col>
              )}
            </Row>
            <Row xs="1" sm="2" md="3" lg="4" className="mt-3">
              {items.length > 0 &&
                items?.map((item, index) => (
                  <Col key={index}>
                    <CardItem
                      name={locale && item[locale]?.name}
                      title={locale && item[locale]?.title}
                      image={item?.image[0]}
                      link={item?.url}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

const PostWithRightImg = ({ title, color, theImg, paragraphs, theVideo }) => {
  return (
    <div className="post_with_title">
      <div className="container">
        {/* if it's a post with two columns one paragraph and one img */}
        <div className="two_columns_post">
          {title && <PostHeading title={title} color={color} />}
          <Container>
            <Row xs="1" xl="2">
              {paragraphs && (
                <Col xl="7">
                  <div className="post-paragraph d-flex flex-column justify-content-center align-items-center">
                    {paragraphs.map((paragraph, index) => {
                      return (
                        <p key={index} className="single_paragraph">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: paragraph || ' '
                            }}
                          />
                        </p>
                      );
                    })}
                  </div>
                </Col>
              )}
              {typeof theImg === 'string' && (
                <Col xl="5">
                  <div className="post-img">
                    <img src={theImg} alt="post-img" />
                  </div>
                </Col>
              )}

              {typeof theImg === 'object' && theImg?.length > 0 && (
                <Col className="d-flex" xl="5">
                  {theImg.map(img => (
                    <div className="post-img mx-2">
                      <img src={img} alt="post-img" />
                    </div>
                  ))}
                </Col>
              )}
            </Row>
            {theVideo && (
              <Row className="top-section">
                <Col>
                  <div className="video-wrapper">
                    <div className="video-div">
                      <iframe
                        width="100%"
                        height="100%"
                        src={getEmbedVid(theVideo)}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

const PostWithLeftImg = ({ title, color, theImg, paragraphs }) => {
  return (
    <div className="post_with_title">
      <div className="container">
        <div className="two_columns_post">
          {title && <PostHeading title={title} color={color} />}
          <Container>
            <Row xs="1" xl="2">
              {theImg && (
                <Col>
                  <div className="post-img">
                    <img src={theImg} alt="post-img" />
                  </div>
                </Col>
              )}
              {paragraphs && (
                <Col>
                  <div className="post-paragraph">
                    {paragraphs.map((paragraph, index) => {
                      return (
                        <p key={index} className="single_paragraph">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: paragraph || ' '
                            }}
                          />
                        </p>
                      );
                    })}
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

const PostWithCenterImg = ({
  title,
  color,
  theImg,
  paragraphs,
  subTitles,
  theVideo
}) => {
  return (
    <div className="post_with_title">
      <div className="container">
        <div className="one_column_post">
          {title && <PostHeading title={title} color={color} />}
          {subTitles && (
            <div className="sub_titles">
              {subTitles.map((subTitle, index) => {
                return (
                  <h2 key={index} className="subtitle">
                    <Markdown>
                      {(subTitle && strippedContent(subTitle)) || ' '}
                    </Markdown>
                  </h2>
                );
              })}
            </div>
          )}
          {paragraphs &&
            paragraphs.map((paragraph, index) => {
              return (
                <div key={index} className="post-paragraph">
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: paragraph || ' '
                      }}
                    />
                  </p>
                </div>
              );
            })}
          {theImg && (
            <div className="post-img">
              <img src={theImg} alt="post-img" />
            </div>
          )}
          {theVideo && (
            <div className="video-wrapper">
              <div className="video-div">
                <iframe
                  width="100%"
                  height="100%"
                  src={getEmbedVid(theVideo)}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export {
  PostContent,
  PostWithCenterImg,
  PostWithRightImg,
  PostWithLeftImg,
  PostContentWithCards
};
