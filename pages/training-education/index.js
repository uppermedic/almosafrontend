import React from 'react';
import Training from 'src/components/training';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';

const train_education = ({
  educationData,
  eventData,
  courseData,
  ourTeamData
}) => {
  const lang = i18n.language;
  if (educationData) {
    return (
      <div className="training-education">
        {/*   "images/training/hero.png" */}
        {/* <Hero bg={educationData.page.page_cover}>
          <div className="heroText">
            <p>
              {(lang == 'en' && 'BE UP TO DATE WITH LATEST') ||
                'كن على اطلاع بأحدث '}
              <br />
              <span>
                {(lang == 'en' && 'COURSES & EVENTS') || 'الدورات والفعاليات'}
              </span>
            </p>
          </div>
        </Hero> */}
        <Head data={educationData.page.seo}></Head>
        <Training
          data={{
            eventData: eventData,
            courseData: courseData,
            educationData: educationData,
            ourTeamData: ourTeamData
          }}
        />
      </div>
    );
  } else {
    return 'Loading';
  }
};

export async function getServerSideProps(context) {
  const tst = Promise.all([
    fetchData('/education'),
    fetchData('/education/type/event'),
    fetchData('/education/type/course'),
    fetchData('education/academic/team')
  ]).then(
    ([
      { error: error1, data: educationData },
      { error: error2, data: eventData },
      { error: error3, data: courseData },
      { error: error4, data: ourTeamData }
    ]) => {
      if (error1 || error2 || error3 || error4) {
        return {
          notFound: true
        };
      }
      return {
        props: {
          educationData,
          eventData,
          courseData,
          ourTeamData
        }
      };
    }
  );

  return tst;
}

export default train_education;
