import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
// import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'next-i18next';
import Swal from 'sweetalert2';
import { postData } from 'src/store/Request';
import { useRouter } from 'next/router';

const TEST_SITE_KEY = '6LeVVRIaAAAAAC6mKFfCOeZKUX-vv9hFQlwIVDbj';
const Index = ({ data}) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  const [verified, setVerified] = useState(false);
  let _reCaptchaRef = useRef(null);

  const handleValidSubmit = (event, values) => {
    const allData = {
      ...values
    };
    postData('/contact', allData)
      .then(({ payload }) => {
        Swal.fire(
          t('successfully'),
          (locale == 'en' && 'message successfully sent') ||
            'تم ارسال الرسالة بنجاح ',
          'success'
        ).then(result => {
          if (result) {
            router.push(`/${locale}`);
          }
        });
      })
      .catch(error => {
        Swal.fire(
          t('faild'),
          (locale == 'en' && 'Unexpected error occurred') ||
            'حدث خطأ غير متوقع ',
          'error'
        );
      });
  };
  const verifyCallback = recaptchaToken => {
    if (recaptchaToken) setVerified(true);
  };

  return (
    <section className="contact">
      <Container>
        <Row>
          <Col>
            <h2>{locale && data.page.seo[locale].title}</h2>
          </Col>
        </Row>
        <Row className="top-section px-3 py-5">
          <Col lg={6}>
            {locale == 'en' && (
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.page?.seo['en']?.body
                  }}
                />
              </p>
            )}

            {locale == 'ar' && (
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.page?.seo['ar']?.body
                  }}
                />
              </p>
            )}
          </Col>
          <Col lg={6} className="pr-0">
            <img
              src="/images/contact-us/contact-us-map.png"
              alt="location map"
            />
          </Col>
        </Row>
        <Row className="contact-form m-0">
          <Col md={6} className="form">
            <h3>{(locale == 'en' && 'Contact Form') || 'نموذج الاتصال '}</h3>
            <AvForm onValidSubmit={handleValidSubmit}>
              <AvField
                name="name"
                placeholder={(locale == 'en' && 'Name') || 'الإسم'}
                validate={{
                  required: {
                    value: true,
                    errorMessage: (locale == 'en' && 'Enter Name') || 'ادخل الاسم'
                  }
                }}
              />
              <AvField
                name="email"
                type="email"
                placeholder={(locale == 'en' && 'Email') || 'إيميل'}
                validate={{
                  required: {
                    value: true,
                    errorMessage:
                      (locale == 'en' && 'Enter Email') || 'ادخل الايميل'
                  }
                }}
              />
              <AvField
                name="subject"
                placeholder={(locale == 'en' && 'Subject') || 'موضوع'}
                validate={{
                  required: {
                    value: true,
                    errorMessage:
                      (locale == 'en' && 'Enter Subject') || 'ادخل موضوع'
                  }
                }}
              />
              <AvField
                name="message"
                placeholder={(locale == 'en' && 'Message') || 'الرسالة'}
                validate={{
                  required: {
                    value: true,
                    errorMessage:
                      (locale == 'en' && 'Enter Message') || 'ادخل الرسالة'
                  }
                }}
                rows={5}
                type="textarea"
              />
              <Button className="w-100" type="submit" id="submit">
                {t('send')}
              </Button>
            </AvForm>
          </Col>
          <Col md={5} className="info offset-md-1">
            <h4 className="underline">
              {(locale == 'en' && 'Hospital Address') || 'عنوان المستشفى'}
            </h4>
            <p>
              {(locale == 'en' &&
                'Almoosa Specialist Hospital is located at the following address') ||
                'يقع مستشفى الموسى التخصصي في العنوان التالي '}
              :
            </p>
            <h4 className="underline">
              {(locale == 'en' && 'Location') || 'موقع'}:
            </h4>
            <p>
              {(locale == 'en' && 'Dharan St | Alfaisal District | Al-Ahsa') ||
                'شارع الظهران | حي الفيصل | الأحساء'}
            </p>
            <h4>{(locale == 'en' && 'P.O. Box') || 'صندوق مكتب البريد'}:</h4>
            <p>
              {(locale == 'en' && '5098 Eastern Province | Saudi Arabia') ||
                '5098 المنطقة الشرقية | المملكة العربية السعودية'}
            </p>
            <h4 className="underline">
              {(locale == 'en' && 'Telephone') || 'هاتف'}:
            </h4>
            <p>
              <a href="tel:+966-13-5369666">+966-13-5369666</a>
            </p>
            <h4 className="underline">{(locale == 'en' && 'Fax') || 'فاكس'}:</h4>
            <p>
              <a href="tel:+966-13-5369600">+966-13-5369600</a>
            </p>
            <h4 className="underline">
              {(locale == 'en' && 'Email') || 'إيميل'}:
            </h4>
            <p>
              <a target="_blank" href="mailto:info@almoosahospital.com.sa">
                info@almoosahospital.com.sa
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  ); 
};

export default Index;
