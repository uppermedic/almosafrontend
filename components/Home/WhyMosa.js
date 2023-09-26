import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import { strippedContent } from 'src/utils/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WhyMosa = ({ data}) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  return (
    <div className="whyalmoosaWrapper">
      <Container>
        <Row className="top-section m-0">
          <Col xs={12} lg={6} className="p-0">
            <h2>
              {locale ? strippedContent(data[locale]?.title) : 'Loading'}
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
                  __html: locale
                    ? strippedContent(data[locale]?.content)
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
export default WhyMosa;
