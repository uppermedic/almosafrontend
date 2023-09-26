import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import classnames from 'classnames';
import { strippedContent } from 'src/utils/helpers';
import { useTranslation } from 'next-i18next';
import DoctorCard from 'src/components/Services/physician-card';
import { useRouter } from 'next/router';

const OneDaySurgeryContent = ({  data }) => {
const { t } = useTranslation('common');

  const { seo, sections, physicians } = data;
  const router = useRouter();
  const { locale } = router;

  const [activeTab, setActiveTab] = useState(1);

  const toggle = tab => {
    activeTab !== tab && setActiveTab(tab);
  };
  return (
    <section className="surgey-section">
      <Container>
        <Row>
          <Col lg={6} className="mx-3">
            <div className="info-container">
              <div className="surgey-info">
                {locale && seo[locale]?.content && (
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: seo[locale]?.content
                      }}
                    />
                  </p>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mx-3 tabs-container">
          <Nav tabs>
            {sections && sections[0] && (
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === 1 })}
                  onClick={() => {
                    toggle(1);
                  }}
                >
                  {locale && sections[0][locale].title}
                </NavLink>
              </NavItem>
            )}
            {physicians && physicians[0] && (
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === 2 })}
                  onClick={() => {
                    toggle(2);
                  }}
                >
                  {t('our_physicians')}
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <TabContent activeTab={activeTab}>
            {locale && sections && sections[0] && (
              <TabPane tabId={1}>
                <Row>
                  <Col xs={6}>
                    {sections[0].items.map((item, idx) => (
                      <>
                        <p className="tab-item-title">{item[locale].title}</p>
                        <div className="tab-item-content">
                          <p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: strippedContent(item[locale].content)
                              }}
                            />
                          </p>
                        </div>
                      </>
                    ))}
                  </Col>
                </Row>
              </TabPane>
            )}
            {locale && physicians && (
              <TabPane tabId={2} className="physician">
                <Row
                  xs="1"
                  sm="2"
                  md="3"
                  lg="4"
                  className="physicians-cards m-0"
                >
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
              </TabPane>
            )}
          </TabContent>
        </Row>
      </Container>
    </section>
  );
};

export default OneDaySurgeryContent;
