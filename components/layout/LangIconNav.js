import React from 'react';
import { useTranslation } from 'next-i18next';
import { Nav, NavItem } from 'reactstrap';
import { useRouter } from 'next/router';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
//components

const LangIcon = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const { asPath, locale } = router;
  const handleChangeLang = async () => {
    let langTo = locale === 'ar' ? 'en' : 'ar';

    langTo &&
      router
        .push(`/${langTo}` + asPath, `/${langTo}` + asPath, {
          locale: langTo
        })
        .then(() =>
          document.getElementsByTagName('html')[0].setAttribute('lang', langTo)
        );
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

export default LangIcon;
