import React from 'react';
import Hero from 'src/components/layout/Hero';
import PageHeading from 'src/components/Services/inpatient/reusable-page-heading/index.js';
import ColumnsOfText from 'src/components/Services/inpatient/re-columns-text/index.js';
import ReusableTabs from 'src/components/Services/re-tabs/index.js';

const Content = () => {
  return (
    <div className="intensive-unit-content">
      <Hero bg="/images/services/inpatient-units/intensive-unit/banner.png">
        <PageHeading title="Intensive Unit (ICU)" />
      </Hero>
      <ColumnsOfText data={data.columnsOfText} />
      <ReusableTabs data={data.tabsData} videoContent />
    </div>
  );
};

export default Content;

const data = {
  columnsOfText: [
    {
      text: (
        <div>
          <p>
            In the Intensive Care Unit, patients get continuous monitoring and
            treatment, benefiting from a higher level of safety and prevention
            of any undesirable situations that may arise during a patient stay.
            When you put yourself in the patient shoes, you start to think of
            every detail not only from medical perspective but also from the
            patient/human point of view. The intensive care center is designed
            by the specialized company D.I.R.T. All the rooms are single room
            with access to natural sunlight’s to increase the privacy and
            decrease the infection rates. In addition to the appealing and
            relaxing colors to reduce the level of anxiety and stress for both
            patient and caregivers. The ICU is under the supervision of
            specialized multi-disciplinary team of consultants, respiratory
            therapist and physiotherapist. The nurses can monitor the patient
            smartly and innovatively in a ratio of 1 nurse to 1 patient or 1 to
            2 ratio maximum. The decentralized nursing station provides privacy
            comfort and quietness. This evidence-based design is internationally
            approved to increase the efficiency of the staff and decrease the
            noise. We believe in the importance of family and friends in
            providing the support. Therefore, we allow a companion inside the
            intensive care units to stay with his loved one for 24 hours. The
            ICU is equipped with the most advanced INTOUCH STRYKER beds .the
            beds have a very high technology which allows the patient or the
            caregiver to control all the function through a very simple system.
          </p>
        </div>
      )
    },
    {
      text: (
        <div>
          <p>
            The flexibility of the bed increase the level of safety and prevent
            the falls. The multi-language audio instruction feature allows the
            caregiver to communicate easily with patients and family member it
            can also be used to relax the patient by playing natural soothing
            sounds or Quran. To keep the lowest infection rate, we installed the
            I360 Hygiene system for monitoring the compliance of hand washing
            between the staff. We follow a very strict procedure, and it’s
            monitored by the infection prevention department continuously.
            AlMoosa ICU has not only the best experts in the critical care field
            also has the best update modern equipment with capabilities of doing
            most of the invasive procedures bed side. One of the unique features
            is having CT scan inside the ICU to avoid transferring patients
            outside the unit which provide fast, safe and practical access. On
            the top of individual contentious monitor for every room another
            combined telemetry in the nursing station to provide another safety
            monitoring gate for our patients. Each patient is been discuss daily
            in details with all his laboratory results and live imaging in hand
            in special screen by multidisciplinary team to make sure the best
            management is provided. All the ICU pathways and protocols following
            the best international evidence base knowledge and practice
          </p>
        </div>
      )
    }
  ],
  tabsData: [
    {
      title: 'Educational and Advertising Materials',
      content: (
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Fjhpa7ja7zw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )
    },
    {
      title: 'Our Physicians',
      content: (
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GyBGFyP82fU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )
    }
  ]
};
