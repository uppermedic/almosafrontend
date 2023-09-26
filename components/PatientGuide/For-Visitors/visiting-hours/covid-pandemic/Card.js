import React from 'react';
import Markdown from 'markdown-to-jsx';
import { useRouter } from 'next/router';

const card = ({ item }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="covid-card">
      <h3>
        <Markdown>{locale ? item[locale]?.title : ''}</Markdown>
      </h3>
      <div className="card-content">
        {locale
          ? item[locale]?.content.map(sContent => (
              <div key={sContent?.id}>
                {sContent?.question && <h4>{sContent?.question}</h4>}
                <p>
                  <Markdown>{sContent?.answer}</Markdown>
                </p>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default card;
