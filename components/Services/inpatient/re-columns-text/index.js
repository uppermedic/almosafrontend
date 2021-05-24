import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const ColumnsOfText = ({ data }) => {
  return (
    <div className="colmuns-of-text">
      <Container>
        <Row xs="1" lg="2">
          {data.map((column, index) => {
            return (
              <Col key={index}>
                <div className="text">{column.text}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ColumnsOfText;
