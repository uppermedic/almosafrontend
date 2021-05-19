import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Carouseltem from './Carouseltem.jsx';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const data = [
  {
    id: 7,
    patient_name: 'Patient Name',
    dr_name: 'Dr > Name - Department',
    qoute: `
    like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , 
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,`
  },
  {
    id: 8,
    patient_name: 'Patient Name',
    dr_name: 'Dr > Name - Department',
    qoute: `
    like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , 
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,`
  },
  {
    id: 9,
    patient_name: 'Patient Name',
    dr_name: 'Dr > Name - Department',
    qoute: `
    like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , 
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,
            like this hospital , like this hospital , like this hospital , like this hospital , like this hospital , like this hospital ,`
  }
];
export default function Testimonial() {
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
              <h3>Testimonial</h3>
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
              loop
              margin={10}
              responsiveClass={true}
              center={true}
              navText={[
                '<i class="fas fa-long-arrow-alt-left"></i>',
                '<i class="fas fa-long-arrow-alt-right"></i>'
              ]}
              responsive={{
                0: {
                  items: 1,
                  nav: true
                }
              }}
            >
              {data.map(item => (
                <Carouseltem item={item} key={String(item.id)} />
              ))}
            </OwlCarousel>
            {/* <div className="owl-carousel owl-theme">
              {data.map(item => (
                <Carouseltem item={item} key={String(item.id)} />
              ))}
            </div> */}
            {/* <div className="owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  {data.map(item => (
                    <Carouseltem
                      item={item}
                      key={Math.random(242845515) * item.id}
                    />
                  ))}
                </div>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
