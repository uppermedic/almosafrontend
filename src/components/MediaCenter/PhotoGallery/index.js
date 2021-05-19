import React from "react";
import Taps from "./Taps";
import { Container, Row, Col } from "reactstrap";
const dataTap = [
  "All",
  "North tower",
  "Eye Center",
  "Intensive care",
  "Dental clinics",
  "Wards",
  "Delivery rooms ",
  "Rooms",
  "Women's clinics",
  "Pediatrics clinics",
  "Digital operating room",
];
const photos = [
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
  "/images/media-center/photo Gallery/test.png",
];

const index = () => {
  return (
    <sectio className="gallery">
      <Container className="pb-5">
        <Row>
          <Col className="pt-5">
            <h2>Photo Gallery</h2>
          </Col>
        </Row>
        <Row className="categories">
          <Col>
            <ul className="list-unstyled">
              {dataTap.map((tap, index) => (
                <Taps tap={tap} key={index} />
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="position-relative">
          <div className="overlay" />
          {photos.map((photo, index) => (
            <Col key={index} className="py-5 text-center">
              <img src={photo} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <button>Show All</button>
          </Col>
        </Row>
      </Container>
    </sectio>
  );
};

export default index;
