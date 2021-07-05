import React, { useState, useEffect } from 'react';
import CN from 'classnames';
import { i18n, Link, withTranslation } from 'root/i18n';
import { useRouter } from 'next/router';
import Classnames from 'classnames';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import Dropdown from './Dropdown';
import Menu from 'src/constants/Menu';
import { employee_portal, volunteering, join_us } from 'src/constants/Data';
const Header = ({ t, data }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [transform, setTransform] = useState(0);

  //Router.pathname

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
            <Link href="/">
              <a className="navbar-brand">
                <img src="/images/logo.jpg" />
              </a>
            </Link>
          </div>
          <div className="logos-wrapper text-right">
            <div className="navbar-brand brand-right">
              <img className="pl-2 pr-2 logo1" src="/images/logo1.png" />
              <Link href="/services/nursing-department">
                <img
                  className="logo2"
                  src="/images/logo2.png"
                  alt="magent"
                  style={{ cursor: 'pointer' }}
                />
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
                <div key={idx}>
                  {!item.isDropDown && (
                    <NavItem onClick={() => setIsOpen(false)}>
                      <Link href={item.path}>
                        <a
                          className={Classnames('nav-link', {
                            active: router.pathname === item.path
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
                    />
                  )}
                </div>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
Header.getInitialProps = async () => ({
  namespacesRequired: ['common', 'menu', 'header']
});
export default withTranslation('common')(Header);
