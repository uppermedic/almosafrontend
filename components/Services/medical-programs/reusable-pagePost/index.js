import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useRouter } from 'next/router';

const SharedPost = ({ data, cutomImgStyle }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="hair-post">
      <Container>
        <Row xs="1" xl="2">
          <Col xl="8">
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: locale && data.seo[locale].content
                }}
              />
            </p>
          </Col>
          <Col xl="4">
            <img style={cutomImgStyle} src={data.image} alt="hair-plant" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SharedPost;
