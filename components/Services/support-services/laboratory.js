import React, { useState } from 'react';
import Hero from 'src/components/layout/Hero';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import classnames from 'classnames';

const Content = () => {
  return (
    <div className="content">
      <Hero bg="https://image.shutterstock.com/image-photo/modern-laboratory-two-scientists-conduct-600w-685086652.jpg" />
      <div className="page-desc">
        <h2 className="title"> Labpratory Department </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis
          aliquid cumque saepe iste, sequi ipsam veniam animi quibusdam eius ex,
          quisquam est repellat fugiat, repudiandae architecto laboriosam ipsum
          unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          odit?
        </p>
      </div>
      <div className="info">
        <Container>
          <Row xs="1" md="2">
            <Col>
              <div
                className="the-img"
                style={{
                  backgroundImage:
                    'url("https://image.shutterstock.com/image-photo/medical-equipment-blood-test-600w-326298698.jpg")'
                }}
              ></div>
            </Col>
            <Col>
              <div className="text">
                <p>
                  The CAP Accreditation is known internationally as the gold and
                  ideal standard for laboratories.
                </p>
                <p>
                  The laboratory at Almoosa Specialist Hospital is covering 370
                  square meters with state-of-the-art equipment including
                  Molecular Pathology, Immunohistopathology and Apheresis.
                </p>
                <p>
                  We aim to be a reference laboratory for other hospitals,
                  clinics, and laboratoriesin the region. Our laboratory staff
                  is available 24 hours a day, seven days a week to run
                  laboratory tests, answer questions and to support our
                  physicians with prompt, accurate results.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="container">
          <div className="tabs">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

//
const Tabs = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem className="tab-one">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem className="tab-two">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Tab Two
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Container>
            <Row xs="1" md="2">
              <Col>
                <Example />
              </Col>
              <Col>
                <Example />
              </Col>
              <Col>
                <Example />
              </Col>
              <Col>
                <Example />
              </Col>
              <Col>
                <Example />
              </Col>
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="2">
          <Container>
            <Row xs="1" md="2">
              <Col>
                <Example />
              </Col>
              <Col>
                <Example />
              </Col>
            </Row>
          </Container>
        </TabPane>
      </TabContent>
    </div>
  );
};

const Example = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-component">
      <Button
        color="primary"
        className="toggle-button"
        onClick={toggle}
        style={{ marginBottom: '1rem' }}
      >
        <span>{title ? title : 'toggle'}</span>
        <span className="icon">
          <i className="fas fa-chevron-down"></i>
        </span>
      </Button>
      <Collapse isOpen={isOpen}>
        {content
          ? content
          : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nisi!'}
        {/* <Card>
          <CardBody>{content ? content : 'lorem ipsum'}</CardBody>
        </Card> */}
      </Collapse>
    </div>
  );
};
