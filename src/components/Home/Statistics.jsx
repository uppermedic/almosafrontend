import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
const Statistics = ({ hospital, emergency_phone }) => {
  const [statistics, setStatics] = useState({
    info: [
      { name: 'single bed', value: 250 },
      { name: 'doctor', value: 250 },
      { name: 'surgey', value: 250 },
      { name: 'patient', value: 250 }
    ],
    emergyncyNum: '00966135369999'
  });
  return (
    <div className="statistics">
      <Container>
        <Row className="statcisInfo m-0">
          {statistics.info.map(statistic => (
            <Col key={statistic.name} xs={12} sm={6} lg={3}>
              <div className="infoContainer">
                <p>{statistic.value}</p>
                <p>{statistic.name}</p>
              </div>
            </Col>
          ))}
          {/* <Col xs={12} sm={6} lg={3}>
            <div className="infoContainer">
              <p>{hospital.single_bed}</p>
              <p>single bed</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="infoContainer">
              <p>{hospital.doctor}</p>
              <p>doctor</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="infoContainer">
              <p>{hospital.surgery}</p>
              <p>surgey</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="infoContainer">
              <p>{hospital.patient}</p>
              <p>patient</p>
            </div>
          </Col> */}
        </Row>

        <Row className="emergyncyContainer d-flex justify-content-lg-between align-content-center m-0">
          <Col xs={12} lg={6}>
            <div className="emergyncy-call-us">
              <h3>Emergency ?</h3>
              <p>Call us now</p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="emergyncy-phone">
              <p>{emergency_phone || '00966135369999'}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Statistics;
