import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const RelatedLinks = ({ links }) => {
  return (
    <div className="reusable-related-links">
      <Container>
        <Row xs="1" lg="2">
          <Col className="related-links-title">
            <div className="pointer">
              <i className="fas fa-link"></i> Related centers and clinics
            </div>
            <div className="shape"></div>
          </Col>
          <Col>
            <div className="links">
              {links.map((link, index) => {
                return (
                  <div className="one-link" key={index}>
                    <a href={link.url}>{link.title}</a>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RelatedLinks;
