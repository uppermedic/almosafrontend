import React, { useEffect, useState } from 'react';
import { fetchData } from 'src/store/Request.js';
import Link from 'next/link';
import { i18n } from 'root/i18n';
import Head from 'src/components/layout/head';
import { Col, Container, Row, Table } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { removeSpChar } from 'src/utils/helpers';

const SingleDoctor = ({ doctor }) => {
  const [qualifications, setQualifications] = useState({});
  const lang = i18n.language;
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (lang) {
      setQualifications(doctor.data[lang].qualifications);
    }
  }, [doctor, lang]);

  useEffect(() => {
    if (lang && locale) {
      router.push(
        `/${lang}/our-doctors/${removeSpChar(String(doctor?.data[lang]?.name))
          .split(' ')
          .join('-')}/?id=${doctor?.data?.id}`
      );
    }
  }, [lang, locale]);

  return (
    <div className="almoosa-doctors">
      <Head data={doctor.page.seo}></Head>

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
                          marginRight: lang === 'ar' && '-20px',
                          marginLeft: lang === 'en' && '-20px',
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
    let { error, data } = await fetchData(`/doctors/${context.query.id}`);
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
