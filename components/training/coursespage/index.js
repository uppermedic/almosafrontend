import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SelectBox from 'src/components/layout/SelectBox';
import SideTabs from 'components/layout/DynamicRouteTabs';
import CourseCard from './CourseCard';
import { connect } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { postData } from 'src/store/Request.js';
import { dataACademicTabs } from 'utils/datafile';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';
import { useRouter } from 'next/router';

function Index({ data, categories }) {
const { t } = useTranslation('menu');

  const router = useRouter();
  const { locale, query } = router;

  const { page } = query;

  const [dataF, setdataF] = useState([]);
  const [filter, setfilter] = useState(false);
  const [filterData, setfilterData] = useState({
    year: '',
    category: '',
    status: 'online'
  });
  const { last_page } = data;

  const handlePageClick = ({ selected }) => {
    router.push(`/${locale}/training-education/courses/?page=${selected + 1}`);
  };

  const handleChange = (e, name) => {
    const { value } = e.target;
    setfilterData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFilter = () => {
    setfilter(true);
    postData('education/filter/course', filterData)
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
    <section className="courses">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataACademicTabs} index={1} />
          </Col>
          <Col sm="12" md="8">
            <h2 className="title">{t('menu:courses')}</h2>

            <Container>
              <Row className="course-filters mx-2">
                <Col lg={3} md={4} xs={12}>
                  <SelectBox
                    options={yearsData}
                    default_title="all_times"
                    handleChange={e => handleChange(e, 'year')}
                  />
                </Col>
                <Col lg={3} md={4} xs={12}>
                  <SelectBox
                    options={categories}
                    default_title="all_categories"
                    handleChange={e => handleChange(e, 'category')}
                  />
                </Col>
                <Col lg={3} md={4} xs={12}>
                  <SelectBox
                    options={[
                      {
                        id: 'online',
                        ar: {
                          title: 'عبر الانترنت'
                        },
                        en: {
                          title: 'Online'
                        }
                      },
                      {
                        id: 'offline',
                        ar: {
                          title: 'غير متصل بالانترنت'
                        },
                        en: {
                          title: 'Offline'
                        }
                      }
                    ]}
                    handleChange={e => handleChange(e, 'status')}
                    withoutAll={true}
                  />
                </Col>
                <Col lg={3} md={4} xs={12}>
                  <button onClick={handleFilter}>
                    {(locale == 'en' && 'Find Course') || 'البحث عن دورة '}
                  </button>
                </Col>
              </Row>
              <Row className="pt-5 mx-2">
                {filter ? (
                  dataF && dataF.length > 0 ? (
                    dataF.map(card => (
                      <Col lg={4} sm={6} className="py-3 ">
                        <CourseCard key={card.id} cardData={card} />
                      </Col>
                    ))
                  ) : (
                    <p className="noData">
                      {(locale == 'en' && 'No Courses Yet') ||
                        'لا توجد دورات بعد '}
                    </p>
                  )
                ) : data?.data?.length > 0 ? (
                  data.data.map(card => (
                    <Col lg={4} sm={6} className="py-3 ">
                      <CourseCard key={card.id} cardData={card} />
                    </Col>
                  ))
                ) : (
                  <p className="noData">
                    {(locale == 'en' && 'No Courses Yet') ||
                      'لا توجد دورات بعد '}
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
