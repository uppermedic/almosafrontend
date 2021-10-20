import React, { useState, useEffect } from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { useRouter } from 'next/router';

const DynamicRouteTabs = ({ t, items, index }) => {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  const [activeTab, setActiveTab] = useState(index);
  const router = useRouter();

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

export default withTranslation('menu')(DynamicRouteTabs);
