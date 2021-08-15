import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SelectBox from 'src/components/layout/SelectBox';
import SideTabs from 'components/layout/DynamicRouteTabs';
import CourseCard from './CourseCard';
import { connect } from 'react-redux';
import { i18n, withTranslation } from 'root/i18n';
import { postData } from 'src/store/Request.js';
import Hero from 'src/components/layout/Hero';
import { dataACademicTabs } from 'utils/datafile';
import moment from 'moment';

function index({ data, categories, t }) {
  const lang = i18n.language;
  const [dataF, setdataF] = useState([]);
  const [filter, setfilter] = useState(false);
  const [filterData, setfilterData] = useState({
    year: '',
    category: '',
    status: 'online'
  });

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
                    {(lang == 'en' && 'Find Course') || 'البحث عن دورة '}
                  </button>
                </Col>
              </Row>
              <Row className="pt-5 mx-2">
                {filter ? (
                  dataF && dataF.length > 0 ? (
                    dataF.map(card => (
                      <Col xl={3} lg={4} sm={6} className="py-3 ">
                        <CourseCard key={card.id} cardData={card} />
                      </Col>
                    ))
                  ) : (
                    <p className="noData">
                      {(lang == 'en' && 'No Courses Yet') ||
                        'لا توجد دورات بعد '}
                    </p>
                  )
                ) : data.data && data.data.length > 0 ? (
                  data.data.map(card => (
                    <Col xl={3} lg={4} sm={6} className="py-3 ">
                      <CourseCard key={card.id} cardData={card} />
                    </Col>
                  ))
                ) : (
                  <p className="noData">
                    {(lang == 'en' && 'No Courses Yet') || 'لا توجد دورات بعد '}
                  </p>
                )}
                {/* {
            // test data
            dataM.map(card => (
              <Col xl={3} lg={4} sm={6} className="py-5 ">
                <CourseCard key={card.id} cardData={card} />
              </Col>
            ))
          } */}
              </Row>
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

export default withTranslation('menu')(connect(mapStateToProps)(index));
