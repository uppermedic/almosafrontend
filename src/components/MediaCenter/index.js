import React from "react";
import { Container, Row, Col } from "reactstrap";
import Service from "./Service";

const data = [
  {
    id: 1,
    title: "Hakeem Magazine",
    bg: "/images/media-center/magazine.png",
    ribbon_class: "brown",
    url: "/media-center/hakeem-magazine",
  },
  {
    id: 2,
    title: "Video Gallery",
    bg: "/images/media-center/video-gallery.png",
    ribbon_class: "blue",
    url: "/media-center/video-gallery",
  },
  {
    id: 3,
    title: "Photo Gallery",
    bg: "/images/media-center/photo-gallery.png",
    ribbon_class: "green",
    url: "/media-center/photo-gallery",
  },
  {
    id: 4,
    title: "Podcast",
    bg: "/images/media-center/podcast.png",
    ribbon_class: "blue",
    url: "/media-center/podcast",
  },
];
export default function index() {
  return (
    <section className="centers">
      <Container>
        <Row>
          <Col>
            <h2>Media Center</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          {data.map(item => (
            <Col md={5} key={item.id}>
              <Service item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
