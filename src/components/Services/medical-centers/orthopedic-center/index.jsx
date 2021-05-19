import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Hero from 'src/components/layout/Hero';
import PostHeading from 'src/components/reusableComponents/PostHeading';
import CustomTabs from 'src/components/reusableComponents/CustomTabs';
import BlockWithTitle from 'src/components/Services/medical-programs/reusable-element';

const Content = ({ data }) => {
  const { tabsData, gridData } = data;

  return (
    <div className="orthopedic-center">
      <Hero>
        <div className="container">
          <PostHeading title="ORTHOPEDIC CENTER" color="#fff" />
          <Container>
            <Row xl="2" sm="1" xs="1">
              <Col>
                <div className="img-div">
                  <img
                    src="/images/services/medical-centers/orthopedic-center/ea8d89438c5a81988f647eb755c78aeb.jpg"
                    alt="Header"
                  />
                </div>
              </Col>
              <Col>
                <div className="par-div">
                  <p>
                    The Orthopedic Center at Almoosa Specialist Hospital is one
                    of the largest specialized centers in the region. We provide
                    comprehensive diagnostic and therapeutic services for all
                    orthopedic cases through the most recent diagnosis methods
                    such as (MRI), 3D-CT and surgical interventions with
                    high-quality medical devices and equipment.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Hero>
      <CustomTabs data={tabsData} />
      <Container>
        <Row xs="1" sm="1" md="2">
          {gridData &&
            gridData.map((item, index) => {
              return (
                <Col key={index}>
                  <BlockWithTitle title={item.title} titleBg="#55b047">
                    {item.description}
                  </BlockWithTitle>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};
export default Content;
