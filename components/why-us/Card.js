import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

export default function Why_Us_Card({ item, t }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <Link href={`/${locale}/${item.url}`}>
      <a>
        <Row className="card-item shadow">
          <Col className="icon m-0" md={12}>
            <div>
              <img src={item.icon} alt={item.title} />
            </div>
          </Col>
          <Col className="title" md={12}>
            <h3>{t(item.title)}</h3>
          </Col>
        </Row>
      </a>
    </Link>
  );
}
