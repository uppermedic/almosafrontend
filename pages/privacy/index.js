import React from 'react';
import Head from 'src/components/layout/head';
import i18n from 'root/i18n';
import Content from 'src/components/Privacy';
import { withTranslation } from 'root/i18n';

const index = ({ t }) => {
  const { language } = i18n;
  const seo = {
    ar: {
      title: 'سياسة الخصوصية',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Privacy Policy',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="privacy">
      <Head data={seo} />
      <div className="head-banner">
        <div className="container">
          <h1>{t('menu:privacy')}</h1>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default withTranslation(['menu'])(index);
