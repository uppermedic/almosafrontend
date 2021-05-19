import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';

export default function index() {
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2>PLAY TOGETHER PARK</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between align-items-center section-one no-gutters">
          <Col xs={12} lg={6}>
            <p>
              Play Together is one of Al Muhaidib community service initiatives,
              cooperation between our hospital and Al Muhaidib was established
              to integrate children with disabilities with their healthy peers.
            </p>
          </Col>
          <Col xs={12} lg={6}>
            {/* <Card>
              <CardImg
                top
                width="100%"
                src="/images/community/play-together/park.png"
                alt="Card image cap"
              />
            </Card> */}
            <img src="/images/community/play-together/park.png" alt="" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-between align-items-center section-two no-gutters">
          <Col xs={12} sm={8} className="offset-sm-2">
            <p>
              These community initiatives are considered a living model that
              helps people with disabilities integrate with others.
            </p>
            <p>
              They aim to provide people with special needs to integrate into
              life and interact with others and find a delightful place.
            </p>
            <p>
              Playing these games is considered a tool for learning and allowing
              children to know their peers with special needs. Close-up,
            </p>
            <p>
              which helps society get rid of misconceptions about the abilities
              of children with special needs.
            </p>
            <p>
              Play Together is in the Al-Faisal district in Al-Mubarraz, on an
              area of ​​more than 2,200 square meters, to include more than 12
              specialized games.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="last-section">
        <Container>
          <Row>
            <Col xs={12} sm={6}>
              <img src="/images/community/play-together/park-one.png" alt="" />
            </Col>
            <Col xs={12} sm={6}>
              <img src="/images/community/play-together/park-two.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
