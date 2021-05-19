import React from 'react'
import { i18n, Link, withTranslation } from "root/i18n";
import {Row, Col} from 'reactstrap';
export default function Post() {
    return (
        <div className="post-card">
            <Row className="">
                <Col lg={3} >
                    <img src="/images/Blog/post-img.png" alt="" srcset=""/>    
                </Col>
                <Col lg={6} className="mt-4 mt-lg-0 offset-lg-1">
                    <div className="title">
                        <h3>write article title here</h3> 
                        <div>
                            <span>
                                PREMENSTRUAL SYNDROME (PMS) | 
                            </span>
                            <span>
                                July 20, 2020 | Name
                            </span>
                        </div>  
                    </div>
                    
                    <div className="description">
                        <p>
                        Ambiguity surrounds the changes that occur to the female before menstruation and the menstrual CYCLE, unfortunately there are lot of misconceptions around that topic, in this article we will try to cover a phenomenon that every female should know and be aware of. Premenstrual syndrome
                        </p>
                        <Link href="/blog">
                            <a>
                                Read More...
                            </a>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
