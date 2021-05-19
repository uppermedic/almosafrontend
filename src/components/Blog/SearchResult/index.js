import { i18n, Link, withTranslation } from "root/i18n";
import React,{useState} from 'react';
import ClassNames from 'classnames'
import {Container, Row, Col, FormGroup, Label,Input} from 'reactstrap';
import ResultPost from './ResultPost'
const data=[
    {
        id: 1,
        title: "Power of Art Initiative",
        bg: "/images/community/power-of-art.png",
        ribbon_class: 'green',
        url: '/community/for-patients'
    }
]
export default function index() {
    const [controllerOpen, setControllerOpen] = useState(false);

    return (
        <section className="content-wrapper">
            <Container>
                <Row>
                    <Col>
                        <h2>Search Result</h2>
                    </Col>
                </Row>
                <Row className="inner-content">
                    <Col xs={12}>
                        <div className="search">
                            <FormGroup row className="m-0 p-0 justify-content-between align-items-center">
                                <Label for="exampleSearch">New search :</Label>
                                <Input
                                    type="search"
                                    name="search"
                                    id="exampleSearch"
                                    placeholder="Type to search....."
                                />
                            </FormGroup>
                        </div>
                    </Col>
                    <Col>
                        <ResultPost />
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}
