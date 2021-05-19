import { i18n, Link, withTranslation } from "root/i18n";
import React,{useState} from 'react';
import ClassNames from 'classnames'
import {Container, Row, Col, FormGroup, Label,Input} from 'reactstrap';
import Article from './Article'
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
                        <h2 className="d-flex d-lg-blog justify-content-between align-items-center">
                            Blog / article 1 <i class="fas fa-cogs d-lg-none" onClick={()=>setControllerOpen(!controllerOpen)}></i>
                        </h2>
                    </Col>
                </Row>
                <Row className="inner-content justify-content-between">
                    <Col xs ={12} lg={6}>
                        <Article />
                    </Col>
                    <Col lg={4} className={ClassNames("controller",{open:controllerOpen})}>
                        <div className="search">
                            <FormGroup>
                                <Label for="exampleSearch">Search</Label>
                                <Input
                                    type="search"
                                    name="search"
                                    id="exampleSearch"
                                    placeholder="Type to search....."
                                />
                            </FormGroup>
                        </div>
                        <div className="categories">
                            <h4>
                                Categories:
                            </h4>
                            <ul className="list-unstyled">
                                <li className="active">
                                    <Link href="#!">
                                        <a>
                                            All
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            General
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            General
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            General
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            General
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* 
                        **  Popular Posts 
                        */}
                        <div className="popular-posts">
                            <h4>
                                Popular Posts:
                            </h4>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="#!">
                                        <a>
                                            <img src="" />
                                            <div>
                                                <h5>write Title here </h5>
                                                <p>
                                                    some content here some content here some content here some content here
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            <img src="" />
                                            <div>
                                                <h5>write Title here </h5>
                                                <p>
                                                    some content here some content here some content here some content here
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            <img src="" />
                                            <div>
                                                <h5>write Title here </h5>
                                                <p>
                                                    some content here some content here some content here some content here
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* 
                        **  tags 
                        */}
                        <div className="tags">
                            <h4>
                                Tags:
                            </h4>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="#!">
                                        <a>
                                            All
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            General
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            General
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            General
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>
                                            General
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}
