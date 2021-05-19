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
  NavbarText
} from 'reactstrap';
import { useRouter } from 'next/router';

const Dropdown = ({ item, options }) => {
  const router = useRouter();
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret className="dropdown-toggle">
        <i className={CN(item.icon, 'mr-1')}></i>
        {item.label}
        <span className="down-arrow">
          <i className="fas fa-caret-down"></i>
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu">
        {options.map((option, index) => {
          return (
            <DropdownItem key={index}>
              <NavItem>
                <Link href={option.path}>
                  <a
                    className={CN('dropdown-item', {
                      active: router.pathname === option.path
                    })}
                  >
                    {option.label}
                  </a>
                </Link>
              </NavItem>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Dropdown;
