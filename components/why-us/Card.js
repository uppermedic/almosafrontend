import React, { useEffect, useState } from 'react';
import { Link, i18n } from 'root/i18n';
import { Row, Col } from 'reactstrap';

export default function Why_Us_Card({ item, t }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);
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
