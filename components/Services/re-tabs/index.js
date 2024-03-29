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
import { useTranslation } from 'next-i18next';
import DoctorCard from 'src/components/Services/physician-card';
import { useRouter } from 'next/router';

const ReusableTabs = props => {
const { t } = useTranslation('common');

  const { physicians, tab1Data } = props;
  const router = useRouter();
  const { locale } = router;

  const [activeTab, setActiveTab] = useState('1');
  const physiciansExist = physicians && physicians.length > 0;
  const itemsExist = tab1Data && tab1Data.items.length > 0;

  useEffect(() => {
    if (itemsExist && !physiciansExist) {
      setActiveTab('1');
    } else if (physiciansExist && !itemsExist) {
      setActiveTab('2');
    } else if (physiciansExist && itemsExist) {
      setActiveTab('1');
    }
    return () => {};
  }, []);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="reusable-tabs">
      <div className="container">
        <Nav tabs>
          {itemsExist && (
            <NavItem
              className="tab-one"
              style={{ width: itemsExist && !physiciansExist ? '100%' : '50%' }}
            >
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                {locale && tab1Data[locale]?.title}
              </NavLink>
            </NavItem>
          )}
          {physiciansExist && (
            <NavItem
              className="tab-two"
              style={{ width: physiciansExist && !itemsExist ? '100%' : '50%' }}
            >
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                {t('our_physicians')}
              </NavLink>
            </NavItem>
          )}
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {itemsExist &&
              tab1Data.items.map((item, idx) => (
                <div className={classnames({ content: true })} key={idx}>
                  {locale && item[locale]?.content && (
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item[locale]?.content
                        }}
                      />
                    </p>
                  )}
                </div>
              ))}
          </TabPane>
          <TabPane tabId="2" className="physician">
            <Row xs="1" sm="2" md="3" lg="4" className="physicians-cards m-0">
              {physiciansExist &&
                physicians.map((doctor, index) => (
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
export default ReusableTabs;

