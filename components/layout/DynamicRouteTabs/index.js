import React, { useState, useEffect } from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
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
import { useRouter } from 'next/router';

const DynamicRouteTabs = ({ t, items, index }) => {
  const { language } = i18n;
  const [activeTab, setActiveTab] = useState(index);
  const router = useRouter();

  const toggle = tab => {
    setActiveTab(tab);
  };

  const handleRouteById = item => {
    router.push(item.path);
  };

  return (
    <div className="custom-tabs mb-5" style={{ margin: 0 }}>
      <Nav tabs className="items-list">
        {items.map((item, index) => {
          return (
            <NavItem
              key={index}
              className={classnames({ active: activeTab === index })}
              onClick={() => handleRouteById(item)}
            >
              <NavLink
                onClick={() => {
                  toggle(index);
                }}
              >
                {t('menu:' + item.label)}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
};

export default withTranslation('menu')(DynamicRouteTabs);
