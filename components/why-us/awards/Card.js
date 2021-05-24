import React from 'react';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers';

const Card = ({ item }) => {
  const { language } = i18n;
  return (
    <div className="card-item">
      <div>
        <h4>{language && item[language].title}</h4>
      </div>
      <div>
        <p>
          <Markdown>{language ? item[language].content : ''}</Markdown>
        </p>
      </div>
    </div>
  );
};

export default Card;
