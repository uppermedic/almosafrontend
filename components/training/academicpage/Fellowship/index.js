import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';

const index = ({ t }) => {
  const lang = i18n.language;

  return (
    <section className="fellowship">
      <Row>
        <Col>
          <h2 className="section-title">
            {lang == 'en'
              ? 'Residency and fellowship training programs:'
              : 'برامج الإقامة والزمالة'}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {lang === 'en' && (
            <div className="section-content">
              <p>
                The Research Center was founded to oversee the research
                activities at Almoosa Medical Group. It was established to
                identify key areas of research based on the health care needs of
                the society, to help to develop the Saudi research activities
                which can meet with the 2030 vision on research and development,
                and to encourage staff to contribute to those prioritized areas
                of research.
              </p>
              <Card>
                <ul>
                  <li> Pediatric residency training program.</li>
                  <li> Internal medicine residency training program </li>
                  <li> General surgery residency training program.</li>
                  <li>Obstetrics and gynaecology residency training program</li>
                  <li>Adult Intensive care unit residency training program.</li>
                  <li> Diagnostic Radiology residency training program </li>
                  <li> Anaesthesia residency training program</li>
                  <li> Urology residency training program </li>
                  <li> Ophthalmology residency training program</li>
                  <li>Cardiology fellowship training program.</li>
                  <li>Neonatology Fellowship training Program.</li>
                </ul>
              </Card>
            </div>
          )}
          {lang === 'ar' && (
            <div className="section-content">
              <p>
                تدريب الإقامة هو تدريب طبي بعد التخرج في تخصص معين من الطب. قد
                يتبع التدريب المقيم زمالة أو تدريب تخصص فرعي.
                <br />
                بدأنا عام 2017 و حاليًا لدينا 11 برنامجًا مختلفًا للتدريب على
                الإقامة والزمالة في مستشفى الموسى التخصصي و كلها برامج معتمدة من
                قبل الهيئة السعودية للتخصصات الطبية.
              </p>
              <Card>
                <ul>
                  <li> برنامج تدريب الأطباء المقيمين في طب الأطفال.</li>
                  <li> برنامج تدريب الأطباء المقيمين في الطب الباطني</li>
                  <li> برنامج تدريب الأطباء المقيمين في الجراحة العامة.</li>
                  <li> برنامج تدريب الأطباء المقيمين قسم النساء والتوليد</li>
                  <li>
                    برنامج تدريب الأطباء المقيمين في وحدة العناية المركزة
                    للبالغين.
                  </li>
                  <li> برنامج تدريب الأطباء المقيمين في الأشعة التشخيصية</li>
                  <li> برنامج تدريب الأطباء المقيمين في قسم التخدير</li>
                  <li>
                    برنامج تدريب ا الأطباء المقيمين في جراحة المسالك البولية
                  </li>
                  <li> برنامج تدريب الأطباء المقيمين في طب وجراحة العيون</li>
                  <li> برنامج الزمالة في أمراض القلب.</li>
                  <li> برنامج الزمالة في طب حديثي الولادة.</li>
                </ul>
              </Card>
            </div>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default withTranslation('common')(index);
