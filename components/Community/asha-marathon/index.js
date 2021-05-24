import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent, getEmbedVid } from 'src/utils/helpers.js';
import {
  PostWithLeftImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import PostHeading from 'src/components/reusableComponents/PostHeading';

const index = ({ data }) => {
  const lang = i18n.language;

  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <PostHeading title={lang && data[0][lang].title} color="#1E455C" />
          </Col>
        </Row>
        <Row className="marathon-sponsor p-3">
          <Col xs={12}>
            <h4>
              <Markdown>
                {(lang && strippedContent(data[0][lang].content)) || 'No Data'}
              </Markdown>
            </h4>
          </Col>
          {data[0].images.map((img, idx) => {
            return (
              <Col md={4} key={idx}>
                <Card className="mb-2">
                  <CardImg width="100%" src={img} alt="Card image cap" />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="marathon-info">
        <Container>
          <Row className="p-3">
            <img
              src="/images/community/asha-marathon/marathon-info-bg.png"
              className="bottom-zigzag"
            />

            <Col md={4}>
              <h4>
                <Markdown>
                  {(lang && strippedContent(data[1][lang].title)) || 'No Data'}
                </Markdown>
              </h4>
            </Col>
            <Col md={8} className=" mt-md-4">
              <p className="p-3 py-5">
                <Markdown>
                  {(lang && strippedContent(data[1][lang].content)) ||
                    'No Data'}
                </Markdown>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Container>
        <Row className="marathon-vedio py-5 my-3">
          <Col>
            <h2>{(lang && strippedContent(data[1][lang].title)) || 'No Data'}</h2>
          </Col>
          <div className="video-wrapper mt-5 mx-auto">
            <div className="video-div">
              <iframe 
                width="100%"
                height="100%"
                src={getEmbedVid(data[2].video)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Row>
      </Container> */}
      <PostWithCenterImg
        title={lang && data[1][lang].title}
        // subTitles={['Six families benefited from the program.']}
        color="#55B047"
        // theImg={data.contents[1].images[0]}
        theVideo={data[2].video}
      />
    </section>
  );
};

export default index;
