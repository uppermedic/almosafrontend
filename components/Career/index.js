import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  return (
    <section className="career">
      <Container>
        <Row>
          <Col>
            <h2 className="title">{t('common:career')}</h2>
          </Col>
        </Row>
        <Row className="section-content">
          <Col>
            {locale == 'en' && (
              <p>
                Almoosa Specialist Hospital employs 2,000 of the best medical,
                technical and administrative staff from more than 30
                nationalities to establish a national center with international
                expertise in the diagnosis and treatment of patients in Saudi
                Arabia. In keeping with the Kingdom Vision 2030 initiative and
                about benefiting from the capabilities of young Saudi men and
                women, the hospital enjoys a Saudization ratio of 39%. To
                promote the continuous development of staff skills, the hospital
                established a specialized center for medical and technical
                education and training equipped with the latest technology.
                <br />
                <br />
                <br />
                <strong>
                  Check out our recently posted jobs ,
                  <a
                    href="https://edns.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Click Here
                  </a>
                </strong>
              </p>
            )}

            {locale == 'ar' && (
              <p>
                يعمل في الوقت الراهن بالمستشفى نحو 2000 موظف من أفضل الكوادر
                الطبية والفنية والادارية، يتبعون أكثر من 30 جنسية حول العالم،
                وذلك سعياً منه لتكوين تجربة وطنية قادرة على الاستعانة بالخبرات
                العالمية في تشخيص وعلاج المرضى من أبناء هذا الوطن، وتماشياً مع
                رؤية المملكة 2030 فيالإستفادة من طاقات شباب المملكة من الجنسين،
                فقد وصلت نسبة توطين الوظائف بالمستشفى إلى 39%، وتأكيدًا على
                التطوير المستمر لمهارات الموظفين أنشأ المستشفى مركزًا متخصصًا
                للتعليم والتدريب الطبي والفني والاداري، ومجهز بأحدث التقنيات
                <br />
                <br />
                <br />
                <strong>
                  لمعرفة آخر الوظائف المنشورة ،
                  <a
                    href="https://edns.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    إضغط هنا
                  </a>
                </strong>
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Index;
