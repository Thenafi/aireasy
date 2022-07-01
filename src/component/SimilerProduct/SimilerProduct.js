import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card,Col,Row} from 'react-bootstrap';
import React from 'react';
import AirEasyMobile from '../../Logo/bed.jpg'

function SimilerProduct() {
    return(
        <Col className="marginTop">
            <Card className="my-3 px-2 displayCard_4 mx-4">
                <Row className="mt-3">

                    <Col lg={3}>
                        <Card border="light" className="m-1 rounded border-0">
                            <Card.Body>
                                <Card.Img variant="top" src={AirEasyMobile} className="d-block mx-auto w-75 mt-1 mb-1"/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card border="light border-0 py-5" >
                            <Card.Body className="">
                                <Card.Title>
                                    <h1>Best Home: 1Bd/1Ba and Steps to downtown MV</h1>
                                    <small>Account: Samszuo@gmail.com</small>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card border="light text-light border-0 py-5 mb-3 propertyLeft" >
                            <Card.Body className="">
                                <Card.Title>
                                    <h3>Annual Occupancy</h3>
                                    <h1>55%</h1>
                                    <hr className="bg-dark p-1 rounded" />
                                    <h3>Annual Revenue</h3>
                                    <h1>24161 USD</h1>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
export default SimilerProduct;