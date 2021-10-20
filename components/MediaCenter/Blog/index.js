import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { i18n, Link, withTranslation } from 'root/i18n';
import ClassNames from 'classnames';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { strippedContent, truncate } from 'src/utils/helpers';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';

import PostCard from './PostCard';

const Index = ({ data, latest, tags, categories, t }) => {
  const router = useRouter();
  const [controllerOpen, setControllerOpen] = useState(false);
  const { last_page } = data;
  const [locale, setlocale] = useState('');
  const { language } = i18n;
  useEffect(() => {
    setlocale(language);
  }, [language]);

  const handlePageClick = ({ selected }) => {
    router.push(`?page=${selected + 1}`);
  };
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2 className="d-flex d-lg-blog justify-content-between align-items-center">
              {t('menu:blog')}{' '}
              <i
                className="fas fa-cogs d-lg-none"
                onClick={() => setControllerOpen(!controllerOpen)}
              ></i>
            </h2>
          </Col>
        </Row>
        <Row className="inner-content justify-content-between">
          <Col xs={12} lg={6}>
            <Row className="m-0 p-0">
              {data.data.map((article, idx) => (
                <Col xs={12} key={article.id} className="border-bottom mb-3">
                  <PostCard article={article} />
                </Col>
              ))}
            </Row>
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
                  // activeClassName={'active'}
                />
              </Col>
            </Row>
          </Col>
          <Col
            lg={5}
            className={ClassNames('controller', { open: controllerOpen })}
          >
            <div className="search">
              <Form action="/media-center/blog/search-result?">
                <FormGroup>
                  <Label for="exampleSearch">{t('new_search')}</Label>
                  <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder={t('search_blog')}
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="categories">
              <h4>{t('categories')}:</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href={`/${locale}/media-center/blog`}>
                    <a>{t('all')}</a>
                  </Link>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <Link
                      href={`/${locale}/media-center/blog?cats=${cat.slug}`}
                    >
                      <a>{cat[i18n.language].category_name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/*
             **  Popular Posts
             */}
            <div className="popular-posts">
              <h4>{t('popular_posts')}:</h4>
              <ul className="list-unstyled">
                {latest.map((post, idx) => (
                  <li key={String(post.id)}>
                    <Link
                      href={`/${locale}/media-center/blog/post/${String(
                        i18n.language ? post[i18n.language]?.title : ''
                      )
                        .split(' ')
                        .join('-')}?id=${post.id}`}
                    >
                      <a>
                        <img src={post.image} />
                        <div>
                          <h5>
                            {post[i18n.language]
                              ? truncate(post[i18n.language]?.title, 30, '...')
                              : ''}{' '}
                          </h5>
                          <p>
                            {post[i18n.language]
                              ? truncate(
                                  strippedContent(post[i18n.language].content),
                                  100,
                                  '...'
                                )
                              : ''}
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/*
             **  tags
             */}
            <div className="tags">
              <h4>{t('tags')}:</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href={`/${locale}/media-center/blog`}>
                    <a>{t('all')}</a>
                  </Link>
                </li>
                {tags.map(tag => (
                  <li key={tag.id}>
                    <Link
                      href={`/${locale}/media-center/blog?tags=${tag.tag_name}`}
                    >
                      <a>{tag.tag_name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
Index.getInitialProps = async context => ({
  namespacesRequired: ['common', 'menu', 'blog']
});
export default withTranslation('common')(Index);
