import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchData } from 'src/store/Request.js';
import Link from 'next/link';
import { i18n } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { Col, Container, Row, Table } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import PostHeading from 'src/components/reusableComponents/PostHeading';

const SingleDoctor = ({ doctor }) => {
  const [qualifications, setQualifications] = useState({});
  const lang = i18n.language;

  useEffect(() => {
    if (lang) {
      setQualifications(doctor.data[lang].qualifications);
    }
  }, [doctor, lang]);

  return (
    <div className="almoosa-doctors">
      <Head data={doctor.page.seo}></Head>
      {/* <Hero>
        <div className="hero-content">{lang && doctor.data[lang].name}</div>
      </Hero> */}
      <div
        className="text-white mb-4"
        style={{
          padding: '1em',
          backgroundColor: '#537435',
          textAlign: 'center'
        }}
      >
        <h1>{lang && doctor.data[lang].name}</h1>
        <p className="title">{lang && doctor.data[lang].title}</p>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={4}>
            <img
              className="d-block w-100"
              src={doctor.data.image}
              alt={lang && doctor.data[lang].name}
            />

            <div className="doctor-social">
              <Link href={doctor.social.facebook || '#!'}>
                <a target="_blank">
                  <FaFacebookF />
                </a>
              </Link>
              <Link href={doctor.social.twitter || '#!'}>
                <a target="_blank">
                  <FaTwitter />
                </a>
              </Link>
              <Link href={doctor.social.linkedin || '#!'}>
                <a target="_blank">
                  <FaLinkedin />
                </a>
              </Link>
              <Link href={`tel:${doctor.social.whatsapp_number}`}>
                <a target="_blank">
                  <FaWhatsapp />
                </a>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6}>
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
                          marginRight: lang === 'ar' && '-50px',
                          marginLeft: lang === 'en' && '-50px',
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
  );
};

export async function getServerSideProps(context) {
  if (context.query.slug) {
    //settings
    let { error, data } = await fetchData(`/doctors/${context.query.slug}`);
    if (error) {
      return {
        notFound: true
      };
    }
    return {
      props: { doctor: data }
    };
  } else {
    return {
      notFound: true
    };
  }
}

SingleDoctor.propTypes = {};

export default SingleDoctor;
