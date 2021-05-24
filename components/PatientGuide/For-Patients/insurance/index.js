import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Hero from 'src/components/layout/Hero';
import BrandBox from './re-brandBox';
import { i18n, withTranslation } from 'root/i18n';

import data from './data';
const Content = ({ t }) => {
  let { language } = i18n;

  return (
    <div className="content">
      <div className="title">
        <h2>{t('patient_guide:Insurance')}</h2>
      </div>
      <div className="brands">
        <Container>
          <Row xs="1" sm="2" md="3" lg="4">
            {language === 'ar' && (
              <>
                {data.map((item, index) => (
                  <Col key={index}>
                    <BrandBox
                      name={item['ar']?.name}
                      image={item.logo}
                      link={item.link}
                    />
                  </Col>
                ))}
              </>
            )}
            {language === 'en' && (
              <>
                {data.map((item, index) => (
                  <Col key={index}>
                    <BrandBox
                      name={item['en']?.name}
                      image={item.logo}
                      link={item.link}
                    />
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default withTranslation('patient_guide')(Content);
