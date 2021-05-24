import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import dynamic from 'next/dynamic';
import CenterItem from './CenterItem';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
import { i18n, Link, withTranslation } from 'root/i18n';

function Centers({ data, t }) {
  const lang = i18n.language;
  return (
    <section className="home-centers">
      <Container>
        <Row>
          <Col>
            <h3 className="section-title-center">
              {lang == 'en' ? 'Centers' : 'المراكز'}
            </h3>
          </Col>
        </Row>
        <Row style={{ marginTop: 44 }}>
          <Col>
            <OwlCarousel
              className="owl-carousel owl-theme owl-loaded"
              margin={50}
              loop={true}
              autoplay={true}
              autoplayTimeout={5000}
              autoplayHoverPause={true}
              responsiveClass={true}
              dots={false}
              responsive={{
                0: {
                  items: 1,
                  nav: true,
                  center: true,
                  loop: true,
                  margin: 10
                },
                550: {
                  items: 2,
                  nav: false,
                  margin: 10
                },
                950: {
                  items: 2,
                  nav: false,
                  center: true,
                  margin: 10
                },
                1000: {
                  items: 3,
                  nav: false,
                  center: true,
                  margin: 10
                },
                1200: {
                  items: 4,
                  nav: true,
                  loop: false,
                  margin: 10
                }
              }}
            >
              {data.map((item, index) => (
                <CenterItem center={item} key={index} />
              ))}
            </OwlCarousel>
            <Link href="/services/medical-centers">
              <a className="show_more_center">{t('show_more')}</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default withTranslation('common')(Centers);
