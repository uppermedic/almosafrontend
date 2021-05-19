import { Link } from "root/i18n";
import React from "react";
import { Container, Row, Col } from "reactstrap";

const index = () => {
  return (
    <section className="event-info">
      <Container>
        <Row className="pb-5">
          <Col md={6} className="mx-0 px-0">
            <img src="/images/training/left pic.png" alt="event-info" />
          </Col>
          <Col md={6} className="info">
            <div className="date-location">
              <h2>Event Title Here </h2>
              <ul>
                <li>
                  <i class="fas fa-calendar-alt"></i>23 November - 24 November,
                  2020
                </li>
                <li>
                  <i class="fas fa-envelope"></i>Info@almoosahospital.com
                </li>
                <li>
                  <i class="fas fa-phone-square-alt"></i>009966xxxxxxxxx
                </li>
                <li>
                  <i class="fas fa-map-marker-alt"></i>Write Location Here
                </li>
              </ul>
            </div>
            <Row className="cost">
              <Col md={{ size: 4 }} className="m-auto">
                <p>
                  <i class="fas fa-dollar-sign"></i>Cost
                </p>
              </Col>
              <Col md={{ size: 4, offset: 2 }}>
                <p>
                  <i class="fas fa-microphone"></i> Speaker Name
                </p>
              </Col>
            </Row>
            <Link href="/training-education/event-register">
              <button>Register</button>
            </Link>
          </Col>
        </Row>
        <Row className="about-event pb-5">
          <Col xs={12}>
            <h2>About THE EVENT</h2>
          </Col>
          <Col xs={12}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, <br />
              sometimes by accident, sometimes on purpose (injected humour and
              the like). It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </Col>
        </Row>
        <Row className="topics">
          <Col xs={12}>
            <h2>Topics Time line: </h2>
          </Col>
          <Col xs={12}>
            <h4 className="pt-3">Day 1:</h4>
            <div>
              <p>
                <span>2 pm</span> : <span>4 pm</span>
              </p>
              <p> Lecture :</p>
            </div>
            <h4>Day 2:</h4>
            <div>
              <p>2 pm : 4 pm</p>
              <p> Lecture :</p>
            </div>
            <h4>Day 3:</h4>
            <div>
              <p>2 pm : 4 pm</p>
              <p> Lecture :</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
