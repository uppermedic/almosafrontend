import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, i18n, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';

const index = ({ data, t }) => {
  const { language } = i18n;

  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="virtual-tour">
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className="section-title">
              {t('virtual tour of almoosa specialist hospital')}
            </h3>
          </Col>
        </Row>
        <Row style={{ marginTop: 44 }}>
          <Col xs={12}>
            <iframe
              src="https://almoosahospital.org/virtual-tour/"
              width="100%"
              height="600"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
index.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(index);
