import React from 'react';
import { Col, Row } from 'reactstrap';
import Hero from 'src/components/layout/Hero';

const Content = () => {
  return (
    <div className="content">
      <Hero bg="https://image.shutterstock.com/image-photo/hannover-germany-22052018-bright-sterile-600w-1676838118.jpg" />
      <div className="container">
        <div className="page-desc">
          <h2 className="title"> Operation Rooms </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis
            aliquid cumque saepe iste, sequi ipsam veniam animi quibusdam eius
            ex, quisquam est repellat fugiat, repudiandae architecto laboriosam
            ipsum unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, odit?
          </p>
        </div>
        <div className="infos">
          <Row xs="1" lg="2">
            <Col>
              <div
                className="the-img"
                style={{
                  backgroundImage:
                    'url("/images/services/support/column-1.png")'
                }}
              ></div>
            </Col>
            <Col>
              <div className="info">
                <p>
                  We have five operating theater that can serve all the
                  specialties including cardiac cases. We aim to create a better
                  environment and improve the flow of both the staff and
                  patients. Also, the digital operating rooms are designed to
                  raise the efficiency in a significant way. We are now able to
                  perform more complicated surgeries such as open heart
                  surgeries for both adult and pediatric and we will be able to
                  make kidney transplant shortly.
                </p>
                <p>
                  That room is equipped with very high tech monitors and touch
                  screen to display the data. This technology can give more
                  accurate information to the surgeons. The surgeons can share
                  the knowledge in full HD quality with others in other
                  institution or external conference for educational or
                  treatment purposes . This technology will increase the speed
                  of taking the decision which can reflect positively on the
                  patient health.
                </p>
              </div>
            </Col>
            <Col>
              <div className="info">
                <p>
                  We have five operating theater that can serve all the
                  specialties including cardiac cases. We aim to create a better
                  environment and improve the flow of both the staff and
                  patients. Also, the digital operating rooms are designed to
                  raise the efficiency in a significant way. We are now able to
                  perform more complicated surgeries such as open heart
                  surgeries for both adult and pediatric and we will be able to
                  make kidney transplant shortly.
                </p>
                <p>
                  That room is equipped with very high tech monitors and touch
                  screen to display the data. This technology can give more
                  accurate information to the surgeons. The surgeons can share
                  the knowledge in full HD quality with others in other
                  institution or external conference for educational or
                  treatment purposes . This technology will increase the speed
                  of taking the decision which can reflect positively on the
                  patient health.
                </p>
              </div>
            </Col>
            <Col>
              <div
                className="the-img"
                style={{
                  backgroundImage:
                    'url("/images/services/support/column-2.png")'
                }}
              ></div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Content;
