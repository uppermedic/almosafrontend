import React from 'react';
import { useTranslation } from 'next-i18next';
import { truncate, strippedContent, removeSpChar } from 'src/utils/helpers.js';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

function CenterItem({ center }) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');
  return (
    <div className="item caro-card">
      <Link
        href={`/${locale}/services/medical-centers/${
          locale &&
          removeSpChar(String(center[locale]?.title)).split(' ').join('-')
        }/?id=${center?.id}`}
      >
        <a>
          <img src={center.ar.thumbnail} alt="center" />
          <div className="content">
            <h3>
              <Markdown>
                {truncate(
                  strippedContent((locale && center[locale]?.title) || ' '),
                  20,
                  '......'
                )}
              </Markdown>
            </h3>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    truncate(
                      strippedContent(locale && center[locale]?.excerpt),
                      70,
                      '......'
                    ) || ' '
                }}
              />
            </p>
            <Link
              href={`/${locale}/services/medical-centers/${
                locale &&
                removeSpChar(String(center[locale]?.title))
                  .split(' ')
                  .join('-')
              }/?id=${center?.id}`}
            >
              <a className="details_link">{t('read_more')}</a>
            </Link>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default CenterItem;
