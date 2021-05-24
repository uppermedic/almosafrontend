import { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { withRouter } from 'next/router';

import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
  Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { employee_portal, volunteering, join_us } from 'src/constants/Data';

const SearchNav = ({ t, router }) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    setSearch(router.query.search);
    return () => {};
  }, [router?.query?.search]);
  return (
    <Row className="right_links">
      <Col sm={12} md={8} className="right_link">
        <Link href={employee_portal}>
          <a className="bt-light" target="_blank">
            <span className="icon">
              <i className="fas fa-users"></i>
            </span>
            <span className="text">{t('header:for_staff_only')}</span>
          </a>
        </Link>

        <Link href={volunteering}>
          <a className="bt-light" target="_blank">
            <span className="icon">
              <i className="fas fa-hand-holding-heart"></i>
            </span>
            <span className="text">{t('header:volunteering')}</span>
          </a>
        </Link>
        <Link href={join_us}>
          <a className="bt-blue" target="_blank">
            <span className="icon ">
              <i className="fas fa-user-tie"></i>
            </span>
            <span className="text">{t('header:join_our_team')}</span>
          </a>
        </Link>
      </Col>
      <Col sm={12} md={4} className="right_link">
        <Form action="/media-center/blog/search-result?" className="w-100">
          <InputGroup className="search-nav">
            <Input
              name="search"
              type="search"
              // placeholder={t('search_blog')}
              value={search}
              onChange={({ target: { value } }) => setSearch(value)}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
};
SearchNav.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(withRouter(SearchNav));
