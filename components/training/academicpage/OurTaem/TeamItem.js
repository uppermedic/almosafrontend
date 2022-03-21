import React, { useEffect, useState } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';

function NewsItem({ t, team }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="item caro-card">
      <a href={language ? String(team[language]?.url) : '#'} target="_blank">
        <img src={team.image} alt="academic" />
        <div className="content-card">
          <h3>{language && team[language]?.name}</h3>
          <span>{language && team[language]?.title}</span>
        </div>
      </a>
    </div>
  );
}
NewsItem.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(NewsItem);
