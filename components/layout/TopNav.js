import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';

import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
  Col,
  Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { employee_portal, volunteering, join_us } from 'src/constants/Data';
import LangNav from './LangIconNav';

const TopNav = () => {
  const { t } = useTranslation('header');

  const router=useRouter()
  const { locale , query} = router;

  const [search, setSearch] = useState('');
  useEffect(() => {
    if (query?.search) {
      setSearch(query.search);
    } else {
      setSearch('');
    }
  }, [query?.search]);
  return (
    <div className="top-nav">
      <Container>
        <Row>
          <Col xs={12} md={2} className="d-none d-sm-block">
            <LangNav />
          </Col>
          <Col
            xs={12}
            md={10}
            className="d-flex justify-content-end green-top-nav"
          >
            <Row className="right_links w-100">
              <Col xs={12} xl={9} className="right_link">
                <div className="big-screens">
                  <Link href={employee_portal}>
                    <a
                      className="bt-light"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <span className="icon">
                        <i className="fas fa-users"></i>
                      </span>
                      <span className="text">{t('header:for_staff_only')}</span>
                    </a>
                  </Link>

                  <Link href={volunteering}>
                    <a
                      className="bt-light"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <span className="icon">
                        <i className="fas fa-hand-holding-heart"></i>
                      </span>
                      <span className="text">{t('header:volunteering')}</span>
                    </a>
                  </Link>
                  <Link href={`/${locale}/career`}>
                    <a className="bt-blue">
                      <span className="icon ">
                        <i className="fas fa-user-tie"></i>
                      </span>
                      <span className="text">{t('header:join_our_team')}</span>
                    </a>
                  </Link>

                  <Link href={`https://almoosahomehealthcare.org/`}>
                    <a className="bt-blue" rel="noopener noreferrer nofollow">
                      <span className="text">
                        {t('header:almoosa_home_healthcare')}
                      </span>
                    </a>
                  </Link>
                </div>
                <Row className="small-screens">
                  <Col xs={12} className="mt-2">
                    <Link href={employee_portal}>
                      <a
                        className="bt-light"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <span className="icon">
                          <i className="fas fa-users"></i>
                        </span>
                        <span className="text">
                          {t('header:for_staff_only')}
                        </span>
                      </a>
                    </Link>

                    <Link href={volunteering}>
                      <a
                        className="bt-light"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <span className="icon">
                          <i className="fas fa-hand-holding-heart"></i>
                        </span>
                        <span className="text">{t('header:volunteering')}</span>
                      </a>
                    </Link>
                  </Col>
                  <Col xs={12} className="mt-2">
                    <Link href={`/${locale}/career`}>
                      <a className="bt-blue">
                        <span className="icon ">
                          <i className="fas fa-user-tie"></i>
                        </span>
                        <span className="text">
                          {t('header:join_our_team')}
                        </span>
                      </a>
                    </Link>

                    <Link href={`https://almoosahomehealthcare.org/`}>
                      <a className="bt-blue" rel="noopener noreferrer nofollow">
                        <span className="text">
                          {t('header:almoosa_home_healthcare')}
                        </span>
                      </a>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} xl={3} className="right_link">
                <div
                  className="d-block d-sm-none text-center"
                  style={{ width: '30%' }}
                >
                  <LangNav />
                </div>
                <Form action="/search-result?" className="w-100">
                  <InputGroup className="search-nav">
                    <Input
                      name="search"
                      type="search"
                      value={search}
                      onChange={({ target: { value } }) => setSearch(value)}
                    />
                    <InputGroupAddon addonType="append">
                      <Link href={`/${locale}/search-result/?search=${search}`}>
                        <a>
                          <InputGroupText>
                            <FontAwesomeIcon icon={faSearch} />
                          </InputGroupText>
                        </a>
                      </Link>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default (withRouter(TopNav));
