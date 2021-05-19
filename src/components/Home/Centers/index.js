import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import dynamic from 'next/dynamic';
import CenterItem from './CenterItem';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

//
const data = [
  {
    id: 1,
    name: 'Dental Center',
    description: `
        Our “Bright Dental Center” at Almoosa 
        Specialist Hospital covers all aspects of 
        your dental needs. The Center includes
        an integrated laboratory equipped
        `,
    cover: 'images/home/centers/dental-center.jpg'
  },
  {
    id: 2,
    name: 'Dental Center',
    description: `
        Our “Bright Dental Center” at Almoosa 
        Specialist Hospital covers all aspects of 
        your dental needs. The Center includes
        an integrated laboratory equipped
        `,
    cover: 'images/home/centers/dental-center.jpg'
  },
  {
    id: 3,
    name: 'Dental Center',
    description: `
        Our “Bright Dental Center” at Almoosa 
        Specialist Hospital covers all aspects of 
        your dental needs. The Center includes
        an integrated laboratory equipped
        `,
    cover: 'images/home/centers/dental-center.jpg'
  },
  {
    id: 4,
    name: 'Dental Center',
    description: `
        Our “Bright Dental Center” at Almoosa 
        Specialist Hospital covers all aspects of 
        your dental needs. The Center includes
        an integrated laboratory equipped
        `,
    cover: 'images/home/centers/dental-center.jpg'
  },
  {
    id: 5,
    name: 'Dental Center',
    description: `
        Our “Bright Dental Center” at Almoosa 
        Specialist Hospital covers all aspects of 
        your dental needs. The Center includes
        an integrated laboratory equipped
        `,
    cover: 'images/home/centers/dental-center.jpg'
  },
  {
    id: 6,
    name: 'Dental Center',
    description: `
        Our “Bright Dental Center” at Almoosa 
        Specialist Hospital covers all aspects of 
        your dental needs. The Center includes
        an integrated laboratory equipped
        `,
    cover: 'images/home/centers/dental-center.jpg'
  }
];
export default function Centers() {
  return (
    <section className="home-centers">
      <Container>
        <Row>
          <Col>
            <h3 className="section-title">Centers</h3>
          </Col>
        </Row>
        <Row style={{ marginTop: 44 }}>
          <Col>
            {/* <div className="owl-carousel owl-theme">
              {data.map(item => (
                <CenterItem center={item} key={String(item.id)} />
              ))}
            </div> */}
            <OwlCarousel
              className="owl-carousel owl-theme owl-loaded"
              margin={100}
              responsiveClass={true}
              dots={false}
              navText={[
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
              ]}
              responsive={{
                0: {
                  items: 1,
                  nav: true,
                  center: true,
                  loop: true
                },
                840: {
                  items: 2,
                  nav: false,
                  center: true
                },
                1000: {
                  items: 3,
                  nav: true,
                  loop: false
                }
              }}
            >
              {data.map(item => (
                <CenterItem center={item} key={String(item.id)} />
              ))}
            </OwlCarousel>
            {/* <div className="owl-carousel owl-theme owl-loaded">
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                    {data.map(item=>
                                        <CenterItem center={item} key={Math.random(242845515)*item.id}/>
                                    )}
                                </div>
                            </div>
                        </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
