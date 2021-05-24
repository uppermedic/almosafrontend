import React, { useState } from 'react';
import { Row, Col, Card } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';

const index = ({ t }) => {
  const lang = i18n.language;

  const aboutparagraph = {
    en:
      'ASH Life Support Training Centre (LSTC) is a signature project for education and training at Almoosa Specialist hospital and supports the strategic plan in the area of education, innovation, and collaboration. The ASH LSTC is an official American Heart Association (AHA) training Centre, offering the following life support courses: Heartsaver Provider and Instructor courses (First Aid, First aid-CPR, and First aid-CPR-AED), Basic Life support (BLS) Provider and instructor, Advanced Cardiac Life Support (ACLS) Provider and instructor, Pediatric Advanced Life Support (PALS) Provider and instructor and neonatal resuscitation program (NRP) Provider. <br /> <br /> In addition, Almoosa Specialist Hospital is an official training center for Advanced Trauma Life Support courses for doctors (ATLS) and nurses (ATCN) in affiliation with the American College of Surgeons (ACS).',
    ar:
      'يعد مركز التدريب على دعم الحياة المتقدم  (LSTC) مشروعًا مميزًا للتعليم والتدريب في مستشفى الموسى التخصصي ويدعم الخطة الاستراتيجية في مجال التعليم والابتكار والتعاون. و هو مركز تدريبي رسمي معتمد من قِبل جمعية القلب الأمريكية (AHA) ، يقدم دورات دعم الحياة التالية: دورات منقذ  القلب – دورات الإنعاش القلبي الرئوي ، والإسعافات الأولية -  دعم الحياة الأساسي (BLS) ) دعم الحياة القلبي المتقدم (ACLS) ، خدمات دعم الحياة المتقدم للأطفال (PALS) – دورات إنعاش حديثي الولادة (NRP).. <br /> <br /> بالإضافة إلى ذلك ، يعد مستشفى الموسى التخصصي مركزًا رسميًا للتدريب على الدورات المتقدمة لدعم الحياة لمصابي الحوادث و تقدم للاطباء  (ATLS) والممرضات (ATCN) بالاشتراك مع الكلية الأمريكية للجراحين (ACS).'
  };

  const [readmore, setReadmore] = useState(false);
  return (
    <section className="life-support">
      <Row>
        <Col>
          <h2 className="section-title">
            {lang == 'en' ? 'Life Support Center ' : 'مركز دعم الحياة المتقدم'}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-contend">
            <Card>
              <div className="about-us">
                <div className="overlay">
                  <img
                    src="/images/training/academic/blue-zigzag.png"
                    alt="zigzag"
                  />
                </div>
                <Row>
                  <Col md="8">
                    <h4>{lang === 'en' ? 'About us' : 'عن المركز'}</h4>
                    <p>
                      <Markdown>
                        {readmore
                          ? lang && aboutparagraph[lang]
                          : truncate(
                              strippedContent(
                                (lang && aboutparagraph[lang]) || 'No Data'
                              ),
                              600,
                              '......'
                            )}
                      </Markdown>
                    </p>
                    <button
                      className="btn read-more"
                      onClick={() => setReadmore(!readmore)}
                    >
                      {readmore ? t('read_less') : t('read_more')}
                    </button>
                  </Col>
                  <Col md="4">
                    <img
                      src="/images/training/academic/about.jpg"
                      alt="about"
                    />
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-contend">
            <Card>
              <div className="purpose">
                <div className="overlay">
                  <img
                    src="/images/training/academic/green-zigzag.png"
                    alt="zigzag"
                  />
                </div>
                <Row>
                  <Col>
                    <h4>{lang === 'en' ? 'Purpose' : 'الأهداف'}</h4>
                    {lang === 'en' && (
                      <ul>
                        <li>
                          Providing high-quality life support training programs
                          for AlMoosa Specialist Hospital staff and the
                          surrounding health care organizations to help them
                          save more lives.
                        </li>
                        <li>
                          Offering learning opportunities to enhance skills and
                          help other Healthcare providers succeed in their
                          career as part of the organization's dedication to
                          spreading the knowledge of how to save lives among the
                          community.
                        </li>
                        <li>
                          Ensure that the life support programs will be
                          conducted according to the international guidelines
                          and standards established by each association and
                          conduct periodic review and evaluation on a regular
                          basis to find any opportunity to improve.
                        </li>
                      </ul>
                    )}
                    {lang === 'ar' && (
                      <ul>
                        <li>
                          توفير برامج تدريبية عالية الجودة لدعم الحياة لموظفي
                          مستشفى الموسى التخصصي ومؤسسات الرعاية الصحية المحيطة
                          لمساعدتهم على إنقاذ المزيد من الأرواح.
                        </li>
                        <li>
                          تقديم فرص التعلم لتعزيز المهارات ومساعدة مقدمي الرعاية
                          الصحية الآخرين على النجاح في حياتهم المهنية كجزء من
                          دورنا في نشر المعرفة حول كيفية إنقاذ الأرواح بين
                          المجتمع.
                        </li>
                        <li>
                          التأكد من أن دورات دعم الحياة ستتم وفق الضوابط
                          والمعايير الدولية وإجراء مراجعة وتقييم دوريين لتطبيق
                          أي فرصة للتحسين.
                        </li>
                      </ul>
                    )}
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default withTranslation('common')(index);
