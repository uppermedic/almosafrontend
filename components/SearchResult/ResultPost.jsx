import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { strippedContent, truncate, removeSpChar } from 'src/utils/helpers';
import { useRouter } from 'next/router';

function Post({ article}) {
const { t } = useTranslation('common');

  const { id, image, created_at, type } = article;
  const router = useRouter();
  const { locale } = router;

  const { title, slug, content } = locale ? article[locale] : {};

  const [urlResult, seturlResult] = useState('');


  useEffect(() => {
    /*
    supportive-services
    inpatient-units
    medical-centers
    medical-programs
    doctor
    blog
    medical-article
    EVENT
    COURSE
     */
    switch (type) {
      case 'supportive-services':
        seturlResult(`/${locale}/services/supportive-services/?id=${id}`);
        break;

      case 'inpatient-units':
        seturlResult(`/${locale}/services/inpatient-units/?id=${id}`);
        break;
      case 'medical-centers':
        seturlResult(
          `/${locale}/services/medical-centers/${removeSpChar(String(title))
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'medical-programs':
        seturlResult(
          `/${locale}/services/medical-programs/${removeSpChar(String(title))
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'doctor':
        seturlResult(
          `/${locale}/our-doctors/${removeSpChar(String(title))
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;

      case 'blog':
        seturlResult(
          `/${locale}/media-center/news/post/${removeSpChar(String(title))
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'medical-article':
        seturlResult(
          `/${locale}/media-center/medical-articles/post/${removeSpChar(
            String(title)
          )
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'EVENT':
        seturlResult(
          `/${locale}/training-education/events/${removeSpChar(String(title))
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'COURSE':
        seturlResult(
          `/${locale}/training-education/courses/${removeSpChar(String(title))
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;

      default:
        break;
    }
  }, [article, locale]);

  return (
    <div className="post-card my-4 border-bottom pb-4">
      <Row className="">
        <Col lg={3}>
          <img src={image} alt="search result" />
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0 offset-lg-1">
          <div className="title-wrapper">
            <h6 className="title">{title}</h6>
            <div>
              <span>{created_at}</span>
            </div>
          </div>

          <div className="description">
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                    ? truncate(strippedContent(content), 200, '...')
                    : ''
                }}
              />
            </p>
            <Link href={urlResult}>
              <a>{t('read_more')}</a>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Post;
