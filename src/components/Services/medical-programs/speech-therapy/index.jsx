import React from 'react';
import BlockElement from 'src/components/Services/medical-programs/reusable-element/index.jsx';
import { Container, Row, Col } from 'reactstrap';
import RelatedLonks from 'src/components/Services/medical-programs/reusable-related-link/index.jsx';
import RelatedLinks from '../reusable-related-link';

const Content = ({ data }) => {
  const { about, relatedLinks } = data;
  return (
    <div>
      <Container>
        <Row xs="1" xl="2">
          {about.map((item, index) => {
            return (
              <Col key={index}>
                <BlockElement title={item.title}>{item.content}</BlockElement>
              </Col>
            );
          })}
        </Row>
      </Container>
      <RelatedLinks links={relatedLinks} />
    </div>
  );
};

export default Content;
