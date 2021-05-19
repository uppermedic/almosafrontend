import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const SharedPost = ({ data, cutomImgStyle }) => {
  return (
    <section className="hair-post">
      <Container>
        <Row xs="1" xl="2">
          <Col xl="8">{data.sideParagraph}</Col>
          <Col xl="4">
            <img style={cutomImgStyle} src={data.postImg} alt="hair-plant" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SharedPost;
