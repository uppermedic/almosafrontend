import React, { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { Row, Col } from 'reactstrap';
import { strippedContent, truncate } from 'src/utils/helpers';

function Post({ article, t }) {
  const { id, image, created_at, type } = article;
  const { language } = i18n;
  const { title, slug, content } = language ? article[language] : {};

  const [locale, setlocale] = useState('');
  const [urlResult, seturlResult] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

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
        seturlResult(
          `/${locale}/services/inpatient-units/${String(title)
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'medical-centers':
        seturlResult(
          `/${locale}/services/medical-centers/${String(title)
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'medical-programs':
        seturlResult(
          `/${locale}/services/medical-programs/${String(title)
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'doctor':
        seturlResult(
          `/${locale}/our-doctors/${String(title)
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;

      case 'blog':
        seturlResult(
          `/${locale}/media-center/news/post/${String(title)
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'medical-article':
        seturlResult(
          `/${locale}/media-center/medical-articles/post/${String(title)
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'EVENT':
        seturlResult(
          `/${locale}/training-education/events/${String(title)
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;
      case 'COURSE':
        seturlResult(
          `/${locale}/training-education/courses/${String(title)
            .split(' ')
            .join('-')}/?id=${id}`
        );
        break;

      default:
        break;
    }
  }, [article, language]);

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

Post.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(Post);
