import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { toggleMediaPlayer as toggleMediaPlayerAction } from 'src/store/actions';
import { Container, Row, Col } from 'reactstrap';
import SelectBox from 'src/components/layout/SelectBox';
import { i18n, withTranslation } from 'root/i18n';
import ReactPlayer from 'react-player';
import { truncate } from 'src/utils/helpers';

const index = ({
  data,
  toggleMediaPlayer,
  t,
  categories,
  handleSelectChange
}) => {
  const router = useRouter();
  const lang = i18n.language;
  const [showAll, setShowAll] = useState(false);
  const openVideoPlayer = video => {
    toggleMediaPlayer(true, video.url, lang && video[lang].title);
  };

  return (
    <sectio className="gallery">
      <div className="main-vid">
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/L0Vz6-iHoFo" // need the main video url
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        <ReactPlayer
          url="https://www.youtube.com/embed/L0Vz6-iHoFo"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      <Container className="pb-5 pt-5">
        <h2>{t('menu:video gallery')}</h2>
        <Row className="filters pt-5">
          {/* <Col xl={1} md={2} sm={3}>
            <span>Show</span>
          </Col>
          <Col xl={3} md={4} sm={9}>
            <SelectBox
              options={[
                ['3', '3'],
                ['6', '6'],
                ['9', '9'],
                ['12', '12'],
                ['15', '15'],
                ['ALL', 'all']
              ]}
            />
          </Col>
          <Col xl={1} md={2} sm={3}>
            <span>Date</span>
          </Col>
          <Col xl={3} md={4} sm={9}>
            <SelectBox
              options={[
                ['2020', '2020'],
                [('2017 - 2019', '2017-2019')],
                ['2014 - 2016', '2014-2016'],
                ['2011 - 2013', '2011-2013'],
                ['2008 - 2010', '2008-2010'],
                ['ALL', 'all']
              ]}
            />
          </Col> */}
          <Col xl={1} md={2} sm={3}>
            <span>{t('playlist')}</span>
          </Col>
          <Col xl={3} md={4} sm={9}>
            <SelectBox
              options={categories}
              default_title="all_categories"
              handleChange={handleSelectChange}
            />
          </Col>
        </Row>
        <Row className="video-row">
          {data.data.map((video, index) => {
            return (
              <Col md={6} lg={4} key={index} className="text-center">
                <div className="video">
                  <img src={video.image} alt="" className="thumbnail" />
                  <div
                    className="overlay"
                    onClick={() => openVideoPlayer(video)}
                  >
                    <i className="fas fa-play-circle"></i>
                  </div>
                  {/* <iframe
                    width="100%"
                    height="100%"
                    src={video.url}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe> */}
                </div>
                <h3>
                  {lang &&
                    video[lang].title &&
                    truncate(video[lang].title, 40, '...')}
                </h3>
              </Col>
            );
          })}
        </Row>
      </Container>
    </sectio>
  );
};

const mapStateToProps = state => ({
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

const mapDispatchToProps = {
  toggleMediaPlayer: toggleMediaPlayerAction
};

export default withTranslation(['common', 'menu'])(
  connect(mapStateToProps, mapDispatchToProps)(index)
);
