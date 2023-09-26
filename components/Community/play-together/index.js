import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PostWithCenterImg } from 'src/components/reusableComponents/Post';
import { useRouter } from 'next/router';

export default function index({ data }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2>{locale && data?.contents[0][locale]?.title}</h2>
          </Col>
        </Row>
        {data?.contents[0][locale]?.content && (
          <Row className="d-flex justify-content-between align-items-center section-one no-gutters">
            <Col xs={12} lg={6}>
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: (locale && data?.contents[0][locale]?.content) || ''
                  }}
                />
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <img src={data?.contents[0]?.images[0]} alt="play-together" />
            </Col>
          </Row>
        )}

        {locale && data?.contents[1][locale]?.content && (
          <div className="section-two">
            <PostWithCenterImg
              paragraphs={[locale && data?.contents[1][locale]?.content]}
            />
            <p></p>
          </div>
        )}

        {data?.contents[2]?.images && (
          <div className="last-section">
            <Row>
              {data?.contents[2]?.images.map((img, idx) => {
                return (
                  <Col xs={12} sm={6} key={idx}>
                    <img src={img} alt="play" />
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
}
