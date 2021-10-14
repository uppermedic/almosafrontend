import React, { useEffect } from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import { useRouter } from 'next/router';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
//components
import SearchNav from 'src/components/layout/SearchNav';

const TopNav = ({ t }) => {
  const router = useRouter();
  const { locale, pathname } = router;

  // useEffect(() => {
  //   switch (i18n.language) {
  //     case 'en':
  //       i18n.changeLanguage('en');
  //       router.push('/' + pathname, { locale: 'en' });
  //       break;
  //     case 'ar':
  //       router.push('/ar' + pathname, { locale: 'ar' });
  //       i18n.changeLanguage('ar');
  //       break;
  //   }
  // }, []);

  return (
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
};

TopNav.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(TopNav);
