import React from 'react';
import { Row, Col } from 'reactstrap';
import MedicalCenter from './MedicalCenter';
import { useRouter } from 'next/router';

export default function index({ data }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="centers">
      <div className="container">
        <Row>
          <Col>
            <h2>{(locale == 'en' && 'Medical Centers') || 'مراكز طبية'}</h2>
          </Col>
        </Row>
        <Row xs="1" sm="1" md="2" lg="3">
          {data.map(item => (
            <Col key={item?.id} className="px-lg-5 cols">
              <MedicalCenter item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
