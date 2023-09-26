import React from 'react';
import { useTranslation } from 'next-i18next';
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

const CustomTabs = ({
  physicians,
  items,
  clickItemFun,
  activeItemIndex,
  children
}) => {
const { t } = useTranslation('common');

  const router = useRouter();
  const { locale } = router;

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
                      {locale && item[locale].title}
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
                    {t('our_physicians')}
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
                        <h2>{locale && item.items[0][locale].title}</h2>
                        <p>
                          {locale && item.items[0][locale]?.content && (
                            <div
                              className="tab-details"
                              dangerouslySetInnerHTML={{
                                __html: item.items[0][locale]?.content
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

export default CustomTabs;
