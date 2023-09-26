import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from 'reactstrap';

export const BreadCrumb = () => {
  const { t } = useTranslation(['common', 'menu', 'header']);

  const router = useRouter();
  const { locale, pathname , query } = router;

  const pathArr = pathname?.split('/');
  const isHome = pathname == '/';

  //remove home
  pathArr.shift();
  const current = pathArr.pop();

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
                            {t(`menu:${String(item).split('-').join('_')}`)}
                          </a>
                        </Link>
                      </span>
                      {'>'}
                    </React.Fragment>
                  );
                })}
                <span className="active">
                  {query.hasOwnProperty('slug')
                    ? query?.slug.split('-').join(' ')
                    : t(`menu:${String(current).split('-').join('_')}`)}
                </span>
              </span>
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default BreadCrumb;
