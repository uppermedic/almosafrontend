import React, { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { useRouter } from 'next/router';
import { Container } from 'reactstrap';
export const BreadCrumb = ({ t }) => {
  const router = useRouter();
  const pathArr = router?.pathname?.split('/');
  const isHome = router?.pathname == '/';

  //remove home
  pathArr.shift();
  const current = pathArr.pop();

  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  // function return the all pthnames routes

  const getTheRightPath = page => {
    let custom = '';
    for (let i of pathArr) {
      if (i !== page) {
        custom += `/${i}`;
      } else {
        custom += `/${i}`;
        break;
      }
    }
    return custom;
  };

  return (
    <>
      {!isHome && (
        <div className="bread-crumb-wrapper shadow">
          <Container>
            {current === '' ? (
              <span active>{t('menu:home')}</span>
            ) : (
              <span>
                <span>
                  <Link href={`/${locale}`}>
                    <a>{t('menu:home')}</a>
                  </Link>
                </span>
                {'>'}
                {pathArr.map((item, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <span>
                        <Link href={`/${locale}` + `${getTheRightPath(item)}`}>
                          <a>
                            {t(`menu:${String(item).split('-').join(' ')}`)}
                          </a>
                        </Link>
                      </span>
                      {'>'}
                    </React.Fragment>
                  );
                })}
                <span className="active">
                  {router.query.hasOwnProperty('slug')
                    ? router?.query?.slug.split('-').join(' ')
                    : t(`menu:${String(current).split('-').join(' ')}`)}
                </span>
              </span>
            )}
          </Container>
        </div>
      )}
    </>
  );
};

BreadCrumb.getInitialProps = async () => ({
  namespacesRequired: ['common', 'menu', 'header']
});
export default withTranslation('common')(BreadCrumb);
