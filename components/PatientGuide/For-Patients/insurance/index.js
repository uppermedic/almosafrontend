import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Hero from 'src/components/layout/Hero';
import BrandBox from './re-brandBox';
import { i18n, withTranslation } from 'root/i18n';

import data from './data';
const Content = ({ t, itemContent }) => {
  let { language } = i18n;

  return (
    <div className="content">
      <div className="title">
        <h2>{language && itemContent[language]?.title}</h2>
      </div>
      <div className="brands">
        <Container>
          <Row xs="1" sm="2" md="3" lg="4">
            {itemContent.page_items.map((item, index) => (
              <Col key={index}>
                <BrandBox
                  name={language && item[language]?.title}
                  image={item?.image[0]}
                  link={item?.url}
                />
              </Col>
            ))}
            {/* {language === 'ar' && (
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
            )} */}
            {/* {language === 'en' && (
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
            )} */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default withTranslation('patient_guide')(Content);
