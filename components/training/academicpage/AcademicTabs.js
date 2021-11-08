import React, { useState } from 'react';
import { withTranslation, i18n } from 'root/i18n';
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
import Fellowship from './Fellowship';

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

const AcademicTabs = () => {
  const lang = i18n.language;

  const [activeTab, setActiveTab] = useState(0);

  const toggle = tab => {
    activeTab !== tab && setActiveTab(tab);
  };

  return (
    <sectio className="academic-sections">
      <Container className="pb-5">
        <Row>
          <Col>
            <h2 className="section-title">
              {(lang === 'en' && 'Sections') || 'الأقسام'}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="academic-tap">
              <Nav tabs>
                {dataTap.map((tab, index) => (
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === index })}
                      onClick={() => {
                        toggle(index);
                      }}
                    >
                      {lang && tab.tabName[lang]}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>

              <TabContent activeTab={activeTab}>
                {dataTap.map((tab, index) => (
                  <TabPane tabId={index}>
                    <tab.component />
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

export default withTranslation(['common', 'menu'])(
  connect(mapStateToProps)(AcademicTabs)
);
