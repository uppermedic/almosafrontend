import React, { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import ClassNames from 'classnames';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Article from './Article';

const Index = ({ article, categories, related, t }) => {
  const [controllerOpen, setControllerOpen] = useState(false);
  const { language } = i18n;
  let contentWithLang = article[language];
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2 className="d-flex d-lg-news justify-content-between align-items-center">
              {contentWithLang?.title}
              <i
                className="fas fa-cogs d-lg-none"
                onClick={() => setControllerOpen(!controllerOpen)}
              ></i>
            </h2>
          </Col>
        </Row>
        <Row className="inner-content justify-content-between">
          <Col xs={12} md={7} xl={8}>
            <Article
              article={contentWithLang}
              originalArticle={article}
              related={related}
            />
          </Col>
          <Col
            md={5}
            xl={4}
            className={ClassNames('controller', { open: controllerOpen })}
          >
            <div className="search">
              <Form action="/search-result?">
                <FormGroup>
                  <Label for="exampleSearch">{t('new_search')}</Label>
                  <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder={t('search_news')}
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="categories">
              <h4>{t('categories')}:</h4>
              <ul className="list-unstyled">
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
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Index.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(Index);
