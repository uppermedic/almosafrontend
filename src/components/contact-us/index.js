import React from "react";
import { Container, Col, Row } from "reactstrap";
const index = () => {
  return (
    <section className="contact">
      <Container>
        <Row>
          <Col>
            <h2>Contact US</h2>
          </Col>
        </Row>
        <Row className="top-section px-3 py-5">
          <Col lg={6}>
            <p>
              Thank you for your interest in Almoosa Specialist Hospital. If you
              have questions, comments or concerns, please contact us through
              the following telephone numbers or emails, or by completing the
              contact form provided below.
            </p>
          </Col>
          <Col lg={6} className="pr-0">
            <img
              src="/images/contact-us/contact-us-map.png"
              alt="location map"
            />
          </Col>
        </Row>
        <Row className="contact-form m-0">
          <Col md={6} className="form">
            <h3>Contact Form</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea
                name="message"
                id="contact-message"
                placeholder="Message"
              ></textarea>
              <button>SEND</button>
            </form>
          </Col>
          <Col md={5} className="info">
            <h4 className="underline">Hospital Address</h4>
            <p>
              Almoosa Specialist Hospital is located at the following address:
            </p>
            <h4>Location:</h4>
            <p className="underline">Dharan St | Alfaisal District | Al-Ahsa</p>
            <h4>P.O. Box:</h4>
            <p>5098 Eastern Province | Saudi Arabia</p>
            <h4 className="underline">Telephone:</h4>
            <p>+966-13-5369666</p>
            <h4>Fax:</h4>
            <p className="underline">+966-13-5369600</p>
            <h4>Email:</h4>
            <p>info@almoosahospital.com.sa</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
