import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PostHeading from '../PostHeading';
import Markdown from 'markdown-to-jsx';
import { strippedContent, getEmbedVid } from 'src/utils/helpers.js';

const PostWithRightImg = ({
  title,
  color,
  theImg,
  paragraphs,
  customParagraphSize
}) => {
  return (
    <div className="post_with_title">
      <div className="container">
        {/* if it's a post with two columns one paragraph and one img */}
        <div className="two_columns_post">
          {title && <PostHeading title={title} color={color} />}
          <Container>
            <Row xs="1" xl="2">
              {paragraphs && (
                <Col>
                  <div className="post-paragraph d-flex flex-column justify-content-center align-items-center">
                    {paragraphs.map((paragraph, index) => {
                      return (
                        <p key={index} className="single_paragraph">
                          {(paragraph && strippedContent(paragraph)) ||
                            'No Data'}
                        </p>
                      );
                    })}
                  </div>
                </Col>
              )}
              {theImg && (
                <Col>
                  <div className="post-img">
                    <img src={theImg} alt="post-img" />
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
                          <Markdown>
                            {(paragraph && strippedContent(paragraph)) ||
                              'No Data'}
                          </Markdown>
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
                      {(subTitle && strippedContent(subTitle)) || 'No Data'}
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
                  <Markdown>
                    {(paragraph && strippedContent(paragraph)) || 'No Data'}
                  </Markdown>
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
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { PostWithCenterImg, PostWithRightImg, PostWithLeftImg };
