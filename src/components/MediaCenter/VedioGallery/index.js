import React from "react";
// import Taps from "./Taps";
import { Container, Row, Col } from "reactstrap";
import SelectBox from "src/components/layout/SelectBox.jsx";
const videos = [
  { id: 1, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
  { id: 2, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
  { id: 3, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
  { id: 4, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
  { id: 5, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
  { id: 6, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
  { id: 7, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
  { id: 8, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
  { id: 9, url: "none", title: "التوهم المرضي و تأثيره على الصحة النفسية" },
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
        <Row className="filters pt-5">
          <Col xl={4} md={6} sm={12} className="d-flex justify-content-around">
            <span>Show</span>
            <SelectBox
              options={[
                ["3", "3"],
                ["6", "6"],
                ["9", "9"],
                ["12", "12"],
                ["15", "15"],
                ["ALL", "all"],
              ]}
            />
          </Col>
          <Col xl={4} md={6} sm={12} className="d-flex justify-content-around">
            <span>Date</span>
            <SelectBox
              options={[
                ["2020", "2020"],
                [("2017 - 2019", "2017-2019")],
                ["2014 - 2016", "2014-2016"],
                ["2011 - 2013", "2011-2013"],
                ["2008 - 2010", "2008-2010"],
                ["ALL", "all"],
              ]}
            />
          </Col>
          <Col
            xl={4}
            md={6}
            sm={12}
            className="d-flex justify-content-around m-md-auto pt-md-3"
          >
            <span>Playlist</span>
            <SelectBox
              options={[
                ["Heart Center", "HeartCenter"],
                ["Cancer", "Cancer"],
                ["About Almoosah", "AboutAlmoosah"],
                ["Mix FM", "MixFM"],
                ["Favorite", "Favorite"],
                ["Almoosah Hospital Doctors", "AlmoosahHospitalDoctors"],
              ]}
            />
          </Col>
        </Row>
        <Row className="position-relative">
          <div className="overlay" />
          {videos.map((video, index) => (
            <Col key={index} className="py-5 text-center">
              <video
                width="465"
                height="380"
                style={{ backgroundColor: "#969696" }}
              >
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <h3 style={{ width: "465px" }}>{video.title}</h3>
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
