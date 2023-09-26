import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import ClassNames from 'classnames';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Article from './Article';
import { useRouter } from 'next/router';

const Index = ({ article, categories, related }) => {
  const { t } = useTranslation('common');

  const [controllerOpen, setControllerOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;

  let contentWithLang = article[locale];

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
                    placeholder={t('search_medical-articles')}
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="categories">
              <h4>{t('categories')}:</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href={`/${locale}/media-center/medical-articles`}>
                    <a>{t('all')}</a>
                  </Link>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <Link
                      href={`/${locale}/media-center/filter-results/?cats=${cat[locale].category_name}`}
                    >
                      <a>{cat[locale].category_name}</a>
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

export default Index;
