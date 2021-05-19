import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReusableDropdown from 'src/components/Services/medical-programs/reusable-dropdown/';
import BlockWithTitle from 'src/components/Services/medical-programs/reusable-element/';

const Content = ({ data }) => {
  const [active, setActive] = useState(0);

  const clickItemFun = itemIndex => {
    setActive(itemIndex);
  };

  return (
    <div className="medical-checkup-content">
      <ReusableDropdown
        title={data.title}
        items={data.items}
        clickItemFun={clickItemFun}
        activeItemIndex={active}
      />

      {/* Here will be the content will change according to the dropdown selected item */}

      {/* will depending on the active index on the dropdown item wich will pass with the click item function */}

      <section className="center-paragraph">
        <div className="container">
          {data.items[active].paragraphs &&
            data.items[active].paragraphs.map((par, index) => {
              return <p key={index}>{par}</p>;
            })}
        </div>
      </section>

      <section className="grid-info">
        <Container>
          <Row xs="1" md="2">
            {data.items[active].infoGridData.map((item, index) => {
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
      </section>
    </div>
  );
};

export default Content;
