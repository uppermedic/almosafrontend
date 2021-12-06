import { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import ClassNames from 'classnames';
import { withRouter } from 'next/router';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import ResultPost from './ResultPost';
const data = [
  {
    id: 1,
    title: 'Power of Art Initiative',
    bg: '/images/community/power-of-art.png',
    ribbon_class: 'green',
    url: '/community/for-patients'
  }
];

const Index = ({ data, router, t }) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    setSearch(router.query.search);
    return () => {};
  }, [router?.query?.search]);
  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2>{t('search_results')}</h2>
          </Col>
        </Row>
        <Row className="inner-content">
          <Col xs={12}>
            <div className="search">
              <Form action="/media-center/news/search-result?">
                <FormGroup
                  row
                  className="m-0 p-0 justify-content-between align-items-center"
                >
                  <Label for="exampleSearch">{t('new_search')}</Label>
                  <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder={t('search_news')}
                    value={search}
                    onChange={({ target: { value } }) => setSearch(value)}
                  />
                </FormGroup>
              </Form>
            </div>
          </Col>
          <Col className="border-bottom mb-3">
            {data.data.length === 0 ? (
              <p>{t('no_results')}</p>
            ) : (
              data.data.map(article => <ResultPost article={article} />)
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
Index.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(withRouter(Index));
