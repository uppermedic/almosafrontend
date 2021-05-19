import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const ReusableTabs = ({ data, videoContent }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="inpatient_reusable-tabs">
      <div className="container">
        <Nav tabs>
          {data &&
            data.map((tab, index) => {
              return (
                <NavItem key={index}>
                  <NavLink
                    className={classnames({ active: activeTab === index })}
                    onClick={() => {
                      toggle(index);
                    }}
                  >
                    {tab.title}
                  </NavLink>
                </NavItem>
              );
            })}
        </Nav>
        <TabContent activeTab={activeTab}>
          {data &&
            data.map((tab, index) => {
              return (
                <TabPane key={index} tabId={index}>
                  <div className={classnames({ content: videoContent })}>
                    {tab.content}
                  </div>
                </TabPane>
              );
            })}
        </TabContent>
      </div>
    </div>
  );
};

export default ReusableTabs;

/*

•  • •  •  •  • 
*/
