import React, { useState, useEffect } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';
import { useRouter } from 'next/router';

const CustomTabs = ({ items, dataContent }) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const { locale } = router;

  const toggle = tab => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (router?.query?.id) {
      setActiveTab(Number(router.query.id));
    } else {
      setActiveTab(0);
    }
  }, [router.asPath]);

  const handleRouteById = item => {
    if (item.dataType) {
      if (item.dataType === 'dynamic') {
        router.push(`/${locale}` + item.path + `?id=${item.id}`);
      } else {
        router.push(`/${locale}` + item.path);
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
                  key={item.dataType === 'dynamic' ? item.id : index}
                  className={classnames({
                    active:
                      item.dataType === 'dynamic'
                        ? activeTab === item.id
                        : activeTab === index
                  })}
                  onClick={() => handleRouteById(item)}
                >
                  <NavLink
                    onClick={() => {
                      toggle(item.dataType === 'dynamic' ? item.id : index);
                    }}
                  >
                    {locale && item.title[locale]}
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
                  <TabPane
                    tabId={item.dataType === 'dynamic' ? item.id : index}
                    key={item.id}
                  >
                    <div className={item?.className}>
                      {Component && (
                        <Component
                          contentData={
                            dataContent && Object.entries(dataContent).length
                              ? dataContent
                              : {}
                          }
                          itemContent={
                            item?.content &&
                            Object.entries(item?.content)?.length
                              ? item?.content
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

export default CustomTabs;
