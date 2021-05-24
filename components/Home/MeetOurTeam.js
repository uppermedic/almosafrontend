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
              {/* <Markdown>{lang ? data[lang].content : 'Loading'}</Markdown> */}
              <Markdown>
                {lang
                  ? String(strippedContent(data[lang].content)).trim()
                  : 'Loading'}
              </Markdown>
            </p>
            {/* <InputGroup className="search_bar d-flex align-items-center">
              <Input
                className="search_field"
                placeholder="Find Your Doctor......"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup> */}
          </Col>
          <Col
            xs={12}
            lg={6}
            className="section-img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={data.image} alt="Post Image" />
            {/* <Image
              src="/images/home/meet-team.png"
              alt="Picture of the author"
              // width={500}
              // height={400}
              layout="fill"
            /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
