import React from 'react';
import BlockWithTitle from 'src/components/Services/medical-programs/reusable-element';
import { Row, Container, Col } from 'reactstrap';
import RelatedLinks from 'src/components/Services/medical-programs/reusable-related-link';

const Content = ({ data }) => {
  return (
    <div className="vacination-program-content">
      <Container>
        <Row xs="1" xl="2">
          {data.map((item, index) => {
            return (
              <Col key={index}>
                <BlockWithTitle title={item.title}>
                  {item.description}
                </BlockWithTitle>
              </Col>
            );
          })}
        </Row>
      </Container>
      <RelatedLinks
        links={[
          {
            title: 'infectious diseases division',
            url: '/'
          }
        ]}
      />
    </div>
  );
};

export default Content;
