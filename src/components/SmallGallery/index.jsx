import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SmallGallery = ({ imgs, bgColor }) => {
  return (
    <div className="small-gallary" style={{ backgroundColor: bgColor }}>
      <Container>
        <Row xs="1" md="2">
          {imgs &&
            imgs.map((img, index) => {
              return (
                <Col key={index}>
                  <div className="img-container">
                    <img src={img} alt="gallery_img" />
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default SmallGallery;
