import { useState } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';

function Card({ t, item }) {
  const { language } = i18n;

  return (
    <>
      <div className="card-wrapper text-center">
        <Markdown>{language ? item[language].content : ''}</Markdown>
      </div>
    </>
  );
}

export default withTranslation('common')(Card);
