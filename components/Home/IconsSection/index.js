import React from 'react';
import { IoCloudDownload, IoCallSharp } from 'react-icons/io5';
import { BsFillCalendarFill, BsSearch } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';
import { Card, Row, Col, Container } from 'reactstrap';
import { Link, i18n } from 'root/i18n';

const index = () => {
  const lang = i18n.language;
  const data = [
    {
      id: 1,
      icon: BsFillCalendarFill,
      content: { en: 'Book Appointment', ar: 'احجز موعد' },
      path: '/contact-us'
    },
    {
      id: 2,
      icon: IoCloudDownload,
      content: { en: 'Download App', ar: 'حمل التطبيق' },
      path: ''
    },
    {
      id: 3,
      icon: BsSearch,
      content: { en: 'Search for doctors', ar: 'ابحث عن طبيبك' },
      path: '/our-doctors'
    },
    {
      id: 4,
      icon: IoCallSharp,
      content: { en: 'Contact Us', ar: ' اتصل بنا' },
      path: '/contact-us'
    }
  ];
  return (
    <div className="icons-section text-center">
      <Container>
        <Row xs="2" sm="2" lg="4">
          {data.map(box => (
            <Col key={box.id}>
              <Card>
                <Link href={box.path}>
                  <div style={{ cursor: box.id === 2 ? 'default' : 'pointer' }}>
                    <span className="icon">
                      <box.icon />
                    </span>
                    <h4>{lang && box.content[lang]}</h4>
                  </div>
                </Link>
                {box.id === 2 && (
                  <div className="stores-wrapper">
                    <a
                      href="https://apps.apple.com/sa/app/almoosa-hospital/id1509215027"
                      target="_blank"
                    >
                      <FaApple /> <span className="store-name">App Store</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.almoosa.almoosa"
                      target="_blank"
                    >
                      <DiAndroid />
                      <span className="store-name"> Google Play</span>
                    </a>
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default index;
