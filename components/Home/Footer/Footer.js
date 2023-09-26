import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { strippedContent } from 'src/utils/helpers.js';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
  google_play_store_download_app
} from 'src/constants/Data';
import { useRouter } from 'next/router';

const Footer = ({ data, customClass}) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation(['common','footer']);


  const {
    welcome_title,
    welcome_msg,
    contact_us,
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
              <h2>{welcome_title[locale] || ''}</h2>
              <p>{welcome_msg[locale]?strippedContent(welcome_msg[locale]):"" || ''}</p>
              <div className="social d-block d-lg-flex">
                <Link href={facebook_url}>
                  <a target="_blank" className="fb" title="facebook">
                    <FontAwesomeIcon
                      icon={faFacebookSquare}
                      rel="noopener noreferrer nofollow"
                    />
                  </a>
                </Link>
                <Link href={twitter_url}>
                  <a target="_blank" className="twitter" title="twitter">
                    <FontAwesomeIcon
                      icon={faTwitterSquare}
                      rel="noopener noreferrer nofollow"
                    />
                  </a>
                </Link>
                <Link href={instagram_url}>
                  <a target="_blank" className="insta" title="instagram">
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      rel="noopener noreferrer nofollow"
                    />
                  </a>
                </Link>
                <Link href={youtube_url}>
                  <a target="_blank" className="youtube" title="youtube">
                    <FontAwesomeIcon
                      icon={faYoutubeSquare}
                      rel="noopener noreferrer nofollow"
                    />
                  </a>
                </Link>
                <Link href={linkedin_url}>
                  <a target="_blank" className="in" title="linkedin">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      rel="noopener noreferrer nofollow"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={2} className="offset-lg-1">
            <div className="links">
              <h3>{t('footer:useful_links')}</h3>
              <div className="d-flex flex-column">
                <Link href={`/${locale}/contact-us`}>
                  <a>{t('footer:contact_page')}</a>
                </Link>
                <Link href={google_play_store_download_app}>
                  <a rel="noopener noreferrer nofollow">
                    {t('footer:download_app')}
                  </a>
                </Link>
                <Link href={contact_us?.location_url}>
                  <a target="_blank" rel="noopener noreferrer nofollow">
                    {t('footer:our_location')}
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="links mt-4 mt-lg-0">
              <h3>{t('footer:contact_info')}</h3>
              <div className="d-flex flex-column ">
                <Link href={contact_us?.location_url}>
                  <a target="_blank" rel="noopener noreferrer nofollow">
                    <i className="fas fa-map-marker-alt mr-1" />{' '}
                    {contact_us?.location[locale] || ''}
                  </a>
                </Link>
                <a target="_blank" href={`tel:${contact_us?.contact_phone}`}>
                  <i className="fas fa-phone-alt mr-1" />{' '}
                  {contact_us?.contact_phone?.split(' ').join('')}
                </a>
                <a target="_blank" href={`mailto:${contact_us?.contact_email}`}>
                  <i className="fas fa-envelope mr-1" /> {contact_us?.contact_email}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
