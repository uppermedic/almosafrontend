import React from 'react';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';

const card = ({ item }) => {
  const lang = i18n.language;
  // console.log('item', item, lang, lang && item[lang]);
  return (
    <div className="covid-card">
      <h3>
        <Markdown>{lang ? item[lang].title : ''}</Markdown>
      </h3>
      <div className="card-content">
        {lang
          ? item[lang].content.map(sContent => (
              <div key={sContent.id}>
                {sContent.question && <h4>{sContent.question}</h4>}
                <p>
                  <Markdown>{sContent.answer}</Markdown>
                </p>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default card;
