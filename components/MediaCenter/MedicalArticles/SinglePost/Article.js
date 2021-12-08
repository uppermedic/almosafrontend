import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { withTranslation, i18n, Link } from 'root/i18n';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function Article({ article, originalArticle, related, t }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <Row>
      <Col xs={12} className="mt-2 mb-5">
        <img
          className="thumbnail shadow-lg rounded"
          src={originalArticle?.image}
          alt="single medical artical"
        />
      </Col>
      <Col xs={12} className="post-content">
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: article?.content
            }}
          />
        </p>
      </Col>
      <Col xs={12}>
        <div className="related-links my-5">
          <h5>
            <strong>{t('read_more')} : -</strong>
          </h5>
          <ul>
            {related?.length > 0 &&
              related.map((relLink, idx) => (
                <li className="py-2" key={idx}>
                  {language === 'en' ? (
                    <IoIosArrowForward />
                  ) : (
                    <IoIosArrowBack />
                  )}
                  <Link
                    href={`/${locale}/media-center/medical-articles/post/${String(
                      relLink[language]?.title
                    )
                      .split(' ')
                      .join('-')}/?id=${relLink?.id}`}
                  >
                    <a>{relLink[language]?.title + ' . '}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
}

Article.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(Article);
