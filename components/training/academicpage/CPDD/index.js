import React from 'react';
import { i18n } from 'root/i18n';
import { Row, Col } from 'reactstrap';
import Markdown from 'markdown-to-jsx';

const index = ({ sectionData }) => {
  const lang = i18n.language;
  // const boxesData = [
  //   {
  //     en: {
  //       title: 'Patient-Family Education unit',
  //       content:
  //         'We believe in person centered care principles; we recognize that patients and their caregivers are essential to managing care beyond our doors. To this end, the Patient educators provides one-on-one education and skill instruction to patients and family members as ordered by the caregivers upon request, or with identified need. '
  //     },
  //     ar: {
  //       title: 'وحدة تثقيف المريض والأسرة',
  //       content:
  //         'نحن نؤمن بمبادئ الرعاية التي تتمحور حول الانسان ؛ و ندرك أن المرضى ومقدمي الرعاية هما اساس ادارة الرعاية تحقيقًا لهذه الغاية ، توفر الوحدة تعليمًا فرديًا وتعليمات حول المهارات للمرضى وأفراد الأسرة وفقًا لما يطلبه مقدمو الرعاية عند الطلب أو حسب الحاجة.'
  //     },
  //     class: 'patient-family'
  //   },
  //   {
  //     en: {
  //       title: 'Post graduate education ',
  //       content:
  //         'ASH Postgraduate Education department offers a range of Saudi Commission for Health Specialties (SCFHS) accredited and supervised programs that are residency, fellowship, and diplomas. We aim to provide professional academic healthcare programs. As a result, it creates an ideal learning environment based on health education principles for both trainers and trainees, and it allows trainees to be highly trained and qualified for safe professional practice.'
  //     },
  //     ar: {
  //       title: 'الدراسات العليا',
  //       content:
  //         'يقدم قسم الدراسات العليا في مستشفى الموسى التخصصي  مجموعة من البرامج المعتمدة من الهيئة السعودية للتخصصات الصحي, البرامج المُقدمة:  برنامج الإقامة والزمالة. نهدف إلى توفير برامج رعاية صحية أكاديمية مهنية. ونتيجة لذلك ، فإنها تخلق بيئة تعليمية مثالية تستند إلى مبادئ التثقيف الصحي لكل من المدربين والمتدربين ، وتتيح للمتدربين أن يكونوا مدربين تدريباً عالياً ومؤهلين لممارسة مهنية آمنة.'
  //     },
  //     class: 'post-graduate'
  //   }
  // ];

  const boxesData =
    sectionData?.length > 0 &&
    sectionData?.map((box, idx) => {
      return {
        ...box,
        class: idx === 1 ? 'patient-family' : idx === 2 ? 'post-graduate' : ''
      };
    });

  return (
    <section className="cpdd-section">
      {/* <Row>
        <Col>
          <h2 className="section-title">
            {lang == 'en'
              ? 'The Continuing Professional Development Department (CPDD) '
              : 'قسم التطوير المهني المستمر (CPDD)'}
          </h2>
        </Col>
      </Row> */}
      <Row>
        <Col>
          {lang && (
            <p className="cpdd-paragraph">
              <div
                dangerouslySetInnerHTML={{
                  __html: boxesData[0][lang]?.content || ' '
                }}
              />
            </p>
          )}
        </Col>
      </Row>
      <Row>
        {boxesData.map((box, idx) => (
          <Col xs={12} key={idx}>
            {idx > 0 && (
              <div className="boxes ">
                <div className={box.class}>
                  <div className="title">{lang ? box[lang].title : ''}</div>
                  <div className="box-content">
                    {lang && (
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: box[lang].content || ' '
                          }}
                        />
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default index;
