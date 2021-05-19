import React from "react";
import { Container, Row, Col } from "reactstrap";
import Item from "./Item";
import SelectBox from "src/components/layout/SelectBox";
const data = [
  {
    id: 1,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 2,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 3,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
  {
    id: 4,
    title: "Almoosa Magazine number 1",
  },
];
export default function index() {
  return (
    <section className="content-wrapper">
      <Container>
        <Row className="headingSection pb-2 mx-2">
          <Col xl={6} className="px-1">
            <span>Hakeem Magazine</span>
          </Col>
          <Col xl={3} md={6}>
            <SelectBox
              options={[
                ["Show", "show"],
                ["6", "6"],
                ["9", "9"],
                ["12", "12"],
                ["15", "15"],
                ["ALL", "all"],
              ]}
            />
          </Col>
          <Col xl={3} md={6}>
            <SelectBox
              options={[
                ["Date", "date"],
                ["2020", "2020"],
                ["2017 - 2019", "2017-2019"],
                ["2014 - 2016", "2014-2016"],
                ["2011 - 2013", "2011-2013"],
                ["ALL", "all"],
              ]}
            />
          </Col>
        </Row>
        <Row className="mx-1">
          <div className="overlay" />
          {data.map(item => (
            <Col className="px-4" md={4} key={item.id}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
