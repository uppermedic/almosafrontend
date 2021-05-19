import React from "react";
import { Row, Col } from "reactstrap";

const Heading_Section = ({ title, subHeading = false }) => {
  return (
    <Row className="heading-card">
      <Col>{subHeading ? <h3>{title}</h3> : <h2>{title}</h2>}</Col>
    </Row>
  );
};

export default Heading_Section;
