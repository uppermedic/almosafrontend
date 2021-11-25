import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
import {
  app_store_download_app,
  google_play_store_download_app
} from 'src/constants/Data';

function CarouselContent({ data, index, t }) {
  const { language } = i18n;

  if (data) {
    return (
      <div className="container">
        <div className="carosel-content">
          <h2>
            <span>
              <Markdown>
                {(language && strippedContent(data[language]?.title)) || ''}
              </Markdown>
            </span>
          </h2>
          <div>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    (language && strippedContent(data[language]?.content)) || ''
                }}
              />
            </p>
          </div>
          {index === 2 && (
            <div className="stores-wrapper">
              <a
                href={app_store_download_app}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img src="images/home/app-store-btn.svg" alt="app-store" />
              </a>
              <a
                href={google_play_store_download_app}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img src="images/home/google-play-btn.svg" alt="google-play" />
              </a>
            </div>
          )}
          {language && data[language].btn_text && (
            <div className="book-now">
              <Link href={data.btn_link}>
                <a
                  className="hvr-grow"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
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
