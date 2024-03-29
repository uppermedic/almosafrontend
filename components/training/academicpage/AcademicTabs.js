import React, { useState } from 'react';
import { connect } from 'react-redux';
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
import ResearchCenter from './ResearchCenter';
import TrainingStaff from './TraningStaff';
import LifeSupport from './LifeSupport';
import CPDD from './CPDD';
import { useRouter } from 'next/router';

const dataTap = [
  {
    tabName: { en: 'Research Center', ar: 'مركز الأبحاث' },
    component: ResearchCenter
  },
  {
    tabName: {
      en: 'Training & Staff Development',
      ar: 'تدريب وتطوير الموظفين'
    },
    component: TrainingStaff
  },
  {
    tabName: { en: 'Life Support Center', ar: 'مركز دعم الحياة المتقدم' },
    component: LifeSupport
  },
  {
    tabName: { en: 'CPDD', ar: 'قسم التطوير المهني المستمر' },
    component: CPDD
  }
];

const AcademicTabs = ({ sectionContentData, sectionsData }) => {
  const router = useRouter();
  const { locale } = router;

  const [activeTab, setActiveTab] = useState(0);

  const toggle = tab => {
    activeTab !== tab && setActiveTab(tab);
  };

  // let secData = sectionsData.map(obj => {
  //   return {
  //     ...obj,
  //     section_id: obj?.section?.id,
  //     en: { ...obj['en'], section_title: obj?.section['en']?.title },
  //     ar: { ...obj['ar'], section_title: obj?.section['ar']?.title }
  //   };
  // });

  let group = sectionsData.reduce((r, a) => {
    r[a.section.id] = [...(r[a.section.id] || []), a];
    return r;
  }, {});

  const tabsData = Object.values(group)?.map((obj, idx) => {
    return {
      section: obj[0].section,
      section_data: obj,
      component: dataTap[idx]?.component
    };
  });

  console.log('tabsData', tabsData);

  return (
    <sectio className="academic-sections">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">
              {locale && sectionContentData[locale]?.title}
            </h2>
          </Col>
        </Row>
        {locale && sectionContentData[locale]?.content && (
          <Row>
            <Col>
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sectionContentData[locale]?.content || ' '
                  }}
                />
              </p>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <div className="academic-tap">
              <Nav tabs>
                {tabsData.map((tab, index) => (
                  <NavItem key={index}>
                    <NavLink
                      className={classnames({ active: activeTab === index })}
                      onClick={() => {
                        toggle(index);
                      }}
                    >
                      {locale && tab?.section[locale]?.title}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>

              <TabContent activeTab={activeTab}>
                {tabsData?.map((tab, index) => (
                  <TabPane tabId={index}>
                    <tab.component sectionData={tab?.section_data} />
                  </TabPane>
                ))}
              </TabContent>
            </div>
          </Col>
        </Row>
      </Container>
    </sectio>
  );
};

const mapStateToProps = state => ({
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

export default connect(mapStateToProps)(AcademicTabs);
