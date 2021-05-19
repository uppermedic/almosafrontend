import React from 'react';
import Hero from 'src/components/layout/Hero';
import { Container, Row, Col } from 'reactstrap';
import {
  PostWithRightImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import SmallGallery from 'src/components/SmallGallery';

const LetsLearn = () => {
  return (
    <section className="lets_learn_section">
      <Hero
        customClassNames="custom_banner_class"
        bg="https://images.unsplash.com/photo-1607031767902-cbabbbc5efc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      >
        <BannerOverlay />
      </Hero>

      <PostWithRightImg
        title="Lets Learn initiative"
        color="#1E455C"
        paragraphs={[
          'Cooperation Agreement between Social Responsibility at the Ministry of Human Resources and Social Development and Al Moosa Specialist Hospital to launch the “let’s learn” initiative'
        ]}
        theImg="https://images.unsplash.com/photo-1521239248915-738394a81876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
      <div className="middle-paragraph">
        <div className="container">
          <p>
            Under the guidance of His Excellency, the Director-General of the
            Ministry of Human Resources and Social Development Branch in the
            Eastern Province, Mr. Abdulrahman bin Fahd Al-Muqbil- the Social
            Responsibility Department at the Ministry’s <br /> branch signed, on
            Monday 19, 2020, a cooperation agreement with Almoosa Specialist
            Hospital to launch the “Let’s Learn” initiative. “Let’s learn” aims
            to provide ( 100) computer devices for the orphans, needy families,
            and other cases sponsored by the Ministry in the Eastern Province to
            ensure the possibility of completing their educational journey
            remotely.
          </p>
          <p>
            ASH provided the devices at a financial cost of about (130,000)
            thousand SR, believing in their social responsibility and their
            national duty towards the individuals, and the Social Responsibility
            <br />
            Department was keen to provide these devices to male and female
            beneficiaries to facilitate their distance learning process
          </p>
        </div>
      </div>

      <SmallGallery
        imgs={[
          'https://images.unsplash.com/photo-1606630987275-5b005f4421ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          'https://images.unsplash.com/photo-1606630987275-5b005f4421ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        ]}
        bgColor="#1E455C"
      />
      <div className="middle-paragraph">
        <div className="container">
          <p>
            the signing ceremony was attended by Mr. Abdulrahman Al-Jouf,
            Director of Public Relations, and some medical and administrative
            personnel. Mr. Malek bin Abdulaziz Almoosa, CEO of Almoosa
            Specialist Hospital, noted the importance of embodying cooperation,
            interdependence, and solidarity between the private sector, <br />
            government sectors, and society members. <br /> Director of
            Marketing and Community Partnerships, Sarah Almoosa, gave a speech
            in which she mentioned the importance of activating such national
            initiatives offered <br /> to society members that contribute to
            advancing development and continuing education for children of
            low-income families.
          </p>
        </div>
      </div>

      <div className="post-two">
        <Container>
          <Row xs="1" lg="2">
            <Col>
              <div className="post-img">
                <img
                  src="https://images.unsplash.com/photo-1606352466047-7cef02b312bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80"
                  alt="post-img"
                />
              </div>
            </Col>
            <Col>
              <div className="post-paragraph">
                <p>
                  The Director of the Social Responsibility Department in the
                  Ministry’s Eastern Province Branch, Khaled bin Ahmed Al-Obaid,
                  expressed his thanks to everyone who participated to make the
                  “let’s Learn” initiative a success “We are confident that the
                  initiative will mark a positive impact and will meet the
                  necessary needs for those students, and will help to alleviate
                  their suffering – we all hope to increase the number of these
                  specific initiatives and projects that aim to achieve the
                  goals of 2030 wise vision.”
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <PostWithCenterImg
        title="Lets Learn initiative"
        paragraphs={[
          'Al-Obaid thanked the success partners, headed by Sarah Almoosa and the Social Responsibility Working Group, both Ms. Samia Salem, Ms. Sumaya Al-Dossary, and all those who contributed to the success of this initiative.'
        ]}
        theImg="https://images.unsplash.com/photo-1605911501215-07abb6b2f623?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
        color="#1E455C"
      />
    </section>
  );
};

export default LetsLearn;

// small Components

const BannerOverlay = () => {
  return (
    <div className="banner-overlay">
      <Container>
        <Row xs="1" sm="2">
          <Col>
            <div className="title">
              <h2>مستشفي الموسي التخصصي</h2>
              <h2>Almosa Specialist Hospital</h2>
            </div>
            <div className="logo">
              <img
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt="logo"
              />
            </div>
          </Col>
          <Col>
            <div className="initiative-name">
              <h2>مبادرة لنتعلم</h2>
              <h2>Let's Learn Initiative</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
