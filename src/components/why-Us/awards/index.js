import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';
const data = [
  {
    id: 1,
    title: 'Our Journey to Magnet',
    content:
      'Magnet Recognition Program is the gold standard given to hospitals for quality patient care, nursing excellence and innovations in professional nursing practice. To achieve Magnet Recognition, hospitals must pass a rigorous and extensive review process that requires profound contribution and commitment from leadership and staff.'
  },
  {
    id: 2,
    title: 'JCI – Joint Commission International Accreditation',
    content: `Quality and best practices are among our top strategic priorities, and we are proud to have achieved accreditation by Joint Commission International (JCI) three consecutive times, 2009, 2012 and 2015.
    Accreditation by JCI certificates that Almoosa Specialist Hospital adheres to the highest international standards in quality control, patient safety and best practices worldwide.`
  },
  {
    id: 3,
    title:
      'CIBAH- Saudi Central Board for Accreditation of Healthcare Institutions',
    content: `Almoosa Specialist Hospital in 2013 was accredited by the Saudi Central Board for Accreditation of Healthcare Institutions, following the evaluation of 811 standards.
    CBAHI is the official board authorized to grant accreditation to all healthcare facilities in Saudi Arabia. The Central Board’s main role is to establish and evaluate quality standards for health care and patient safety in all Saudi health care establishments.
    The hospital achieved re-accreditation in in 2017.`
  },
  {
    id: 4,
    title:
      'Chamber of Commerce Award for Best Facility atthe Major Economic Entities Level',
    content: `Almoosa Hospital won the Chamber of Commerce Award in 2014, which is the first award to the development sectors in AL-Ahssa region to contribute in the development and upgrading of local performance. The award is one of the Chamber’s initiatives which aim to support the business sector in AL-Ahssa, improve its performance, and to honor the companies and institutions that have contribute distinctly to the development boom taking place in the Kingdom.
`
  },
  {
    id: 5,
    title: 'Golden Designation from the Planetree Organization',
    content: `In 2017, the American Planetree organization granted the Golden designation for Almoosa Specialist Hospital for its role in providing distinguished health care with internationally recognized standards. Almoosa is the only hospital in the Middle East region to receive this accreditation. . It was also the first to receive the Planetree Silver Designation in 2015.
    Founded in 1978, Planetree is an international nonprofit organization that promotes patient-centered care in healthcare. Its mission is to establish and evaluate standards for healthcare providers based on a simple philosophy of designing healthcare services to suit patient needs, enhancing the role of personal compassion and human interaction in patient care, providing education and information resources in healthcare institutions, and highlighting the role of health care providers in promoting human communication, independence, freedom, family, friends, social support, and nutrition in healing and educating patients.`
  },
  {
    id: 6,
    title: 'HCCAP',
    content: `In 2015, the Nutrition and Food Services Department at Almoosa Hospital won accreditation by HACCP, an international food safety certification in all stages, from catering, storage, cooking, to serving the meal to the final consumer. The criteria have been audited by an independent team of international surveyors from the United Kingdom authorized by the HACCP.`
  },
  {
    id: 7,
    title: 'CAP- College of American Pathologists',
    content: `The Almoosa Specialist Hospital Laboratory won accreditation by the American College of Pathologists (CAP) in 2017. This marked a significant shift in the hospital’s level of patient-centered care by improving the quality of laboratory services, and aiming to conform to best practices for patient safety in the laboratory.
  This accreditation is a sign of the Almoosa Specialist Hospital Laboratory’s a commitment to quality and a pact with the community that the hospital will achieve the highest standards of laboratory services. The laboratory has been always keen to be recognized for its implementation of international standards, particularly those measured by the CAP team from the United States.`
  },
  {
    id: 8,
    title: 'AABB',
    content: `Almoosa Specialist Hospital is also accredited by the American Association of Blood Banks, which is granted to blood banks that conform to the AABB standards and are surveyed every two years for administrative and practical organization and quality control.`
  },
  {
    id: 9,
    title: 'BCOE – Bariatric Center of Excellence 2018',
    content: `The global standard for quality of surgical care. It is focused on improving the safety and quality of patient care and lowering the cost associated with successful treatment.`
  },
  {
    id: 10,
    title: 'KOOP – C. Everett Koop National Health Award 2019',
    content: `The C. Everett Koop National Health Awards recognize outstanding worksite health promotion and improvement programs. The Health Project’s mission is to seek out, evaluate, promote, and disseminate the lessons learned from exemplary health promotion and disease prevention programs with demonstrated effectiveness in influencing personal health habits and cost-effective use of health care resources.`
  }
];
const index = () => {
  return (
    <section className="awards">
      <Container>
        <Row>
          <Col>
            <h2>awards and accreditation</h2>
          </Col>
        </Row>
        <Row className="px-sm-5">
          <Col md={12}>
            <h3 className="pt-5">“ACR” CT Scan accreditation</h3>
          </Col>
        </Row>
        <Row className="px-sm-5">
          {data.slice(0, 8).map(item => (
            <Col lg={6} className="col_1">
              <Card item={item} key={item.id} />
            </Col>
          ))}
        </Row>
        <Row className="px-sm-5 pt-0">
          <Col md={12}>
            <h3>JCIA timeline – 2018</h3>
            <h3 style={{ color: '#593E1B' }}>
              KAQA – King Abdulaziz Quality Award 2018 (Silver Award)
            </h3>
          </Col>
        </Row>
        <Row className="px-sm-5 pt-0">
          {data.slice(8, 10).map(item => (
            <Col lg={6} className="col_2">
              <Card item={item} key={item.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default index;
