import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MedicalCenter from './MedicalCenter';
import { i18n } from 'root/i18n';

export default function index({ data }) {
  const lang = i18n.language;

  return (
    <section className="centers">
      <div className="container">
        <Row>
          <Col>
            <h2>{(lang == 'en' && 'Medical Centers') || 'مراكز طبية'}</h2>
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
