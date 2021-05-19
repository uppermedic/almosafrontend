import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReusableDropdown from 'src/components/Services/medical-programs/reusable-dropdown/';

//title, items, clickItemFun, activeItemIndex

const Content = ({ data }) => {
  const [secondPost, aboutData] = data;
  const [active, setActive] = useState(0);

  const clickItemFun = itemIndex => {
    setActive(itemIndex);
  };
  return (
    <div>
      <div className="second-post">
        <Container>
          <Row xs="1" xl="2">
            <Col>
              <img src={secondPost.postImg} alt="post-image" />
            </Col>
            <Col>{secondPost.rightParagraph}</Col>
          </Row>
        </Container>
      </div>
      <ReusableDropdown
        title={aboutData.title}
        items={aboutData.items}
        activeItemIndex={active}
        clickItemFun={clickItemFun}
      />

      <div className="items-content">
        <div className="container">
          <iframe
            width="100%"
            height="715"
            src={aboutData.items[active].content.videoUrl}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Content;
