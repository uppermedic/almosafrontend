import { useState } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import ClassNames from 'classnames';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Article from './Article';

const Index = ({ article, categories, tags, t }) => {
  const [controllerOpen, setControllerOpen] = useState(false);
  let contentWithLang = article[i18n.language];
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2 className="d-flex d-lg-blog justify-content-between align-items-center">
              {contentWithLang?.title}
              <i
                className="fas fa-cogs d-lg-none"
                onClick={() => setControllerOpen(!controllerOpen)}
              ></i>
            </h2>
          </Col>
        </Row>
        <Row className="inner-content justify-content-between">
          <Col xs={12} lg={6}>
            <Article article={contentWithLang} originalArticle={article} />
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
                  <Link href={`/media-center/blog`}>
                    <a>{t('all')}</a>
                  </Link>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <Link href={`/media-center/blog?cats=${cat.slug}`}>
                      <a>{cat[i18n.language].category_name}</a>
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
