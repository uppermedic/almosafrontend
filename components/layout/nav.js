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
        <Col xs={12} sm={2}>
          <Nav className="left-items">
            <NavItem
              style={{ cursor: 'pointer' }}
              onClick={() => {
                let langTo = i18n.language === 'en' ? 'ar' : 'en';
                i18n.changeLanguage(langTo);
                document
                  .getElementsByTagName('html')[0]
                  .setAttribute('lang', langTo);
              }}
            >
              <a>
                <FontAwesomeIcon icon={faGlobe} /> {t('lang')}
              </a>
            </NavItem>
          </Nav>
        </Col>
        <Col
          xs={12}
          sm={10}
          className="d-flex justify-content-end green-top-nav"
        >
          <SearchNav />
        </Col>
      </Row>
    </Container>
  </div>
);
TopNav.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(TopNav);
