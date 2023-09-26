import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SelectBox from 'src/components/layout/SelectBox';
import SideTabs from 'components/layout/DynamicRouteTabs';
import Event_card from './Event-Card';
import { connect } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { postData } from 'src/store/Request.js';
import { dataACademicTabs } from 'utils/datafile';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';
import { useRouter } from 'next/router';

function Index({ data, categories}) {
const { t } = useTranslation('menu');

  const router = useRouter();
  const { locale, query } = router;
  const { page } = query;

  const [dataF, setdataF] = useState([]);
  const [filter, setfilter] = useState(false);
  const [filterData, setfilterData] = useState({
    year: '',
    category: '',
    status: ''
  });

  const { last_page } = data;
  const handlePageClick = ({ selected }) => {
    router.push(`/${locale}/training-education/events/?page=${selected + 1}`);
  };

  const handleChange = (e, name) => {
    const { value } = e.target;
    setfilterData(prevState => ({ ...prevState, [name]: value }));
  };
  const handleFilter = () => {
    setfilter(true);
    postData('education/filter/event', filterData)
      .then(({ data }) => {
        setdataF(data.data);
      })
      .catch(error => console.log('error', error));
  };

  const YEARS = () => {
    const years = [];
    const dateStart = moment().add(4, 'y');
    const dateEnd = moment();
    while (dateStart.diff(dateEnd, 'years') >= 0) {
      years.push(dateEnd.format('YYYY') - 4);
      dateEnd.add(1, 'year');
    }
    return years;
  };

  const yearsData = YEARS()
    .reverse()
    .map((year, index) => {
      return {
        id: year,
        ar: { name: year },
        en: { name: year }
      };
    });

  return (
    <section className="events">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataACademicTabs} index={0} />
          </Col>
          <Col sm="12" md="8">
            <h2 className="title">{t('menu:events')}</h2>
            <Container>
              <Row className="event-filters mx-1">
                <Col md={4} xs={12}>
                  <SelectBox
                    options={yearsData}
                    default_title="all_times"
                    handleChange={e => handleChange(e, 'year')}
                  />
                </Col>
                <Col md={4} xs={12}>
                  <SelectBox
                    // Obtions is array of arrays, first item is value of user, second for backend
                    options={categories}
                    default_title="all_categories"
                    handleChange={e => handleChange(e, 'category')}
                  />
                </Col>
                <Col md={4} lg={{ size: 3, offset: 1 }} xs={12}>
                  <button onClick={handleFilter}>
                    {(locale == 'en' && 'Find Events') || 'البحث عن الأحداث '}
                  </button>
                </Col>
              </Row>
              <Row className="pt-5 mx-2">
                {filter ? (
                  dataF && dataF.length > 0 ? (
                    dataF.map(card => (
                      <Col lg={4} sm={6} key={card.id} className="py-3">
                        <Event_card cardData={card} />
                      </Col>
                    ))
                  ) : (
                    <p className="noData">
                      {(locale == 'en' && 'No Events Yet') ||
                        'لا توجد أحداث بعد '}
                    </p>
                  )
                ) : data?.data?.length > 0 ? (
                  data.data.map(card => (
                    <Col lg={4} sm={6} key={card.id} className="py-3">
                      <Event_card cardData={card} />
                    </Col>
                  ))
                ) : (
                  <p className="noData">
                    {(locale == 'en' && 'No Events Yet') ||
                      'لا توجد أحداث بعد '}
                  </p>
                )}
              </Row>
              {data?.data?.length > 0 && (
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
          </Col>
        </Row>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  categories: state.Globals.categories
});
export default connect(mapStateToProps)(Index);
