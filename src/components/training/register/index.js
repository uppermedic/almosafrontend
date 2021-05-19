import React from "react";
import { Container, Row, Col } from "reactstrap";
import InputCard from "./InputCard";
const Register = () => {
  const data = [
    {
      id: 1,
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      id: 3,
      name: "userpassword",
      label: "Password",
      type: "password",
      required: true,
    },
    {
      id: 4,
      name: "userEmail",
      label: "Your Email",
      type: "email",
      required: true,
    },
    {
      id: 5,
      name: "spcciality",
      label: "Spcciality",
      type: "text",
      required: true,
    },
    { id: 6, name: "scfhs", label: "SCFHS no", type: "text", required: false },
    {
      id: 7,
      name: "mobileNo",
      label: "Mobile Nu",
      type: "tel",
      required: true,
    },
    {
      id: 8,
      name: "position",
      label: "Position",
      type: "text",
      required: true,
    },
    { id: 9, name: "city", label: "City", type: "text", required: true },
    {
      id: 10,
      name: "hospital",
      label: "Hospital",
      type: "text",
      required: false,
    },
  ];

  return (
    <section className="event-register">
      <Container>
        <Row>
          <Col>
            <h2>Registration Form</h2>
          </Col>
        </Row>
        <form>
          <Row className="inputs-container mx-0">
            {data.map(item => (
              <Col md={{ size: 6 }}>
                <InputCard key={item.title} item={item} />
              </Col>
            ))}
            <Col sm={12}>
              <input type="submit" value="Register" id="submit" />
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
};

export default Register;
