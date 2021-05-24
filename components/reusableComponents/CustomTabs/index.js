import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';

const CustomTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="custom-tabs">
      <Container>
        <Row>
          <Col sm="12" md="4">
            <Nav tabs className="items-list">
              {data.map((item, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink
                      className={classnames({ active: activeTab === index })}
                      style={{ backgroundColor: item.color }}
                      onClick={() => {
                        toggle(index);
                      }}
                    >
                      <i className={item.icon && item.icon}></i>
                      {item.title}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Col>
          <Col>
            <TabContent activeTab={activeTab}>
              {data.map((item, index) => {
                return (
                  <TabPane key={index} tabId={index}>
                    <h2>{item.content.contentTitle}</h2>
                    <hr />
                    <p>{item.content.contentDescription}</p>
                  </TabPane>
                );
              })}
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomTabs;
