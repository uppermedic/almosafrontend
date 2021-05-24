import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SelectBox from 'src/components/layout/SelectBox';
import Event_card from './Event-Card';
import { connect } from 'react-redux';
import { i18n, withTranslation } from 'root/i18n';
import { postData } from 'src/store/Request.js';
import Hero from 'src/components/layout/Hero';

function index({ data, categories, yearsData, banner }) {
  const lang = i18n.language;
  const [dataF, setdataF] = useState([]);
  const [filter, setfilter] = useState(false);
  const [filterData, setfilterData] = useState({
    year: '',
    category: '',
    status: ''
  });

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

  return (
    <section className="events">
      <Hero bg={banner}>
        <div className="heroText">
          <p>
            <span>{(lang == 'en' && 'EVENTS') || 'الفعاليات'}</span>
          </p>
        </div>
      </Hero>
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
              {(lang == 'en' && 'Find Events') || 'البحث عن الأحداث '}
            </button>
          </Col>
        </Row>
        <Row className="pt-5">
          {filter ? (
            dataF && dataF.length > 0 ? (
              dataF.map(card => (
                <Col lg={4} md={6} key={card.id} className="px-sm-5 py-3">
                  <Event_card cardData={card} />
                </Col>
              ))
            ) : (
              <p className="noData">
                {(lang == 'en' && 'No Events Yet') || 'لا توجد أحداث بعد '}
              </p>
            )
          ) : data.data && data.data.length > 0 ? (
            data.data.map(card => (
              <Col lg={4} md={6} key={card.id} className="px-sm-5 py-3">
                <Event_card cardData={card} />
              </Col>
            ))
          ) : (
            <p className="noData">
              {(lang == 'en' && 'No Events Yet') || 'لا توجد أحداث بعد '}
            </p>
          )}
        </Row>
      </Container>
    </section>
  );
}

const mapStateToProps = state => ({
  categories: state.Globals.categories
});

export default connect(mapStateToProps)(index);
