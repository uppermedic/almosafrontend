import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BrandBox from './re-brandBox';
import { useRouter } from 'next/router';

const Content = ({ itemContent }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="content">
      <div className="title">
        <h2>{locale && itemContent[locale]?.title}</h2>
      </div>
      <div className="brands">
        <Container>
          <Row xs="1" sm="2" md="3" lg="4">
            {itemContent.page_items.map((item, index) => (
              <Col key={index}>
                <BrandBox
                  name={locale && item[locale]?.title}
                  image={item?.image[0]}
                  link={item?.url}
                />
              </Col>
            ))}
            {/* {locale === 'ar' && (
              <>
                {data.map((item, index) => (
                  <Col key={index}>
                    <BrandBox
                      name={item['ar']?.name}
                      image={item.logo}
                      link={item.link}
                    />
                  </Col>
                ))}
              </>
            )} */}
            {/* {locale === 'en' && (
              <>
                {data.map((item, index) => (
                  <Col key={index}>
                    <BrandBox
                      name={item['en']?.name}
                      image={item.logo}
                      link={item.link}
                    />
                  </Col>
                ))}
              </>
            )} */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Content;
