import { useState, useEffect } from 'react';
import {useTranslation } from 'next-i18next';
import { withRouter } from 'next/router';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';

import ResultPost from './ResultPost';

const Index = ({ data, router}) => {
const { t } = useTranslation('common');

  const { last_page } = data;
  const { locale,query } = router;

  const [search, setSearch] = useState('');
  const { page } = router?.query;

  useEffect(() => {
    setSearch(query.search);
    return () => {};
  }, [router?.query?.search]);

  const handlePageClick = ({ selected }) => {
    router.push(
      `/${locale}/search-result/?search=${search}&page=${selected + 1}`
    );
  };

  return (
    <section className="content-wrapper">
      <Container>
        <Row>
          <Col>
            <h2>{t('search_result')}</h2>
          </Col>
        </Row>
        <Row className="inner-content">
          <Col xs={12}>
            <div className="search">
              <Form action="/search-result?">
                <FormGroup
                  row
                  className="m-0 p-0 justify-content-between align-items-center"
                >
                  <Label for="exampleSearch">
                    <h4>{t('new_search')}</h4>
                  </Label>
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
            {Object.values(data?.data).length > 0 ? (
              Object.values(data?.data)?.map(article => (
                <ResultPost article={article} />
              ))
            ) : (
              <h4 className="text-center py-5">{t('no_results')}</h4>
            )}
          </Col>
        </Row>
        {Object.values(data?.data).length > 0 && (
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
      </Container>
    </section>
  );
};
export default (withRouter(Index));
