import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Slider from 'react-slick';
import { Container, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';
import { useRouter } from 'next/router';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ ...style }}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L9.293 8 3.646 2.354a.5.5 0 010-.708z"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M7.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L13.293 8 7.646 2.354a.5.5 0 010-.708z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8.354 1.646a.5.5 0 010 .708L2.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M12.354 1.646a.5.5 0 010 .708L6.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

function Index({histories }) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('menu');

  const [activeTab, setActiveTab] = useState({});
  const [data, setData] = useState([]);
  const [transform, setTransform] = useState(0);
  const [slideDir, setslideDir] = useState(-1);

  const toggle = tab => {
    if (String(activeTab.head) !== String(tab.head)) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    if (locale == 'en') {
      setslideDir(1);
    } else if (locale == 'ar') {
      setslideDir(-1);
    }
  }, [locale]);

  useEffect(() => {
    setData(Array.isArray(histories) ? histories.reverse() : []);
    setActiveTab(
      Array.isArray(histories) ? histories[histories.length - 1] : {}
    );
    return () => {};
  }, [histories]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setTransform(0);
    };
  }, []);

  const handleScroll = event => {
    let scrollTop = window.scrollY;
    setTransform(scrollTop);
  };

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: data.length >= 6 ? 6 : data.length,
    slidesToScroll: slideDir,
    autoplay: false,
    autoplaySpeed: 2000,
    rtl: true,
    className:
      transform > 750
        ? 'nav nav-tabs slick-timline-text-tabs slick-slider-fixed'
        : 'nav nav-tabs slick-timline-text-tabs ',
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: slideDir,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: slideDir,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: slideDir,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      }
    ]
  };

  return (
    <section className="content-wrapper">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={5} />
          </Col>
          <Col sm="12" md="8">
            <Row className="mb-3">
              <Col>
                <h2>{t('menu:history')}</h2>
              </Col>
            </Row>
            <Container>
              <Slider {...settings}>
                {data.map((tab, idx) => (
                  <span
                    className={classnames('item', {
                      active: String(activeTab.head) === String(tab.head)
                    })}
                    onClick={() => {
                      toggle(tab);
                    }}
                    key={idx}
                  >
                    {tab.head}
                  </span>
                ))}
              </Slider>
              <TabContent activeTab={String(activeTab?.head)}>
                <Row className="history__header_wrapper">
                  <Col>
                    <h3 className="history__title">
                      {locale && activeTab[locale]?.title}
                    </h3>
                    <p>
                      <div
                        className="description intro"
                        dangerouslySetInnerHTML={{
                          __html: locale && activeTab[locale]?.description
                        }}
                      />
                    </p>
                  </Col>
                </Row>
                {activeTab.histories?.map((single, idx) => (
                  <TabPane
                    tabId={String(activeTab.head)}
                    key={String(idx)}
                    className="history__item"
                  >
                    <Row className="inner_wrapper">
                      <Col xs={12} md={5}>
                        <div className="content">
                          <h4 className="title">{single.year}</h4>
                          <p>
                            <div
                              className="description"
                              dangerouslySetInnerHTML={{
                                __html: locale && single[locale]?.content
                              }}
                            />
                          </p>
                        </div>
                      </Col>
                      <Col xs={12} md={7}>
                        <div className="image-wrapper">
                          <figure>
                            <img src={single.image} alt="our history" />
                          </figure>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                  </TabPane>
                ))}
              </TabContent>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
}
export default Index;
