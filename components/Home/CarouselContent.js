import React from 'react';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
import {
  app_store_download_app,
  google_play_store_download_app
} from 'src/constants/Data';
import Link from 'next/link';
import { useRouter } from 'next/router';

function CarouselContent({ data, index }) {
  const router = useRouter();
  const { locale } = router;

  if (data) {
    return (
      <div className="container">
        <div className="carosel-content">
          <h2>
            <span>
              <Markdown>
                {(locale && strippedContent(data[locale]?.title)) || ''}
              </Markdown>
            </span>
          </h2>
          <div>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    (locale && strippedContent(data[locale]?.content)) || ''
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
          {locale && data[locale]?.btn_text && (
            <div className="book-now">
              <Link href={data?.btn_link}>
                <a
                  className="hvr-grow"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {locale && data[locale].btn_text}
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

export default CarouselContent
