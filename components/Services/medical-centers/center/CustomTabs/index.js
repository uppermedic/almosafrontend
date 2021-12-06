import React from 'react';
import { i18n, withTranslation } from 'root/i18n';
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

const CustomTabs = ({
  t,
  physicians,
  items,
  clickItemFun,
  activeItemIndex,
  children
}) => {
  const { language } = i18n;

  return (
    <div className="custom-tabs">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <Nav tabs className="items-list">
              {items.map((item, index) => {
                return (
                  <NavItem
                    key={index}
                    className={classnames({
                      active: activeItemIndex.id === item.id
                    })}
                  >
                    <NavLink
                      onClick={() => {
                        clickItemFun(item);
                      }}
                    >
                      {language && item[language].title}
                    </NavLink>
                  </NavItem>
                );
              })}
              {physicians && physicians[0] && (
                <NavItem
                  className={classnames({
                    active: activeItemIndex.id === 'physicians'
                  })}
                >
                  <NavLink
                    onClick={() => {
                      clickItemFun({ id: 'physicians' });
                    }}
                  >
                    {t('our physicians')}
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Col>
          <Col sm="12" md="8">
            <TabContent activeTab={activeItemIndex?.id}>
              {items.map(item => (
                <TabPane tabId={item.id} key={item?.id}>
                  <Container>
                    {item.items[0] && (
                      <>
                        <h2>{language && item.items[0][language].title}</h2>
                        <p>
                          {language && item.items[0][language]?.content && (
                            <div
                              className="tab-details"
                              dangerouslySetInnerHTML={{
                                __html: item.items[0][language]?.content
                              }}
                            />
                          )}
                        </p>
                      </>
                    )}
                  </Container>
                </TabPane>
              ))}

              {children}
            </TabContent>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withTranslation('common')(CustomTabs);
