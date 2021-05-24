import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { Container, Row, Col, Button } from 'reactstrap';
export default function index() {
  return (
    <div className="content-wrapper">
      <Container>
        <Row>
          <Col md={6} className="left">
            <div>
              <p>404</p>
              <p>Error</p>
            </div>
          </Col>
          <Col md={6} className="right">
            <div>
              <p>We couldn`t find this page</p>
              <Link href="/">
                <a>Back To Home</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
