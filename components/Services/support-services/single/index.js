import React, { useState, useEffect } from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import DoctorCard from 'src/components/Services/physician-card';
import ReusableTabs from 'src/components/Services/re-tabs';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import classnames from 'classnames';

const Content = props => {
  const { seo, sections, physicians } = props.contentData;
  const { language } = i18n;

  return (
    <div className="content">
      <h2 className="title">{language && seo[language]?.title} </h2>
      <div className="page-desc">
        <Container>
          {language && seo[language]?.content && (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: seo[language]?.content
                }}
              />
            </>
          )}
        </Container>
      </div>
      <div className="info">
        {language &&
          seo[language]?.content2 &&
          seo[language]?.content2 != '' &&
          seo[language]?.image2 &&
          seo[language]?.image2 != '' && (
            <Container>
              <Row xs="1" md="2">
                <Col>
                  <div
                    className="the-img"
                    style={{
                      backgroundImage: `url("${seo[language]?.image2}")`
                    }}
                  ></div>
                </Col>
                <Col>
                  <div className="text">
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: strippedContent(seo[language]?.content2)
                        }}
                      />
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        {sections[0] && (
          <div className="container">
            <div className="tabs">
              <ReusableTabs
                tab1Data={sections[0]}
                {...props}
                physicians={physicians}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;

const Tabs = withTranslation('common')(props => {
  const { physicians, tab1Data, t } = props;
  const { language } = i18n;

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem className="tab-one">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            {language && tab1Data[language]?.title}
          </NavLink>
        </NavItem>
        <NavItem className="tab-two">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            {t('our physicians')}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Container>
            <Row xs="1" md="2">
              {tab1Data.items.length > 0 &&
                tab1Data.items.map((item, idx) => (
                  <Col key={idx}>
                    <TabItem
                      title={language && item[language]?.title}
                      content={language && item[language]?.content}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="2" className="physician">
          <Container>
            <Row xs="1" sm="2" md="3" lg="4" className="physicians-cards">
              {physicians.map((doctor, index) => (
                <Col>
                  <DoctorCard
                    key={index}
                    doctor={doctor}
                    setcurrentDoctor={() => {}}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </TabPane>
      </TabContent>
    </div>
  );
});

const TabItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-component">
      <Button
        color="primary"
        className="toggle-button"
        onClick={toggle}
        style={{ marginBottom: '1rem' }}
      >
        <span>{title ? title : 'toggle'}</span>
        <span className="icon">
          <i className="fas fa-chevron-down"></i>
        </span>
      </Button>
      <Collapse isOpen={isOpen}>
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      </Collapse>
    </div>
  );
};
