import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { strippedContent } from 'src/utils/helpers';

export default function MeetOurTeam({ data }) {
  const lang = i18n.language;
  return (
    <section className="meet-our-team">
      <img
        src="images/home/meet-team-zigzag-img.png"
        alt=""
        className="top-zigzag-img"
      />
      <Container>
        <Row>
          <Col xs={12} lg={6} data-aos="fade-up" data-aos-duration="1000">
            <h2>{lang ? strippedContent(data[lang].title) : 'Loading'}</h2>
            <p>
              <Markdown>
                {lang
                  ? String(strippedContent(data[lang].content)).trim()
                  : 'Loading'}
              </Markdown>
            </p>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="section-img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={data.image} alt="Post Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
