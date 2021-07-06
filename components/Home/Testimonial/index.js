import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Carouseltem from './Carouseltem';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
import { i18n } from 'root/i18n';

export default function Testimonial({ data }) {
  const { language } = i18n;
  return (
    <section
      className="testimonial"
      style={{
        backgroundImage: 'url(images/home/testimonials-bg.jpg)'
      }}
    >
      <Container>
        <Row>
          <Col xs={12} className="top-head d-flex justify-content-center">
            <div>
              <h3>{language == 'en' ? 'Testimonials' : 'يقولون عنا'}</h3>
              <span className="qoutes">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <OwlCarousel
              className="owl-carousel owl-theme"
              loop={true}
              autoplay={true}
              autoplayTimeout={5000}
              autoplayHoverPause={true}
              rtl={true}
              margin={10}
              responsiveClass={true}
              center={true}
              responsive={{
                0: {
                  items: 1,
                  nav: true
                }
              }}
            >
              {data.map((item, index) => (
                <Carouseltem
                  item={language ? item[language] : 'loading'}
                  key={index}
                />
              ))}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
