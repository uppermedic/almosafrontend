import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Content = () => {
const { t } = useTranslation('patient_guide');

  const router = useRouter();
  const { locale } = router;

  return (
    <div className="library-content">
      <div className="title">
        <h2>{t('patient_guide:library')}</h2>
      </div>
      <div className="content">
        <Container>
          <Row xs="1" md="2" lg="4">
            {libraryData.map((item, index) => {
              return (
                <Col key={index}>
                  <div className="box">
                    <div className="icon">
                      <i className={item.iconClass}></i>
                    </div>
                    <div className="title">
                      {locale === 'ar' && item.title['ar']}
                      {locale === 'en' && item.title['en']}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Content;

const libraryData = [
  {
    iconClass: 'fas fa-wifi',
    title: {
      en: 'Internet access',
      ar: 'انترنت'
    }
  },
  {
    iconClass: 'fas fa-book',
    title: {
      en: 'Electronic books',
      ar: 'الكتب الإلكترونية'
    }
  },
  {
    iconClass: 'fas fa-search-plus',
    title: {
      en: 'Research guide',
      ar: 'دليل البحث الطبي'
    }
  },
  {
    iconClass: 'fas fa-database',
    title: {
      en: 'Database',
      ar: 'قاعدة البيانات الطبية'
    }
  },
  {
    iconClass: 'fas fa-book',
    title: {
      en: 'Books',
      ar: 'مجموعة من الكتب الطبية'
    }
  },
  {
    iconClass: 'fas fa-newspaper',
    title: {
      en: 'Newspapers',
      ar: 'الصحف الطبية'
    }
  },
  {
    iconClass: 'fab fa-stripe-s',
    title: {
      en: 'Magazines',
      ar: 'مجلة الموسى'
    }
  },
  {
    iconClass: 'fas fa-clock',
    title: {
      en: 'Opening hours 8:00 am to 5:00 pm daily',
      ar: 'ساعات العمل تبدأ من الساعة 8:00 صباحًا حتى 5:00 مساءً. '
    }
  }
];
