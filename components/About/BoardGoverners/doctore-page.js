import { Container, Row, Col } from 'reactstrap';
import {
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare
} from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = ({ doctorData }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="our-doctors">
      <Container>
        <Row className="doctor-details m-auto doctor-content-page">
          {/*  the comming data will come when create main doctor key and value  */}
          <Col lg={4} className="doctor-img">
            <img
              src={doctorData.image[0]}
              alt={
                locale && doctorData[locale] && doctorData[locale]?.name
              }
              className="shadow governer-doctor"
            />
            {(doctorData?.id === 24 || doctorData?.id === 32) && (
              <div className="doctor-social">
                <Link href="https://instagram.com/malekalmousa?utm_medium=copy_link">
                  <a target="_blank" rel="noopener noreferrer nofollow">
                    <FaInstagramSquare className="intgram" />
                  </a>
                </Link>
                <Link href="https://twitter.com/malekalmousa?s=21">
                  <a target="_blank" rel="noopener noreferrer nofollow">
                    <FaTwitter className="twitter" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/malek-almoosa-bb2b492a">
                  <a target="_blank" rel="noopener noreferrer nofollow">
                    <FaLinkedin className="linkedin" />
                  </a>
                </Link>
              </div>
            )}
          </Col>
          <Col lg={{ size: 8 }} className="pl-sm-5 pr-4">
            <h3 className="doctor-name">
              {locale && doctorData[locale] && doctorData[locale]?.name}
            </h3>
            <p className="py-2 doctor-title">
              {locale && doctorData[locale] && doctorData[locale]?.title}
            </p>
            {locale && doctorData[locale]?.content?.length > 0 && (
              <p className="doctor-paragraph">
                <div
                  dangerouslySetInnerHTML={{
                    __html: doctorData[locale]?.content
                  }}
                />
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Index;
