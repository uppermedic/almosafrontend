import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Card';
import { removeSpChar } from 'src/utils/helpers';
import { useRouter } from 'next/router';

export default function index({ data }) {
  const router = useRouter();
  const { locale } = router;

  const editedData = data.map(item => {
    if (item.icon && item.bg) {
      return item;
    } else {
      return {
        ...item,
        path:
          `services/medical-programs/${
            locale &&
            removeSpChar(String(item[locale].title)).split(' ').join('-')
          }/?id=${item.id}` || '#'
      };
    }
  });

  return (
    <section className="medical-programs-card">
      <Container>
        <Row>
          <Col>
            <h2>{(locale == 'en' && 'Medical Programs') || 'برامج طبية'}</h2>
          </Col>
        </Row>
        <Row>
          {editedData.map(item => (
            <Col
              xs={12}
              md={6}
              xl={4}
              key={item.id}
              className="px-lg-5 cols mt-5"
            >
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
