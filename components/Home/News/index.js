import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import dynamic from 'next/dynamic';
import NewsItem from './NewsItem';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

function News({ data}) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  return (
    <section className="home-news">
      <div className="overlay-news">
        <img src="/images/home/zigzag.png" alt="news section" />
      </div>
      <div className="news-container">
        <Container>
          <Row>
            <Col>
              <h3 className="section-title-news">
                {locale == 'en' ? 'News' : 'المدونات'}
              </h3>
            </Col>
          </Row>
          <Row style={{ marginTop: 44 }}>
            <Col>
              <OwlCarousel
                className="owl-carousel owl-theme owl-loaded"
                margin={50}
                loop={true}
                autoplay={true}
                autoplayTimeout={5000}
                autoplayHoverPause={true}
                responsiveClass={true}
                dots={false}
                responsive={{
                  0: {
                    items: 1,
                    nav: true,
                    center: true,
                    loop: true,
                    margin: 10
                  },
                  550: {
                    items: 2,
                    nav: false,
                    margin: 10
                  },
                  950: {
                    items: 2,
                    nav: false,
                    center: true,
                    margin: 10
                  },
                  1000: {
                    items: 3,
                    nav: false,
                    center: true,
                    margin: 10
                  },
                  1200: {
                    items: 4,
                    nav: true,
                    loop: false,
                    margin: 10
                  }
                }}
              >
                {data.map((item, index) => (
                  <NewsItem news={item} key={index} />
                ))}
              </OwlCarousel>
              <Link href={`/${locale}/media-center/news`}>
                <a className="show_more_news">{t('show_more')}</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default News;
