import React from "react";
import { Container, Row, Col } from "reactstrap";
import { i18n, Link, withTranslation } from "root/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div
      className="footer-top"
      style={{ backgroundImage: "url(/images/home/footer-bg.png)" }}
    >
      <Container>
        <Row>
          <Col lg={{ size: 4 }}>
            <div className="intro">
              <h2>Welcome to ALMOOSA Hospital</h2>
              <p>
                Established in 1996 as the first private hospital in Al-Ahsa,
                Saudi Arabia, Almoosa Specialist Hospital is a leading
                integrated health services provider, focusing on
                patient-centered care, with highly qualified medical,
                technical and administrative
              </p>
              <div className="social d-block d-lg-flex">
                <Link href="#!">
                  <a className="fb">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </Link>
                <Link href="#!">
                  <a className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                </Link>
                <Link href="#!">
                  <a className="insta">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </a>
                </Link>
                <Link href="#!">
                  <a className="youtube">
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                  </a>
                </Link>
                <Link href="#!">
                  <a className="in">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={2} className="offset-lg-1">
            <div className="links">
              <h3>Useful Links</h3>
              <div className="d-flex flex-column">
                <Link href="#!">
                  <a>Patient Guide & Health care </a>
                </Link>
                <Link href="#!">
                  <a>About us</a>
                </Link>
                <Link href="/contact-us">
                  <a>Contact us</a>
                </Link>
                <Link href="#!">
                  <a>Training & Education</a>
                </Link>
                <Link href="#!">
                  <a>Community services</a>
                </Link>
                <Link href="blog">
                  <a className="btn-blog">Blog</a>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="links">
              <h3>contact us</h3>
              <div className="d-flex flex-column">
                <Link href="#!">
                  <a>
                    <i className="fas fa-map-marker-alt mr-1"></i> الظهران |
                    حي الفيصل الأحساء ص. المربع 5098 المنطقة الشرقية | المملكة
                    العربية السعودية
                  </a>
                </Link>
                <a href="tel:00966135369999">
                  <i className="fas fa-phone-alt mr-1"></i> 00966135369999
                </a>
                <a href="mailto:info@almoosahospital.com.sa">
                  <i className="fas fa-envelope mr-1"></i>{" "}
                  info@almoosahospital.com.sa
                </a>
              </div>
            </div>
          </Col>
          <Col lg={2} className="d-none d-lg-block">
            <div>
              <img src="/images/home/twitterpage.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
