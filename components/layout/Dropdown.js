import React, { useState } from 'react';
import CN from 'classnames';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'reactstrap';
import { useRouter } from 'next/router';

const DropdownMenuBar = ({ item, options, setIsOpen, locale }) => {
  const { t } = useTranslation('menu');

  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Dropdown
      nav
      inNavbar
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(!dropdownOpen)}
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
          <Link href={item.path ? `/${locale}/${item.path}` : '#'}>
            <span>{t('menu:' + item.label)}</span>
          </Link>
        </div>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu">
        {options.map((option, index) => {
          return (
            <DropdownItem key={index}>
              <NavItem>
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
export default DropdownMenuBar;
