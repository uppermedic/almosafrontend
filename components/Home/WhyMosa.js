import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, i18n, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers';
const WhyMosa = ({ data, t }) => {
  return (
    <div className="whyalmoosaWrapper">
      <Container>
        <Row className="top-section m-0">
          <Col xs={12} lg={6} className="p-0">
            <h2>
              {i18n.language
                ? strippedContent(data[i18n.language].title)
                : 'Loading'}
            </h2>
          </Col>
          <Col className="link_div p-0" xs={12} lg={6}>
            <Link href="/why-choose-us">
              <span>{t('know_about_us')}</span>
            </Link>
          </Col>
        </Row>
        <Row className="bottom-section">
          <Col xs={12} lg={6} data-aos="fade-up" data-aos-duration="1000">
            <img src={data.image} alt="mosabuilding" />
          </Col>
          <Col
            xs={12}
            lg={6}
            className="txt"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Markdown>
              {i18n.language
                ? strippedContent(data[i18n.language].content)
                : 'Loading'}
            </Markdown>
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
