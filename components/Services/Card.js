import React from 'react';
import { Link, i18n, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent, truncate } from 'src/utils/helpers';

function PatientFeatures({ t, item }) {
  const lang = i18n.language;

  return (
    <div className="card-item">
      <Link href={item.path || '#'}>
        <h3>{lang && truncate(item[lang]?.title, 20, '...')}</h3>
      </Link>
      <Markdown>
        {(lang &&
          truncate(
            strippedContent(item[lang]?.excerpt || 'Please enter the data'),
            100,
            '...'
          )) ||
          'Please enter the data'}
      </Markdown>

      <Link href={item.path || '#'}>
        <a>
          <span className="read-more"> {t('read_more')} </span>
        </a>
      </Link>
    </div>
  );
}

PatientFeatures.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(PatientFeatures);
