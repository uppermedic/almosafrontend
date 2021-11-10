import React from 'react';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';

const Card = ({ item }) => {
  const { language } = i18n;
  return (
    <div className="card-item">
      <div>
        <h4>
          <Markdown>{language ? item[language]?.title : ''}</Markdown>
        </h4>
      </div>
      <div>
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: language ? item[language]?.content : ''
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default Card;
