import React from 'react';
import {
  PostWithRightImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import PostHeading from 'src/components/reusableComponents/PostHeading';
import Hero from 'src/components/layout/Hero';
import SmallGallery from 'src/components/SmallGallery';
import { Container, Row, Col } from 'reactstrap';

const PowerOfArt = () => {
  return (
    <section className="power_of_art">
      <Hero bg="/images/community/power-of-art/Hero.png" />

      <PostWithRightImg
        title='What is the "power of art" initiative?'
        color="#55B047"
        paragraphs={[
          'In line with the proposal of his majesty, crown prince, Muhammed Bin Salman regarding directing government agencies to acquire artworks and national craft products at their headquarters',
          'We are honored to launch the “Power of Art” initiative. Because we believe in the importance of art and its role in influencing the individual’s psychological, spiritual, and physical condition',
          'We are launching this fine art competition to encourage the national artistic works and support Saudi ever-growing art in our North Tower',
          'The hallways and hospital rooms will turn into an exhibition enriched with art and beauty.',
          'Let us present an art scene that enhances the mental condition for both patients and employees.'
        ]}
        theImg="/images/community/power-of-art/stilte-ruimte-joseph-cals-1.png"
        customParagraphSize="27px"
      />

      <div className="location">
        <div className="container">
          <PostHeading title="Loaction" color="#1E455C" />
          <div className="location_paragraph">
            <p>
              The exhibition will be in the north tower, <br /> the largest
              medical tower in the region.
            </p>
          </div>

          <div className="location_gallery">
            <Container>
              <Row xs="1" md="2">
                <Col>
                  <img
                    src="/images/community/power-of-art/Mask Group 1.png"
                    alt="location-img"
                  />
                </Col>
                <Col>
                  <img
                    src="/images/community/power-of-art/Mask Group 2.png"
                    alt="location-img"
                  />
                </Col>
                <Col>
                  <img
                    src="/images/community/power-of-art/Mask Group 3.png"
                    alt="location-img"
                  />
                </Col>
                <Col>
                  <img
                    src="/images/community/power-of-art/Mask Group 4.png"
                    alt="location-img"
                  />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="objectives">
            <div className="container">
              <PostHeading title="objectives" color="#55B047" />
              <Container>
                <Row xs="1" lg="3">
                  <Col>
                    <SingleObjectiev
                      bgColor="#FF7800"
                      icon="fas fa-paint-brush"
                      text="To raise the artistic taste of society by visually gratifying it with quality artwork"
                    />
                  </Col>
                  <Col>
                    <SingleObjectiev
                      bgColor="#FFC100"
                      icon="fas fa-user-check"
                      text="To support and encourage young talents and spotlight on local artists"
                    />
                  </Col>
                  <Col>
                    <SingleObjectiev
                      bgColor="#70BA1B"
                      icon="fas fa-paint-brush"
                      text="To support and encourage young talents and spotlight on local artists"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="par_groups">
            <div className="container">
              <PostHeading title="Participating groups" color="#1E455C" />
              <div className="par_groups_paragraph">
                <p>
                  Artwork falling under the following categories will be
                  accepted
                </p>
              </div>
              <div className="groups">
                <Container>
                  <Row xs="1" md="3">
                    <Col>
                      <div className="single_col">
                        <h2>Fine Art</h2>
                      </div>
                      <div className="col_img">
                        <img
                          src="/images/community/power-of-art/power-of-art-08.png"
                          alt="colums-img"
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="single_col">
                        <h2>Photography</h2>
                      </div>
                      <div className="col_img">
                        <img
                          src="/images/community/power-of-art/power-of-art-09.png"
                          alt="colums-img"
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="single_col">
                        <h2>Calligraphy</h2>
                      </div>
                      <div className="col_img">
                        <img
                          src="/images/community/power-of-art/power-of-art-10-1024x725.png"
                          alt="colums-img"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>

          <div className="why_participate">
            <div className="container">
              <PostHeading
                title="Why participate in the Power of Art initiative?"
                color="#55B047"
              />
              <Container>
                <Row xs="1" xl="2">
                  <Col>
                    <div className="post_img">
                      <img
                        src="/images/community/power-of-art/stilte-ruimte-joseph-cals-1024x683.png"
                        alt="why-par img"
                      />
                    </div>
                  </Col>
                  <Col>
                    <p className="firs_paragraph">
                      If you want to unlock your potentials, immortalize your
                      work and leave a mark in this world, through your art, to
                      relieve pain or plant hope in the soul of a person,{' '}
                      <a href="#">join us</a>
                    </p>
                    <div className="blue_div">
                      <p>
                        By sending your artwork (photography – drawing – Arabic
                        calligraphy) to the e-mail:
                        Powerofart@almoosahospital.com.sa
                      </p>
                    </div>
                    <div className="second_paragraph">
                      <p>
                        The paintings will be acquired, and the experts and the
                        jury will determine its value.
                      </p>
                      <p>
                        The paintings will be displayed in the largest tower of
                        its kind in the region; patients and visitors will have
                        the opportunity to enjoy it.
                      </p>
                    </div>
                    <div className="green_div">
                      <p>
                        We will be receiving your artwork: From July 20 to
                        September 1 ,2020
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfArt;

// Help Components

const SingleObjectiev = ({ icon, text, bgColor }) => {
  return (
    <div className="single_objective" style={{ backgroundColor: bgColor }}>
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

/** <i class="fas fa-user-check"></i>*/
