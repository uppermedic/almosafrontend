import { Link } from 'root/i18n';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const data = [
  {
    id: 1,
    title: 'Coronary Care Unit (CCU)',
    path: '/services/inpatient-units/coronary-care',
    content:
      'The coronary care unit (CCU) at Almoosa Specialist Hospital is equipped with the most advanced equipment to provide the best care for patients with critical cardiac conditions ……….'
  },
  {
    id: 2,
    title: 'Intensive Care Unit (ICU)',
    path: '/services/inpatient-units/intensive-care',
    content:
      'In the Intensive Care Unit, patients get continuous monitoring and treatment, benefiting from a higher level of safety and prevention of any undesirable situations that may arise during a patient stay.'
  },
  {
    id: 3,
    title: 'Nursery & Neonatal Intensive Care Unit (NICU)',
    path: '/services/inpatient-units/coronary-care',
    content:
      'Treatment of new born babies is challenging. Sometimes, a baby has difficulty making the transition to the new world. Being born prematurely, having a difficult delivery or birth defects can make.'
  }
];

const Inpatient = () => {
  return (
    <section className="inpatient-units-content">
      <Container>
        <Row xs="1" lg="3">
          {data.map((column, index) => {
            return (
              <Col key={index}>
                <div className="card">
                  <div className="title">
                    <Link href={column.path}>
                      <a>
                        <span> {column.title} </span>
                      </a>
                    </Link>
                  </div>
                  <hr />
                  <div className="desc">{column.content}</div>
                  <Link href={column.path}>
                    <span className="sapn-link">read more</span>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Inpatient;
