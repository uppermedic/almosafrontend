import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FooterRights() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="footer-rights">
      <Container>
        <Row>
          <Col md={6} className="order-2 order-lg-1">
            <p className="m-0">
              {locale === 'en' && (
                <>
                  ALMOOSA HOSPITAL © {new Date().getFullYear()} All Rights
                  Reserved
                </>
              )}
              {locale === 'ar' && (
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
                  {locale === 'en' && 'Privacy Policy'}
                  {locale === 'ar' && 'سياسة الخصوصية'}
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
