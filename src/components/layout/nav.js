import { i18n, Link, withTranslation } from 'root/i18n';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
//components
import SearchNav from 'src/components/layout/SearchNav';
const TopNav = ({ t }) => (
  <div className="top-nav">
    <Container>
      <Row>
        <Col xs={4} sm={6}>
          <Nav className="left-items">
            {/* <NavItem>
              <Link href="/">
                <a>
                  <FontAwesomeIcon icon={faClock} />
                  Sat - Fri 7:30 am - 8:30 pm
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/x">
                <a>
                  <FontAwesomeIcon icon={faPhoneAlt} /> 00966135369999
                </a>
              </Link>
            </NavItem> */}
            <NavItem
              onClick={() => {
                let langTo = i18n.language === 'en' ? 'ar' : 'en';
                i18n.changeLanguage(langTo);
                document
                  .getElementsByTagName('html')[0]
                  .setAttribute('lang', langTo);
              }}
            >
              <Link href="#!">
                <a>
                  <FontAwesomeIcon icon={faGlobe} /> {t('lang')}
                </a>
              </Link>
            </NavItem>
          </Nav>
        </Col>
        <Col xs={8} sm={6} className="d-flex justify-content-end">
          <SearchNav />
          {/* <Nav className="right-items d-none d-lg-flex">
            <NavItem>
              <Link href="/x">
                <a>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/x">
                <a>
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/x">
                <a>
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/x">
                <a>
                  <FontAwesomeIcon icon={faYoutubeSquare} />
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/x">
                <a>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </Link>
            </NavItem>
          </Nav> */}
        </Col>
      </Row>
    </Container>
  </div>
);
TopNav.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default withTranslation('common')(TopNav);
