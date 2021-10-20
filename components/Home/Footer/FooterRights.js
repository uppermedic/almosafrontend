import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, Link } from 'root/i18n';
export default function FooterRights() {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="footer-rights">
      <Container>
        <Row>
          <Col md={6} className="order-2 order-lg-1">
            <p className="m-0">
              {language === 'en' && (
                <>
                  ALMOOSA HOSPITAL © {new Date().getFullYear()} All Rights
                  Reserved
                </>
              )}
              {language === 'ar' && (
                <>
                  مستشفى الموسى {new Date().getFullYear()} © جميع الحقوق محفوظة
                </>
              )}
            </p>
          </Col>
          <Col md={6} className="order-1 order-lg-2">
            <div className="d-lg-flex justify-content-md-end">
              <Link href={`/${locale}/privacy`}>
                <a>
                  {language === 'en' && 'Privacy Policy'}
                  {language === 'ar' && 'سياسة الخصوصية'}
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
