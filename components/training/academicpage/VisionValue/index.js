import React from 'react';
import { i18n } from 'root/i18n';
import { Row, Col } from 'reactstrap';
import Markdown from 'markdown-to-jsx';

const index = () => {
  const lang = i18n.language;
  const boxesData = [
    {
      en: {
        title: 'Vision',
        content:
          'We aspire to be a national leader in providing academic excellence, professional development, and innovation in healthcare setting in the Kingdom of Saudi Arabia and the region. '
      },
      ar: {
        title: 'الرؤية',
        content:
          'نطمح لأن نكون روادًا في تقديم التميز الأكاديمي والتطوير المهني والابتكار في المملكة العربية السعودية والمنطقة.'
      }
    },
    {
      en: {
        title: 'Mission',
        content:
          'To provide learner centered environment that utilizes innovation and encourages life-long learning, community service and research utilization. We are committed in the Academic Affairs to prepare candidates in their profession to meet the clients’ needs across the life span and be leaders in a diverse healthcare setting. '
      },
      ar: {
        title: 'الرسالة',
        content:
          'توفير بيئة تتمحور حول المتعلم ، تستخدم الابتكار وتشجع التعلم مدى الحياة وخدمة المجتمع واستخدام البحث. نحن ملتزمون في الشؤون الأكاديمية بإعداد المرشحين في مهنتهم لتلبية احتياجات العملاء وأن نكون قادة في بيئة رعاية صحية شمولية.'
      }
    },
    {
      en: {
        title: 'Values',
        content: `<ul><li>Learner-centered environment </li> <li>Research-based environment. </li> <li>Innovation. </li> <li>Empowerment.</li> <li>Inter-professional collaboration  </li></ul>`
      },
      ar: {
        title: 'القيم',
        content: `<ul><li> البيئة المتمحورة حول المتعلم</li> <li>البيئة القائمة على البحث.</li> <li>الابتكار. </li> <li>التمكين. </li> <li> التعاون بين المهنيين </li></ul>`
      }
    }
  ];
  return (
    <section className="vision-value-section">
      <Row>
        {boxesData.map((box, idx) => (
          <Col key={idx} sm={12} md={6} lg={4}>
            <div className="boxes">
              <div className="title">{lang ? box[lang].title : ''}</div>
              <div className="box-content">
                <Markdown>{lang ? box[lang].content : ''}</Markdown>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default index;
