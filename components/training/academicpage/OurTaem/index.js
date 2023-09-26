import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import TeamItem from './TeamItem';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function OurTeam({ ourTeamData }) {
const { t } = useTranslation('common');

  const router = useRouter();
  const { locale } = router;

  const [objectIndex, setobjectIndex] = useState(4);
  const [showToggle, setshowToggle] = useState(false);

  const handleToggleShowMore = async () => {
    await setshowToggle(!showToggle);
    if (showToggle) {
      await setobjectIndex(4);
    } else {
      await setobjectIndex(ourTeamData?.length);
    }
  };

  return (
    <section className="our-team">
      <div className="team-container">
        <Row>
          <Col>
            <h2 className="section-title">
              {locale == 'en' ? 'Our Team' : 'فريقنا'}
            </h2>
          </Col>
        </Row>
        <Row xs="1" sm="2" md="3" lg="4" style={{ marginTop: 44 }}>
          {ourTeamData?.length > 0 &&
            ourTeamData?.slice(0, objectIndex)?.map((item, index) => (
              <Col>
                <TeamItem team={item} key={index} />
              </Col>
            ))}
        </Row>
        {ourTeamData?.length > 4 && (
          <Row>
            <Col>
              <button
                className="btn show_more_team"
                onClick={handleToggleShowMore}
              >
                {showToggle ? t('show_less') : t('show_more')}
              </button>
            </Col>
          </Row>
        )}
      </div>
    </section>
  );
}
export default OurTeam;
