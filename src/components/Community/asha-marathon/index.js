import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';

const index = () => {
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2>AHSA RUN MARATHON</h2>
          </Col>
        </Row>
        <Row className="marathon-sponsor p-3">
          <Col xs={12}>
            <h4>
              Sponsored by ASH – General Sports Authority – Saudi Federation for
              Community Sports
            </h4>
          </Col>
          <Col md={4}>
            <Card className="mb-2">
              <CardImg
                width="100%"
                src="/images/community/asha-marathon/run-marathon-1.png"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-2">
              <CardImg
                width="100%"
                src="/images/community/asha-marathon/run-marathon-2.png"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-2">
              <CardImg
                width="100%"
                src="/images/community/asha-marathon/run-marathon-3.png"
                alt="Card image cap"
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="marathon-info">
        <Container>
          <Row className="p-3">
            <img
              src="/images/community/asha-marathon/marathon-info-bg.png"
              className="bottom-zigzag"
            />
            <Col md={6}>
              <h4>
                We aimed to increase awareness of the importance of running and
                a healthy lifestyle.
              </h4>
            </Col>
            <Col md={6} className=" mt-4">
              <p className="p-3 py-5">
                The number of participants exceeded 8,000 professionals,
                amateurs, children, elderly, and handicaps, and the prizes
                varied between cars, cash, and valuable prizes.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="marathon-vedio py-5 my-3">
          <Col>
            <h2>AHSA RUN MARATHON Video</h2>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col className="d-flex justify-content-center">
            <iframe
              width="1500"
              height="967"
              src="https://www.youtube.com/embed/Gmh_xMMJ2Pw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
