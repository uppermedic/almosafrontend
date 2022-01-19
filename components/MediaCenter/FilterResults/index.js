import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { i18n, Link, withTranslation } from 'root/i18n';
import ClassNames from 'classnames';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { strippedContent, truncate } from 'src/utils/helpers';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';

import ResultPost from './ResultPost';

const Index = ({ data, latest, tags, categories, t }) => {
  const router = useRouter();
  const { page, cats, tag } = router?.query;
  const [controllerOpen, setControllerOpen] = useState(false);
  const { last_page } = data;
  const [locale, setlocale] = useState('');
  const { language } = i18n;
  useEffect(() => {
    setlocale(language);
  }, [language]);

  const handlePageClick = ({ selected }) => {
    router.push(`/${locale}/media-center/news/?page=${selected + 1}`);
  };
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2 className="d-flex d-lg-news justify-content-between align-items-center">
              {tag
                ? t('results_tag') + ' : ' + tag
                : cats
                ? t('results_cat') + ' : ' + cats
                : ''}
              {/* <i
                className="fas fa-cogs d-lg-none"
                onClick={() => setControllerOpen(!controllerOpen)}
              ></i> */}
            </h2>
          </Col>
        </Row>
        <Row className="inner-content justify-content-between">
          {/* <Col
            xs={12}
            className={ClassNames('controller', { open: controllerOpen })}
          >
            <div className="categories">
              <h4>{t('categories')}:</h4>
              <ul className="list-unstyled">
                {categories?.length > 0 ? (
                  <>
                    <li>
                      <Link href={`/${locale}/media-center/news`}>
                        <a>{t('all')}</a>
                      </Link>
                    </li>

                    {categories.map(cat => (
                      <li key={cat.id}>
                        <Link
                          href={`/${locale}/media-center/news/?cats=${cat.slug}`}
                        >
                          <a>{cat[language].category_name}</a>
                        </Link>
                      </li>
                    ))}
                  </>
                ) : (
                  <li>{t('no_results')}</li>
                )}
              </ul>
            </div>
            
            <div className="tags">
              <h4>{t('tags')}:</h4>
              <ul className="list-unstyled">
                {tags?.length > 0 ? (
                  <>
                    <li>
                      <Link href={`/${locale}/media-center/news`}>
                        <a>{t('all')}</a>
                      </Link>
                    </li>
                    {tags?.map(tag => (
                      <li key={tag.id}>
                        <Link
                          href={`/${locale}/media-center/news/?tags=${tag?.tag_name}`}
                        >
                          <a>{tag.tag_name}</a>
                        </Link>
                      </li>
                    ))}
                  </>
                ) : (
                  <li>{t('no_results')}</li>
                )}
              </ul>
            </div>
          </Col> */}
          <Col xs={12}>
            <Row className="m-0 p-0">
              {data?.data?.length > 0 ? (
                data.data.map(article => (
                  <Col xs={12} key={article.id} className="border-bottom mb-3">
                    <ResultPost article={article} />
                  </Col>
                ))
              ) : (
                <Col xs={12}>
                  <h4 className="text-center py-5">{t('no_results')}</h4>
                </Col>
              )}
            </Row>
            {data.data.length > 0 && (
              <Row>
                <Col xs={12} className="d-flex justify-content-center mb-4">
                  <ReactPaginate
                    nextLabel={<NextFC />}
                    previousLabel={<PrevFC />}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={last_page}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    forcePage={(page ? page : 1) - 1}
                  />
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
Index.getInitialProps = async context => ({
  namespacesRequired: ['common', 'menu', 'news']
});
export default withTranslation('common')(Index);
