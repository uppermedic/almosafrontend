import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useTranslation } from 'next-i18next';
import RegistrationPopup from './RegistrationPopup';
import { postData, fetchData } from 'src/store/Request';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
const TEST_SITE_KEY = '6LeVVRIaAAAAAC6mKFfCOeZKUX-vv9hFQlwIVDbj';

const data = [
  {
    id: 1,
    name: 'firstName',
    type: 'text',
    required: true,
    en: {
      label: 'First Name',
      validate_message: 'Enter First Name'
    },
    ar: {
      label: 'الإسم الأول',
      validate_message: 'ادخل الإسم الأول'
    }
  },
  {
    id: 2,
    name: 'lastName',
    type: 'text',
    required: true,
    en: {
      label: 'Last Name',
      validate_message: 'Enter Last Name'
    },
    ar: {
      label: 'اسم العائلة',
      validate_message: 'ادخل اسم العائلة'
    }
  },
  {
    id: 4,
    name: 'email',
    type: 'email',
    required: true,
    en: {
      label: 'Your Email',
      validate_message: 'Enter Your Email'
    },
    ar: {
      label: 'بريدك الالكتروني ',
      validate_message: 'ادخل بريدك الالكتروني '
    }
  },
  {
    id: 5,
    name: 'speciality',
    type: 'text',
    required: true,
    en: {
      label: 'Speciality',
      validate_message: 'Enter Speciality'
    },
    ar: {
      label: 'التخصص',
      validate_message: 'ادخل التخصص'
    }
  },
  {
    id: 6,
    name: 'phone',
    type: 'text',
    required: true,
    en: {
      label: 'Mobile No',
      validate_message: 'Enter Mobile No'
    },
    ar: {
      label: 'رقم الجوال',
      validate_message: 'ادخل رقم الجوال'
    }
  },
  {
    id: 7,
    name: 'scfhs_no',
    type: 'text',
    required: false,
    en: {
      label: 'SCFHS No'
    },
    ar: {
      label: 'رقم الهيئة السعودية للتخصصات الصحية '
    }
  },

  {
    id: 8,
    name: 'position',
    type: 'text',
    required: true,
    en: {
      label: 'Position',
      validate_message: 'Enter Position'
    },
    ar: {
      label: 'المنصب',
      validate_message: 'ادخل المنصب'
    }
  },
  {
    id: 9,
    name: 'hospital',
    type: 'text',
    required: false,
    en: {
      label: 'Hospital'
    },
    ar: {
      label: 'المستشفى'
    }
  },
  {
    id: 10,
    name: 'city',
    type: 'text',
    required: true,
    en: {
      label: 'City',
      validate_message: 'Enter City'
    },
    ar: {
      label: 'المدينة',
      validate_message: 'ادخل المدينة'
    }
  }
];
const Register = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  const [verified, setVerified] = useState(false);
  const [open, setopen] = useState(false);
  let _reCaptchaRef = useRef(null);

  const toggle = () => {
    setopen(!open);
  };
  const handleValidSubmit = (event, values) => {
    const allData = {
      event_id: sessionStorage.getItem('reg_id'),
      ...values
    };
    postData('/education/register', allData)
      .then(({ payload }) => {
        toggle();
      })
      .catch(error => {
        if (
          error.response.data.errors === 'the event you register to Not exist.'
        ) {
          Swal.fire(
            t('faild'),
            (locale == 'en' && 'The event/course you register to not exist') ||
              'الحدث/الدورة الذي قمت بتسجيله غير موجود ',
            'error'
          );
        } else {
          Swal.fire(
            t('faild'),
            (locale == 'en' && 'Unexpected error occurred') ||
              'حدث خطأ غير متوقع ',
            'error'
          );
        }
      });
  };

  const verifyCallback = recaptchaToken => {
    // Here you will get the final recaptchaToken!!!
    if (recaptchaToken) setVerified(true);
  };
  return (
    <section className="register">
      <Container>
        <Row>
          <Col>
            <h2> {locale == 'en' ? 'Registration Form' : 'إستمارة تسجيل'}</h2>
          </Col>
        </Row>
        <AvForm onValidSubmit={handleValidSubmit}>
          <Row className="inputs-container mx-0">
            {data.map(item => (
              <Col md={{ size: 6 }} key={item.label}>
                <AvField
                  name={item.name}
                  label={
                    (locale && item[locale].label) + (item.required ? ' *' : '')
                  }
                  placeholder={locale && item[locale].label}
                  type={item.type}
                  required={item.required}
                  validate={{
                    required: {
                      value: item.required,
                      errorMessage:
                        locale && item.required && item[locale].validate_message
                    }
                  }}
                />
              </Col>
            ))}
            {/* <Col xs={12} className="text-center">
              <ReCAPTCHA
                style={{ display: 'inline-block' }}
                // theme="dark"
                ref={_reCaptchaRef}
                sitekey={TEST_SITE_KEY}
                onChange={verifyCallback}
                asyncScriptOnLoad={asyncScriptOnLoad}
              />
            </Col> */}
            <Col sm={12}>
              <Button type="submit" id="submit">
                {t('register')}
              </Button>
            </Col>
          </Row>
        </AvForm>
      </Container>
      <RegistrationPopup toggle={toggle} open={open} />
    </section>
  );
};
export default Register;
