import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Classnames from 'classnames';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import Dropdown from './Dropdown';
import Menu from 'src/constants/Menu';

const Header = () => {
const { t } = useTranslation(['common', 'menu', 'header']);

  const router = useRouter();
  const { locale , pathname } = router;

  const [isOpen, setIsOpen] = useState(false);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setTransform(0);
    };
  }, []);

  const handleScroll = event => {
    let scrollTop = window.scrollY;
    setTransform(scrollTop);
  };

  return (
    <header>
      <Container>
        <div className="top-header align-items-center d-flex justify-content-between">
          <div className="logos-wrapper">
            <h1>
              <Link href={`/${locale}`}>
                <a className="navbar-brand">
                  <img src="/images/logo.jpg" alt="logo" />
                </a>
              </Link>
            </h1>
          </div>
          <div className="logos-wrapper text-right">
            <div className="navbar-brand brand-right">
              <img
                className="pl-2 pr-2 logo1"
                src="/images/logo1.png"
                alt="logo1"
              />
              <Link href={`/${locale}/services/nursing-department`}>
                <a>
                  <img
                    className="logo2"
                    src="/images/logo2.jpeg"
                    alt="magent"
                    style={{ cursor: 'pointer' }}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Navbar
        color="light"
        light
        expand="xl"
        style={{
          position: transform > 270 ? 'fixed' : 'initial',
          width: '100%',
          top: 0
        }}
      >
        <Container>
          <div className="d-flex justify-content-end nav-toggler-wrapper">
            <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
              <i className="fas fa-bars" />
            </NavbarToggler>
          </div>
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="w-100 justify-content-between align-items-xl-center"
              navbar
            >
              {Menu.map((item, idx) => (
                <>
                  {!item.isDropDown && (
                    <NavItem
                      onClick={() => setIsOpen(false)}
                      style={{ padding: '0.3rem 0' }}
                    >
                      <Link href={`/${locale}/${item.path}`}>
                        <a
                          className={Classnames('nav-link', {
                            active: pathname === item.path
                          })}
                        >
                          {t('menu:' + item.label)}
                        </a>
                      </Link>
                    </NavItem>
                  )}
                  {item.isDropDown && (
                    <Dropdown
                      item={item}
                      options={item.options}
                      setIsOpen={setIsOpen}
                      locale={locale}
                    />
                  )}
                </>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
