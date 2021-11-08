import React, { useEffect } from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import { useRouter } from 'next/router';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
//components

const LangIcon = ({ t }) => {
  const router = useRouter();
  const { asPath } = router;

  const handleChangeLang = () => {
    let langTo = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(langTo);
    document.getElementsByTagName('html')[0].setAttribute('lang', langTo);

    langTo &&
      router.push(`/${langTo}` + asPath, `/${langTo}` + asPath, {
        locale: langTo
      });
  };

  return (
    <Nav className="left-items">
      <NavItem style={{ cursor: 'pointer' }} onClick={handleChangeLang}>
        <a>
          <FontAwesomeIcon icon={faGlobe} /> {t('lang')}
        </a>
      </NavItem>
    </Nav>
  );
};

LangIcon.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(LangIcon);
