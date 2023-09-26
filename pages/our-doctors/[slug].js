import React, { useEffect, useState } from 'react';
import { fetchData } from 'src/store/Request.js';
import Link from 'next/link';
import Head from 'src/components/layout/head';
import { Col, Container, Row, Table } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { removeSpChar } from 'src/utils/helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SingleDoctor = ({ doctor }) => {
  const [qualifications, setQualifications] = useState({});
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale) {
      setQualifications(doctor.data[locale].qualifications);
    }
  }, [doctor, locale]);

  useEffect(() => {
    if (locale) {
      router.push(
        `/${locale}/our-doctors/${removeSpChar(
          String(doctor?.data[locale]?.name)
        )
          .split(' ')
          .join('-')}/?id=${doctor?.data?.id}`
      );
    }
  }, [locale]);

  return (
    <div className="almoosa-doctors">
      <Head data={doctor.page.seo}></Head>

      <div
        className="text-white mb-4 "
        style={{
          padding: '1em',
          backgroundColor: '#537435',
          textAlign: 'center'
        }}
      >
        <h2>{locale && doctor.data[locale].name}</h2>
        <p className="title">{locale && doctor.data[locale].title}</p>
      </div>
      <div className="our-doctors">
        <Container>
          <Row className="justify-content-center doctor-details">
            <Col xs={12} lg={4}>
              <div className="doctor-img">
                <img
                  // className="d-block w-100"
                  className="doctorimg"
                  src={doctor.data.image}
                  alt={locale && doctor.data[locale].name}
                />

                <div className="doctor-social">
                  <Link href={doctor.social.facebook || '#!'}>
                    <a target="_blank" rel="noopener noreferrer nofollow">
                      <FaFacebookF className="facebook" />
                    </a>
                  </Link>
                  <Link href={doctor.social.twitter || '#!'}>
                    <a target="_blank" rel="noopener noreferrer nofollow">
                      <FaTwitter className="twitter" />
                    </a>
                  </Link>
                  <Link href={doctor.social.linkedin || '#!'}>
                    <a target="_blank" rel="noopener noreferrer nofollow">
                      <FaLinkedin className="linkedin" />
                    </a>
                  </Link>
                  <Link href={`tel:${doctor.social.whatsapp_number}`}>
                    <a target="_blank" rel="noopener noreferrer nofollow">
                      <FaWhatsapp className="watsapp" />
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={8}>
              <Table responsive>
                <tbody>
                  {Object.keys(qualifications).map((key, i) => (
                    <tr key={key}>
                      <td
                        style={{
                          padding: '35px 20px 35px 0',
                          borderBottom: '1px solid #eee',
                          borderTop: 'none'
                        }}
                      >
                        <strong>{key}</strong>
                      </td>
                      <td
                        style={{
                          padding: '35px 20px 35px 0',
                          borderBottom: '1px solid #eee',
                          borderTop: 'none'
                        }}
                      >
                        <span
                          style={{
                            marginRight: locale === 'ar' && '-20px',
                            marginLeft: locale === 'en' && '-20px',
                            position: 'absolute',
                            color: '#78a748'
                          }}
                        >
                          {'>>'}
                        </span>
                        {qualifications[key]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const locale =context.locale
  if (context.query.slug) {
    //settings
    let { error, data } = await fetchData(`/doctors/${context.query.id}`);
    if (error) {
      return {
        notFound: true
      };
    }
    return {
      props: {
        doctor: data,
        ...(await serverSideTranslations(locale, [
          'common',
          'about',
          'news',
          'menu',
          'header',
          'footer',
          'patient_guide'
        ]))
      }
    };
  } else {
    return {
      notFound: true
    };
  }
}

SingleDoctor.propTypes = {};

export default SingleDoctor;
