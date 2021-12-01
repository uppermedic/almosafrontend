import React, { useState } from 'react';
import CN from 'classnames';
import { i18n, Link, withTranslation } from 'root/i18n';
import {
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'reactstrap';
import { useRouter } from 'next/router';

const DropdownMenuBar = ({ t, item, options, setIsOpen, locale }) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleClick = () => {
    if (window.innerWidth < 992) {
      window.scrollTo(0, 1100);
    } else {
      window.scrollTo(0, 700);
    }
  };
  return (
    <Dropdown
      nav
      inNavbar
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(!dropdownOpen)}
      // onClick={() =>
      //   window.innerWidth >= 992
      //     ? console.log('use hover')
      //     : setDropdownOpen(!dropdownOpen)
      // }
      onMouseEnter={() =>
        window.innerWidth < 992
          ? console.log('use click')
          : setDropdownOpen(true)
      }
      onMouseLeave={() =>
        window.innerWidth < 992
          ? console.log('use click')
          : setDropdownOpen(false)
      }
    >
      <DropdownToggle nav caret className="dropdown-toggle">
        <div>
          <span>{t('menu:' + item.label)}</span>
        </div>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu">
        {options.map((option, index) => {
          return (
            <DropdownItem key={index}>
              <NavItem onClick={() => setIsOpen(false)}>
                <Link href={`/${locale}/${option.path}`}>
                  <a
                    className={CN('dropdown-item', {
                      active: router.pathname === option.path
                    })}
                  >
                    {t('menu:' + option.label)}
                  </a>
                </Link>
              </NavItem>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};
Dropdown.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('menu')(DropdownMenuBar);
