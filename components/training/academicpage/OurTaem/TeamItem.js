import React, { useEffect, useState } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';

function BlogItem({ t, team }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="item caro-card">
      <Link href={`/${locale}/services/medical-centers/${team.id}`}>
        <a>
          <img src={team.image} alt="" srcSet="" />
          <div className="content-card">
            <h3>{language && team[language].name}</h3>
            <span>{language && team[language].title}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
BlogItem.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(BlogItem);
