import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Carouseltem from './Carouseltem';
import { useRouter } from 'next/router';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export default function Testimonial({ data }) {
  const router = useRouter();
  const { locale } = router;

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
              <h3>{locale == 'en' ? 'Testimonials' : 'يقولون عنا'}</h3>
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
                  item={locale ? item[locale] : 'loading'}
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
