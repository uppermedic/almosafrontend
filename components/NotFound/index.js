import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

function Index() {
  const router = useRouter();
  const { locale } = router;

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
              <Link href={'/' + locale}>
                <a>Back To Home</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Index;
