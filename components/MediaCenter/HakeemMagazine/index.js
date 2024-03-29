import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Item from './Item';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';

const Index = ({ data }) => {
  const { t } = useTranslation(['common','menu']);

  const router = useRouter();
  const { locale } = router;
  const { page } = router?.query;

  const { last_page } = data;
  const handlePageClick = ({ selected }) => {
    router.push(
      `/${locale}/media-center/hakeem-magazine/?page=${selected + 1}`
    );
  };
  return (
    <section className="content-wrapper">
      <Container>
        <Row className="headingSection pb-2 mx-2">
          <Col lg={6} className="px-1">
            <span>{t('menu:hakeem_magazine')}</span>
          </Col>
        </Row>
        <Row className="mx-1">
          {data.data.map((item, index) => (
            <Col className="px-4" md={6} lg={4} key={index}>
              <Item item={item} />
            </Col>
          ))}

          <Col xs={12} className="d-flex justify-content-center mt-4">
            <ReactPaginate
              nextLabel={<NextFC />}
              previousLabel={<PrevFC />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              // initialPage={0}
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
      </Container>
    </section>
  );
};
export default Index;
