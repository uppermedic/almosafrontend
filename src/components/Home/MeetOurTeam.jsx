import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';
export default function MeetOurTeam() {
  return (
    <section className="meet-our-team">
      <img
        src="images/home/meet-team-zigzag-img.png"
        alt=""
        className="top-zigzag-img"
      />
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <h2>Welcome to ALMOOSA Hospital</h2>
            <p>
              Established in 1996 as the first private hospital in Al-Ahsa ,
              Saudi Arabia, Almoosa Specialist Hospital is a leading integrated
              health services provider, focusing on patient-centered care, with
              highly qualified medical, technical and administrative staff using
              the latest equipment, thus keeping pace with the needs of visitors
              from all regions of the Kingdom and neighbouring Gulf.
            </p>
            {/* <Button className="meet-team-btn w-100">
                            Meet Our Team
                        </Button> */}
            <InputGroup className="search_bar d-flex align-items-center">
              <Input
                className="search_field"
                placeholder="Find Your Doctor......"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col xs={12} lg={6} className="section-img">
            <img src="images/home/meet-team.png" alt="" />
            {/* <Image
              src="/images/home/meet-team.png"
              alt="Picture of the author"
              // width={500}
              // height={400}
              layout="fill"
            /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
