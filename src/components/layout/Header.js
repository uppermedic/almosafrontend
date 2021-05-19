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
const Header = ({ Router }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  //Router.pathname
  useEffect(() => {}, []);
  return (
    <header>
      <Container>
        <Row className="top-header align-items-center">
          <Col xs={8} sm={6} className="text-center text-sm-left">
            <NavbarBrand>
              <img src="/images/logo.jpg" />
            </NavbarBrand>
            <NavbarBrand className="brand-right">
              <img src="/images/logo-2.jpg" />
            </NavbarBrand>
          </Col>
          <Col xs={4} sm={6}>
            <Row xs="3" sm="1" xl="3" className="right_links">
              <Col className="right_link">
                <Link href="/error">
                  <a className="bt-light">
                    <span className="icon">
                      <i className="fas fa-users"></i>
                    </span>
                    <span className="text">Join Our Team</span>
                  </a>
                </Link>
              </Col>
              <Col className="right_link">
                <Link href="/error">
                  <a className="bt-light big-words">
                    <span className="icon">
                      <i className="fas fa-hand-holding-heart"></i>
                    </span>
                    <span className="text">volunteering program</span>
                  </a>
                </Link>
              </Col>
              <Col className="right_link">
                <Link href="/blog">
                  <a className="bt-green">
                    <span className="icon user_btn">
                      <i className="fas fa-user-tie"></i>
                    </span>
                    <span className="text">For staff only</span>
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row
          className="top-header align-items-center
        "
        >
          <Col xs={12} md={6}>
            <NavbarBrand>
              <img src="/images/logo.jpg" />
            </NavbarBrand>
            <NavbarBrand className="brand-right">
              <img src="/images/logo-111.jpg" />
            </NavbarBrand>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-end">
            <Link href="/error">
              <a className="bt-light">Join Our Team</a>
            </Link>
            <Link href="/error">
              <a className="bt-light">volunteering program</a>
            </Link>
            <Link href="/blog">
              <a className="bt-green">For staff only</a>
            </Link>
          </Col>
        </Row> */}
      </Container>
      <Navbar color="light" light expand="xl">
        <Container>
          <div className="d-flex justify-content-end nav-toggler-wrapper">
            <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
              <i className="fas fa-bars"></i>
            </NavbarToggler>
          </div>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="w-100 justify-content-around" navbar>
              {Menu.map((item, idx) => (
                <div key={idx}>
                  {!item.isDropDown && (
                    <NavItem>
                      <Link href={item.path}>
                        <a
                          className={Classnames('nav-link', {
                            active: router.pathname === item.path
                          })}
                        >
                          <i className={CN(item.icon, 'mr-1')}></i>
                          {item.label}
                        </a>
                      </Link>
                    </NavItem>
                  )}
                  {item.isDropDown && (
                    <Dropdown item={item} options={item.options} />
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
export default Header;
