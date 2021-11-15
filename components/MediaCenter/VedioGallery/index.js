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
                  <img src={video.image} alt="video" className="thumbnail" />
                  <div
                    className="overlay"
                    onClick={() => openVideoPlayer(video)}
                  >
                    <i className="fas fa-play-circle" />
                  </div>
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
