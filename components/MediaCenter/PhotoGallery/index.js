import React, { useState } from 'react';
import Taps from './Taps';
import { Link, withTranslation, i18n } from 'root/i18n';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import ImageViewer from 'components/layout/ImgsViewerSlider';
import { Container, Row, Col } from 'reactstrap';

const dataTap = ['All', 'North tower', 'Eye Center'];

const index = ({ data, t, categories, handleSelectTap, tapId }) => {
  const [isOpen, setisOpen] = useState(false);
  const [imageIndex, setimageIndex] = useState(0);

  /* open image slider */
  const openImgsViewer = index => {
    setimageIndex(index);
    setisOpen(true);
  };

  /* close image slider */
  const closeImgsViewer = () => {
    setisOpen(false);
  };

  return (
    <sectio className="gallery">
      <Container className="pb-5">
        <Row>
          <Col className="pt-5">
            <h2>{t('menu:photo gallery')}</h2>
          </Col>
        </Row>
        <Row className="categories">
          <Col>
            <ul className="list-unstyled">
              <li className="tap mx-1" onClick={() => handleSelectTap('all')}>
                <a className={tapId === 'all' ? 'active' : ''}>
                  {t('menu:all')}
                </a>
              </li>
              {categories.map((tap, index) => (
                <Taps
                  tap={tap}
                  tapId={tapId}
                  key={index}
                  handleClick={() => handleSelectTap(tap.id)}
                />
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="position-relative">
          {data.map((photo, index) => (
            <Col md={6} lg={4} key={index} className="py-3 text-center">
              <div href="#!" className="wrapper position-relative">
                <img
                  className="shadow"
                  src={photo}
                  style={{ width: '100%' }}
                  alt="gallery image"
                />
                <div
                  className="overlay"
                  // onClick={() => openImgsViewer(index)}
                ></div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <ImageViewer
              open={isOpen}
              handleClose={closeImgsViewer}
              imageIndex={imageIndex}
              images={data}
            />
          </Col>
        </Row>
      </Container>
    </sectio>
  );
};

const mapStateToProps = state => ({
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

export default withTranslation(['common', 'menu'])(
  connect(mapStateToProps)(index)
);
