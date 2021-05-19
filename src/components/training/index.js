import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SelectBox from '../layout/SelectBox';
import Event_card from './Event-Card';
export default function index() {
  const data = [
    {
      id: 1,
      eventDate: '30 Nov',
      eventTitle: 'Event Title Here',
      eventDescription: 'text here ',
      eventEnd: '2 Dec',
      eventCost: 'Free',
      bg: '/images/training/event/eventImg.png',
      eventInfo: '/training-education/event'
    },
    {
      id: 1,
      eventDate: '30 Nov',
      eventTitle: 'test',
      eventDescription: 'test',
      eventEnd: '2 Dec',
      eventCost: 'Free',
      bg: '/images/training/event/eventImg.png',
      eventInfo: '/training-education/event'
    },
    {
      id: 1,
      eventDate: '30 Nov',
      eventTitle: 'test',
      eventDescription: 'test',
      eventEnd: '2 Dec',
      eventCost: 'Free',
      bg: '/images/training/event/eventImg.png',
      eventInfo: '/training-education/event'
    },
    {
      id: 1,
      eventDate: '30 Nov',
      eventTitle: 'test',
      eventDescription: 'test',
      eventEnd: '2 Dec',
      eventCost: 'Free',
      bg: '/images/training/event/eventImg.png',
      eventInfo: '/training-education/event'
    },
    {
      id: 1,
      eventDate: '30 Nov',
      eventTitle: 'test',
      eventDescription: 'test',
      eventEnd: '2 Dec',
      eventCost: 'Free',
      bg: '/images/training/event/eventImg.png',
      eventInfo: '/training-education/event'
    },
    {
      id: 1,
      eventDate: '30 Nov',
      eventTitle: 'test',
      eventDescription: 'test',
      eventEnd: '2 Dec',
      eventCost: 'Free',
      bg: '/images/training/event/eventImg.png',
      eventInfo: '/training-education/event'
    }
  ];
  const handleChange = e => {
    console.log(e.target.value);
  };
  return (
    <section className="events">
      <Container>
        <Row className="event-filters mx-2">
          <Col>
            <SelectBox
              options={[
                ['All Time', 'all'],
                ['2018', '2018'],
                ['2019', '2019'],
                ['2020', '2020'],
                ['2021', '2021']
              ]}
              handleChange={handleChange}
            />
          </Col>
          <Col>
            <SelectBox
              // Obtions is array of arrays, first item is value of user, second for backend
              options={[
                ['All Categories', 'all'],
                ['Art', 'art'],
                ['Health', 'health'],
                ['Courses', 'courses'],
                ['Conferences', 'conferences']
              ]}
              handleChange={handleChange}
            />
          </Col>
          <Col lg={{ size: 3, offset: 1 }}>
            <button>Find Events</button>
          </Col>
        </Row>
        <Row className="mx-2 pt-5">
          {data.map(card => (
            <Col md={4} className="px-sm-5 py-5">
              <Event_card key={card.id} cardData={card} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
