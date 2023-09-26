import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { useRouter } from 'next/router';

const DynamicRouteTabs = ({ items, index }) => {
  const { t } = useTranslation('menu');

  const [activeTab, setActiveTab] = useState(index);
  const router = useRouter();
  const { locale } = router;


  const toggle = tab => {
    setActiveTab(tab);
  };

  const handleRouteById = item => {
    router.push(`/${locale}/${item.path}`);
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
export default DynamicRouteTabs;
