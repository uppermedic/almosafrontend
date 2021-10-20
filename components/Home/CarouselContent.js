import React, { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
import {
  app_store_download_app,
  google_play_store_download_app
} from 'src/constants/Data';

function CarouselContent({ data, index, t }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  if (data) {
    return (
      <div className="container">
        <div className="carosel-content">
          <h2>
            <span>
              <Markdown>
                {(language && strippedContent(data[language].title)) || ''}
              </Markdown>
            </span>
          </h2>
          <p>
            <Markdown>
              {(language && strippedContent(data[language].content)) || ''}
            </Markdown>
          </p>
          {index === 0 && (
            <div className="stores-wrapper">
              <a href={app_store_download_app} target="_blank">
                <img src="images/home/app-store-btn.svg" alt="" />
              </a>
              <a href={google_play_store_download_app} target="_blank">
                <img src="images/home/google-play-btn.svg" alt="" />
              </a>
            </div>
          )}
          {language && data[language].btn_text && (
            <div className="book-now">
              <Link href={`/${locale}/contact-us`}>
                <a className="hvr-grow">
                  {language && data[language].btn_text}
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return 'loading';
  }
}

export default withTranslation('common')(CarouselContent);
