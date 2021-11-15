import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, i18n, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';

const WhyMosa = ({ data, t }) => {
  const { language } = i18n;

  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="whyalmoosaWrapper">
      <Container>
        <Row className="top-section m-0">
          <Col xs={12} lg={6} className="p-0">
            <h2>
              {language ? strippedContent(data[language]?.title) : 'Loading'}
            </h2>
          </Col>
          <Col className="link_div p-0" xs={12} lg={6}>
            <Link href={`/${locale}/why-choose-us`}>
              <a>
                <span>{t('know_about_us')}</span>
              </a>
            </Link>
          </Col>
        </Row>
        <Row className="bottom-section">
          <Col xs={12} md={5} data-aos="fade-up" data-aos-duration="1000">
            <img src={data?.image} alt="mosabuilding" />
          </Col>
          <Col
            xs={12}
            md={7}
            className="txt"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: language
                    ? strippedContent(data[language]?.content)
                    : 'Loading'
                }}
              />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
WhyMosa.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(WhyMosa);
