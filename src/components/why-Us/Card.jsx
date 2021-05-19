import React from "react";
import { Link } from "root/i18n";
import { Container, Row, Col } from "reactstrap";

export default function Why_Us_Card({ item }) {
  return (
    <Link href={item.url}>
      <Row className="card-item">
        <Col className="icon m-0" md={12}>
          <div>
            <img src={item.icon} alt={item.title} />
          </div>
        </Col>
        <Col className="title" md={12}>
          <h3>{item.title}</h3>
        </Col>
      </Row>
    </Link>
  );
}
