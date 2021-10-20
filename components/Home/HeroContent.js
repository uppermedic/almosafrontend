import React, { useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
import {
  app_store_download_app,
  google_play_store_download_app
} from 'src/constants/Data';
function HeroContent({ data, t }) {
  const { language } = i18n;

  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  if (data) {
    return (
      <Container style={{ height: '100%' }}>
        <div className="home-hero-content">
          <div>
            <h2 data-aos="fade-down" data-aos-duration="1000">
              <Markdown>{strippedContent(data.title) || ''}</Markdown>
              <span>
                <Markdown>
                  {strippedContent(data.meta_description) || ''}
                </Markdown>
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-duration="1200">
              <Markdown>{strippedContent(data.body) || ''}</Markdown>
            </p>

            <div className="stores-wrapper">
              <a
                href={app_store_download_app}
                data-aos="fade-left"
                data-aos-duration="1300"
                target="_blank"
              >
                <img src="images/home/app-store-btn.svg" alt="" />
              </a>
              <a
                href={google_play_store_download_app}
                data-aos="fade-right"
                data-aos-duration="1300"
                target="_blank"
              >
                <img src="images/home/google-play-btn.svg" alt="" />
              </a>
            </div>
            <div className="book-now" data-aos="zoom-in">
              <Link href={`/${locale}/contact-us`}>
                <a className="hvr-grow">{t('book_now')}</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    return 'loading';
  }
}

export default withTranslation('common')(HeroContent);
