import React, { useState } from 'react';
import { i18n, withTranslation } from 'root/i18n';
import { Row, Col } from 'reactstrap';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';

const index = ({ t }) => {
  const lang = i18n.language;
  const boxesData = [
    {
      en: {
        title: 'About us',
        content:
          'In May 2019 T&D was established to hone our staff professional and personal skills. <br/> The main focus areas of our training programs are communication skills, leadership skills, teamwork, and professionalism in the workplace, time management, anger management, email etiquette, and job-related technical skills.'
      },
      ar: {
        title: 'عن المركز',
        content:
          'تم انشاء قسم تدريب وتطوير الموظفين في مايو 2019 ، لصقل المهارات المهنية والشخصية لموظفينا. <br/> مجالات التركيز الرئيسية لبرامجنا التدريبية هي مهارات الاتصال ، ومهارات القيادة ، والعمل الجماعي ، والاحتراف في مكان العمل ، وإدارة الوقت ، وإدارة الغضب ، وآداب كتابة البريد الإلكتروني ، والمهارات الفنية المتعلقة بالوظيفة.'
      },
      readMore: false
    },
    {
      en: {
        title: 'Purpose',
        content:
          'The purpose of T&D is to standardize our staff professional response and work protocols. Plus, we will implement a TOT approach to have our in-house trainers who can help train their colleagues in the future and help maintain smooth turnovers and knowledge transfer over the years.'
      },
      ar: {
        title: 'الاهداف',
        content:
          'توحيد الاستجابة المهنية لموظفينا وبروتوكولات العمل. بالإضافة إلى ذلك ، سنقوم بتنفيذ نهج تدريب المدربين لدينا ليكون لدينا مدربين داخليين يمكنهم المساعدة في تدريب زملائهم في المستقبل والمساعدة في الحفاظ على التحول السلس ونقل المعرفة على مر السنين'
      },
      readMore: false
    },
    {
      en: {
        title: 'Training approach',
        content:
          'Blended Training Approach (BTA) <br/> To help retention of learning, a blend of training delivery methods will be utilized to best meet the needs of our audience. This will include instructor-led training, interactive workshops, visual aids, trainee-led activities, course manuals, and e-learning courses. '
      },
      ar: {
        title: 'منهجية التدريب',
        content:
          'نهج التعلم المختلط (BTA) <br/> للمساعدة في الحفاظ على التعلم ، سيتم استخدام مزيج من طرق تقديم التدريب لتلبية احتياجات جمهورنا على أفضل وجه. وسيشمل ذلك تدريبًا بقيادة مدرب ، وورش عمل تفاعلية ، ووسائل مساعدة بصرية ، وأنشطة يقودها المتدربون ، وكتيبات ، ودورات التعلم الإلكتروني. '
      },
      readMore: false
    }
  ];

  const handleReadMore = idx => {
    const stateData = [...state];
    stateData[idx]['readMore'] = !stateData[idx]['readMore'];
    setstate(stateData);
  };

  const [state, setstate] = useState(boxesData);
  return (
    <section className="traning-staff-section">
      <Row>
        <Col>
          <h2 className="section-title">
            {lang == 'en'
              ? 'Training and Staff Development (T&D)'
              : 'تدريب وتطوير الموظفين (T&D)'}
          </h2>
        </Col>
      </Row>
      <Row>
        {state.map((box, idx) => (
          <Col key={idx} sm={12} md={6} lg={4}>
            <div className="boxes">
              <div className="title">{lang && box[lang].title}</div>
              <div className="box-content">
                <Markdown>
                  {box.readMore
                    ? lang && box[lang].content
                    : truncate(
                        strippedContent(
                          (lang && box[lang].content) || 'No Data'
                        ),
                        250,
                        '......'
                      )}
                </Markdown>

                <button className="btn" onClick={() => handleReadMore(idx)}>
                  {box.readMore ? t('read_less') : t('read_more')}
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default withTranslation('common')(index);
