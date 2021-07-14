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
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers';
import { i18n, withTranslation } from 'root/i18n';
import DoctorCard from 'src/components/Services/physician-card';

const OneDaySurgeryContent = ({ t, data }) => {
  const { seo, sections, physicians } = data;
  const { language } = i18n;
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
                {language && seo[language]?.content && (
                  <>
                    {/* <Markdown>{strippedContent(seo[language]?.content)}</Markdown> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: seo[language]?.content
                      }}
                    />
                  </>
                )}
                {/* <p>
                  Day surgery allows you to be admitted to hospital for surgery
                  or a procedure and be discharged home on the same day. We try
                  to reduce the length of stay in the hospital by shifting the
                  majority of our operations to day surgery.
                </p>
                <p>
                  Thanks to short-acting anesthesia and our advanced surgical
                  techniques. High-quality specialist care is provided with
                  specially trained nurses caring for patients during their time
                  on our day surgery unit.
                </p>
                <p>
                  If you are a day patient, you will be discharged home from the
                  unit after only a few hours. There are a few patients who use
                  our 23-hour overnight facility and who are discharged first
                  thing in the morning the day after their operation. We will
                  tell you in advance if we plan to keep you overnight.
                </p> */}
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
                  {language && sections[0][language].title}
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
                  {t('our physicians')}
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <TabContent activeTab={activeTab}>
            {language && sections && sections[0] && (
              <TabPane tabId={1}>
                <Row>
                  <Col xs={6}>
                    {sections[0].items.map((item, idx) => (
                      <>
                        <p className="tab-item-title">{item[language].title}</p>
                        <div className="tab-item-content">
                          <Markdown>
                            {strippedContent(item[language].content)}
                          </Markdown>
                        </div>
                      </>
                    ))}
                  </Col>
                </Row>
              </TabPane>
            )}
            {language && physicians && (
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

export default withTranslation('common')(OneDaySurgeryContent);
