import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers';
import classnames from 'classnames';
import { i18n, withTranslation } from 'root/i18n';
import DoctorCard from 'src/components/Services/physician-card';

const ReusableTabs = props => {
  const { physicians, tab1Data, t } = props;
  const { language } = i18n;
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="reusable-tabs">
      <div className="container">
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
            {tab1Data &&
              tab1Data.items.length > 0 &&
              tab1Data.items.map((item, idx) => (
                <div className={classnames({ content: true })}>
                  {language && item[language]?.content && (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item[language]?.content
                        }}
                      />
                    </>
                  )}
                </div>
              ))}
          </TabPane>
          <TabPane tabId="2" className="physician">
            <Row xs="1" sm="2" md="3" lg="4" className="doctors-cards m-0">
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
        </TabContent>
      </div>
    </div>
  );
};

export default withTranslation('common')(ReusableTabs);

/*

•  • •  •  •  • 
*/
