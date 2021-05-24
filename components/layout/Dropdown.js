import React, { useState } from 'react';
import CN from 'classnames';
import { i18n, Link, withTranslation } from 'root/i18n';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  NavbarText
} from 'reactstrap';
import { useRouter } from 'next/router';

const DropdownMenuBar = ({ t, item, options, setIsOpen }) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Dropdown
      nav
      inNavbar
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(!dropdownOpen)}
    >
      <DropdownToggle
        nav
        caret
        className="dropdown-toggle"
        onMouseEnter={() => setDropdownOpen(true)}
      >
        {/* <i className={CN(item.icon, 'mr-1')}></i> */}
        <div>
          <span>{t('menu:' + item.label)}</span>
          {/* <span className="down-arrow">
            <i className="fas fa-caret-down"></i>
          </span> */}
        </div>
      </DropdownToggle>
      <DropdownMenu
        className="dropdown-menu"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        {options.map((option, index) => {
          return (
            <DropdownItem key={index}>
              <NavItem onClick={() => setIsOpen(false)}>
                <Link href={option.path}>
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
