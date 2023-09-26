import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Courses from './coursespage';
import Events from './eventsPage';
import Academic from './academicpage';
import { getCategories as getEventsCategoriesAction } from 'src/store/actions';
import { connect } from 'react-redux';
import moment from 'moment';
import { useRouter } from 'next/router';

const ReusableTabs = ({ data, getEventsCategories }) => {
  const router = useRouter();
  const { locale } = router;

  const { eventData, courseData, educationData, ourTeamData } = data;
  const YEARS = () => {
    const years = [];
    const dateStart = moment().add(4, 'y');
    const dateEnd = moment();
    while (dateStart.diff(dateEnd, 'years') >= 0) {
      years.push(dateEnd.format('YYYY') - 4);
      dateEnd.add(1, 'year');
    }
    return years;
  };

  const yearsData = YEARS()
    .reverse()
    .map((year, index) => {
      return {
        id: year,
        ar: { name: year },
        en: { name: year }
      };
    });

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    getEventsCategories('/education/categories');
    return () => {};
  }, []);

  const toggle = tab => {
    activeTab !== tab && setActiveTab(tab);
  };

  return (
    <div className="events-courses-tap">
      <div className="">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === 0 })}
              onClick={() => {
                toggle(0);
              }}
            >
              {(locale == 'en' && 'Events') || 'الأحداث'}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === 1 })}
              onClick={() => {
                toggle(1);
              }}
            >
              {(locale == 'en' && 'Academic Affairs') || 'الشؤون الأكاديمية'}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === 2 })}
              onClick={() => {
                toggle(2);
              }}
            >
              {(locale == 'en' && 'Courses') || 'الدورات'}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={0}>
            <Events
              data={eventData}
              yearsData={yearsData}
              banner={educationData.page.page_cover}
            />
          </TabPane>
          <TabPane tabId={1}>
            <Academic ourTeamData={ourTeamData} />
          </TabPane>
          <TabPane tabId={2}>
            <Courses
              data={courseData}
              yearsData={yearsData}
              banner={educationData.page.page_cover}
            />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

const mapDispatchToProps = { getEventsCategories: getEventsCategoriesAction };
export default connect(null, mapDispatchToProps)(ReusableTabs);
