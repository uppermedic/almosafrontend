import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Card';
import { i18n } from 'root/i18n';
import { removeSpChar } from 'src/utils/helpers';

export default function index({ data }) {
  const { language } = i18n;

  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  const editedData = data.map(item => {
    if (item.icon && item.bg) {
      return item;
    } else {
      return {
        ...item,
        path:
          `services/medical-programs/${
            language &&
            removeSpChar(String(item[language].title)).split(' ').join('-')
          }/?id=${item.id}` || '#'
      };
    }
  });

  return (
    <section className="medical-programs-card">
      <Container>
        <Row>
          <Col>
            <h2>{(language == 'en' && 'Medical Programs') || 'برامج طبية'}</h2>
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
