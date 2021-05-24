import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import {  } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ data, customClass, t }) => {
  const { language } = i18n;
  const {
    welcome_title,
    welcome_msg,
    contact_us: { location, location_url, contact_phone, contact_email },
    facebook_url,
    instagram_url,
    twitter_url,
    linkedin_url,
    youtube_url
  } = data;
  return (
    <div
      className={`footer-top ${customClass}`}
      style={{ backgroundImage: 'url(/images/home/footer-bg.png)' }}
    >
      <Container>
        <Row className="justify-content-center justify-content-sm-start">
          <Col lg={{ size: 4 }}>
            <div className="intro">
              <h2>{welcome_title[language]}</h2>
              <p>{language ? strippedContent(welcome_msg[language]) : ''}</p>
              <div className="social d-block d-lg-flex">
                <Link href={facebook_url}>
                  <a target="_blank" className="fb">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </Link>
                <Link href={twitter_url}>
                  <a target="_blank" className="twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                </Link>
                <Link href={instagram_url}>
                  <a target="_blank" className="insta">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </a>
                </Link>
                <Link href={youtube_url}>
                  <a target="_blank" className="youtube">
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                  </a>
                </Link>
                <Link href={linkedin_url}>
                  <a target="_blank" className="in">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={2} className="offset-lg-1">
            <div className="links">
              <h3>{t('footer:useful_links')}</h3>
              <div className="d-flex flex-column">
                <Link href="/contact-us">
                  <a>{t('footer:contact_page')}</a>
                </Link>
                <Link href="#!">
                  <a>{t('footer:download_app')}</a>
                </Link>
                <Link href={location_url}>
                  <a target="_blank">{t('footer:our_location')}</a>
                </Link>
                {/* <Link href="#!">
                  <a>Training & Education</a>
                </Link>
                <Link href="/community">
                  <a>Community services</a>
                </Link> */}
                {/* <Link href="/blog">
                  <a className="btn-blog">Blog</a>
                </Link> */}
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="links mt-4 mt-lg-0">
              <h3>{t('footer:contact_info')}</h3>
              <div className="d-flex flex-column ">
                <Link href={location_url}>
                  <a target="_blank">
                    <i className="fas fa-map-marker-alt mr-1"></i>{' '}
                    {location[language]}
                  </a>
                </Link>
                <a target="_blank" href={`tel:${contact_phone}`}>
                  <i className="fas fa-phone-alt mr-1"></i> {contact_phone}
                </a>
                <a target="_blank" href={`mailto:${contact_email}`}>
                  <i className="fas fa-envelope mr-1"></i> {contact_email}
                </a>
              </div>
            </div>
          </Col>
          <Col
            xs={10}
            sm={6}
            lg={2}
            className="d-md-none d-lg-block mt-4 mt-lg-0"
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={String(twitter_url).split('/').pop()}
              options={{ height: 300 }}
            />
            {/* <div>
              <img src="/images/home/twitterpage.png" />
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
Footer.getInitialProps = async context => ({
  namespacesRequired: ['common', 'footer']
});

export default withTranslation('common')(Footer);
