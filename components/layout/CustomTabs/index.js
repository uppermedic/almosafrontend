import React, { useState, useEffect } from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
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
import { useRouter } from 'next/router';

const CustomTabs = ({ items, dataContent }) => {
  const { language } = i18n;
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const toggle = tab => {
    setActiveTab(tab);
  };

  const handleRouteById = item => {
    if (item.dataType) {
      if (item.dataType === 'dynamic') {
        router.push(item.path + `?id=${item.id}`);
      } else {
        router.push(item.path);
      }
    }
  };

  return (
    <div className="custom-tabs" style={{ margin: 0 }}>
      <Row>
        <Col sm="12" md="3">
          <Nav tabs className="items-list">
            {items.map((item, index) => {
              return (
                <NavItem
                  key={index}
                  className={classnames({ active: activeTab === index })}
                  onClick={() => handleRouteById(item)}
                >
                  <NavLink
                    onClick={() => {
                      toggle(index);
                    }}
                  >
                    {language && item.title[language]}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Col>
        <Col sm="12" md="8">
          <TabContent activeTab={activeTab}>
            <>
              {items.map((item, index) => {
                const Component = item.component;
                return (
                  <TabPane tabId={index} key={item.id}>
                    <div className={item.className}>
                      {Component && (
                        <Component
                          contentData={
                            dataContent && Object.entries(dataContent).length
                              ? dataContent
                              : {}
                          }
                        />
                      )}
                    </div>
                  </TabPane>
                );
              })}
            </>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default withTranslation('common')(CustomTabs);
