import React from 'react';
import { Container, Button } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
import {
  app_store_download_app,
  google_play_store_download_app
} from 'src/constants/Data';

function CarouselContent({ data, index, t }) {
  const lang = i18n.language;

  if (data) {
    return (
      <div className="container">
        <div className="carosel-content">
          <h2>
            <span>
              <Markdown>
                {(lang && strippedContent(data[lang].title)) || ''}
              </Markdown>
            </span>
          </h2>
          <p>
            <Markdown>
              {(lang && strippedContent(data[lang].content)) || ''}
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
          {lang && data[lang].btn_text && (
            <div className="book-now">
              <Link href={data.btn_link}>
                <a className="hvr-grow">{lang && data[lang].btn_text}</a>
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
