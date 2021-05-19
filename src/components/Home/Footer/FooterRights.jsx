import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
export default function FooterRights() {
  return (
    <div className="footer-rights">
      <Container>
        <Row>
          <Col md={6}>
            <p className="m-0">
              ALMOOSA HOSPITAL @ {new Date().getFullYear()} All Rights Reserved
            </p>
          </Col>
          <Col md={6}>
            <div className="d-lg-flex justify-content-md-end">
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
              <Link href="#!">
                <a>Link one</a>
              </Link>
              <Link href="#!">
                <a>Link one</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
