import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';

const index = ({ t }) => {
  const lang = i18n.language;

  return (
    <section className="research-center">
      <Row>
        <Col>
          <h2 className="section-title">
            {lang == 'en' ? 'Research Center (RC)' : 'مركز الأبحاث (RC)'}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="overlay">
            <Card>
              {lang === 'en' && (
                <p>
                  The Research Center was founded to oversee the research
                  activities at Almoosa Medical Group. It was established to
                  identify key areas of research based on the health care needs
                  of the society, to help to develop the Saudi research
                  activities which can meet with the 2030 vision on research and
                  development, and to encourage staff to contribute to those
                  prioritized areas of research.
                </p>
              )}
              {lang === 'ar' && (
                <p>
                  تأسس مركز الأبحاث للإشراف على الأنشطة البحثية في مجموعة الموسى
                  الطبية. تم إنشاؤه لتحديد المجالات الرئيسية للبحث بناءً على
                  احتياجات الرعاية الصحية للمجتمع ، بجانب المساعدة في تطوير
                  الأنشطة البحثية السعودية التي يمكن أن تتوافق مع رؤية 2030 بشأن
                  البحث والتطوير.
                </p>
              )}
              <img src="/images/training/academic/green-zigzag.png" />
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {lang === 'en' && (
            <p>
              The center also maintains the ethical standards of practice in
              medical research through Institutional Review Board (IRB) to
              protect both participants and researchers and ensure that
              interdisciplinary research is conducted in an appropriate and
              consistent manner. An Institutional Review Board (IRB) has been
              established at Almoosa Medical Group and goes under the umbrella
              of King Abdulaziz City for Science and Technology (KACST). The
              main aim of this board is to review studies ethically and make
              decisions whether to approve or reject a study. Research Center
              also offers continuous professional development programs in
              research methodology, biostatistics and scientific writing for
              publication as a sense of duty towards community, professionals
              and students’ development.
            </p>
          )}

          {lang === 'ar' && (
            <p>
              يحافظ المركز أيضًا على المعايير الأخلاقية للممارسة في البحث الطبي
              من خلال مجلس أخلاقيات البحوث المؤسسي (IRB) لحماية كل من المشاركين
              والباحثين والتأكد من إجراء البحوث متعددة التخصصات بطريقة مناسبة
              ومتسقة. تم إنشاء مجلس المراجعة المؤسسية (IRB) في مجموعة الموسى
              الطبية تحت مظلة مدينة الملك عبد العزيز للعلوم والتقنية (KACST).
              الهدف الرئيسي من هذا المجلس هو مراجعة الدراسات بشكل أخلاقي واتخاذ
              القرارات بشأن الموافقة على الدراسة أو رفضها. يقدم مركز الأبحاث
              أيضًا برامج التطوير المهني المستمر في منهجية البحث والإحصاء الحيوي
              والكتابة العلمية للنشر، كشعور بالواجب تجاه المجتمع والمهنيين
              وتنمية الطلاب.
            </p>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default withTranslation('common')(index);
