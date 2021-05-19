import React from "react";
import { Container, Button } from "reactstrap";
export default function HeroContent() {
  return (
    <Container style={{ height: "100%" }}>
      <div className="home-hero-content">
        <div>
          <h2>
            ALMOOSA Hospital
            <span>Book Your Appointment Now !</span>
          </h2>
          <p>
            You can book an appointment now via our website or You can book an
            appointment now via ourwebsite or download The App
          </p>
          <div className="stores-wrapper">
            <a href="#!">
              <img src="images/home/app-store-btn.svg" alt="" />
            </a>
            <a href="#!">
              <img src="images/home/google-play-btn.svg" alt="" />
            </a>
          </div>
          <div className="book-now">
            <Button color="default">BOOK NOW</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
