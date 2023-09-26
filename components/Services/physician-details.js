import { Row, Col } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import { strippedContent } from 'src/utils/helpers.js';
import { useRouter } from 'next/router';

const Index = ({ data, setcurrentDoctor, currentDoctor }) => {
const { t } = useTranslation(['common', 'menu']);

  const router = useRouter();
  const { locale } = router;


  return (
    <div className="physician">
      <Row className="physician-details m-auto">
        {/*  the comming data will come when create main physician key and value  */}
        <Col lg={4} className="physician-img">
          <img
            src={currentDoctor.image}
            alt={locale && currentDoctor[locale].name}
            className="shadow"
          />
        </Col>
        <Col lg={{ size: 8 }} className="pl-sm-5 pr-4 pt-4">
          <h3 className="physician-name">
            {locale && currentDoctor[locale]?.name}
          </h3>
          <p className="py-2">{locale && currentDoctor[locale]?.title}</p>
          {locale &&
            currentDoctor[locale]?.qualifications &&
            currentDoctor[locale].qualifications.length > 0 && (
              <>
                <h3 className="physician-qualifications">
                  {t('common:qualifications')}
                </h3>

                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: locale
                        ? strippedContent(
                            currentDoctor[locale]?.qualifications
                          )
                        : ''
                    }}
                  />
                </p>
              </>
            )}
          {locale &&
            currentDoctor[locale]?.current_positions &&
            currentDoctor[locale]?.current_positions.length > 0 && (
              <>
                <h3 className="physician-position">
                  {t('common:current_positions')}
                </h3>
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: locale
                        ? strippedContent(
                            currentDoctor[locale]?.qualifications
                          )
                        : ''
                    }}
                  />
                </p>
              </>
            )}
        </Col>
      </Row>
    </div>
  );
};
export default Index;
