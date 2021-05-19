import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'root/i18n';
import DoctorCard from './doctor-card';
const data = [
  {
    id: 1,
    name: 'Sheikh Abdulaziz Almoosa',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 2,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 3,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 4,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 5,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 6,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 7,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 8,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 9,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 10,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 11,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  },
  {
    id: 12,
    name: 'Mr.malek',
    position: 'Chairman Of Almoosa Medical Group',
    img: '/images/why_choose_us/our-doctors/dr-malek.png'
  }
];

const index = () => {
  return (
    <section className="our-doctors">
      <Container>
        <Row className="pt-3">
          <Col>
            <h2>Meet Our Team</h2>
          </Col>
        </Row>
        <Row className="doctor-details m-auto">
          <Col lg={4} className="doctor-img">
            <img
              src="/images/why_choose_us/our-doctors/dr-malek.png"
              alt="doctor-img"
            />
            <div className="doctor-social">
              <Link href="#">
                <i class="fab fa-linkedin fa-3x"></i>
              </Link>
              <Link href="#">
                <i class="fab fa-twitter-square fa-3x"></i>
              </Link>
              <Link href="#">
                <i class="fas fa-link fa-3x"></i>
              </Link>
            </div>
          </Col>
          <Col lg={{ size: 6, offset: 1 }} className="pl-sm-5 pr-4 pt-4">
            <h3 className="doctor-name">Mr. Malek Almoosa</h3>
            <p className="py-2">CEO of Almoosa Specialist Hospital</p>
            <h3 className="doctor-qualifications">Qualifications </h3>
            <ul>
              <li> DBA from University of Warwick – Warwick Business School</li>
              <li>
                Masters in Healthcare Management from the Royal College of
                Surgeons in Ireland
              </li>
              <li>
                Diploma in Healthcare Management from University of Surrey
              </li>
              <li> Bachelor of Science (BSc) in Healthcare Administration</li>
            </ul>
            <h3 className="doctor-position">Current Positions:</h3>
            <ul>
              <li>CEO of Almoosa Specialist Hospital</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="pt-5 ">
            <h2>BOARD OF GOVERNORS</h2>
          </Col>
        </Row>
        <Row className="doctors-cards">
          {data.map(doctor => (
            <Col xl={3} lg={4} md={6} className="px-3">
              <DoctorCard key={doctor.id} doctor={doctor} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default index;
