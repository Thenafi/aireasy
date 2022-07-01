
import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


function Purchase() {
    let navigate = useNavigate();
    function goPurchase() {
      navigate("/dashboard");
    }
    return(
      <div className='body py-3 '>
       
        <Button onClick={goPurchase}  className='btn text-right float-right m-1'>Return dashboard
        </Button>
        <h1 className='text-center pt-5'>Unlock Marketminder</h1>
        <p className='text-center'>Choose either the city or a neighborhood where you'd like to receive access.</p>
        <Col className='mx-auto pt-2'>
            <Card className="m-1 rounded mx-auto card_puechase_top bg-transparent border-0">
                <Row>
                    <Button className='text-center mx-1 col' variant='info'> Billed Monthly</Button>
                    <Button className='text-center mx-1 col' variant='info'> Billed Annually</Button>
                    <p className='text-muted text-center py-1'>Save 40%</p>
                </Row>
            </Card>
        </Col>
        

        <Col lg={12} className="py-3 mb-3">
            <Row>
                <Card border="light" className="m-1 rounded card_purchase mx-auto">
                    <Card.Body>
                        <h4 className='pb-5 pt-2'>Neighborhood Plan</h4>
                        <hr />
                        <p className='pb-5'>90272 is the only neighborhood in Pacific Palisades. We have upgraded you to the city plan at no additional cost</p>
                        <a className='text-center mx-auto btn btn-outline-primary col-11'> Select</a>
                    </Card.Body>
                </Card>
                <Card border="light" className="m-1 rounded card_purchase mx-auto">
                    <Card.Body>
                        <h4 className='pb-5 pt-2'>City plan</h4>
                        <h1>$23.99/mo</h1>
                        <h5>$191.45 saved annually</h5>
                        <hr />
                        <p className='py-2'>Pacific Palisades</p>
                        <p className='py-2 pb-4'>Access pricing, reservation data, and unlimited Rentalizer access on 112 active listings in 1 neighborhood.</p>
                        <a className='text-center mx-auto btn btn-outline-primary col-11 active'> Select</a>
                    </Card.Body>
                </Card>
                <Card border="light" className="m-1 rounded card_purchase mx-auto">
                    <Card.Body>
                        <h4 className='pb-5 pt-2'>Global Unlimited Plan</h4>
                        <h1>$599.99/mo</h1>
                        <h5>$4799.45 saved annually</h5>
                        <hr />
                        <p className='py-2'>Unlimited access to all global markets</p>
                        <p className='py-2 pb-4'>Access pricing, reservation data, and unlimited Rentalizer access on 10 million active listings in 191 countries, and over 100,000 cities and neighborhoods</p>
                        <a className='text-center mx-auto btn btn-outline-primary col-11'>Select</a>
                    </Card.Body>
                </Card>
            </Row>
        </Col>
        <Row className='container d-block mx-auto'>
            <Card className='py-5'>
                <Row>
                    <Col lg={5} className="mx-auto">
                        <Card border="light" className="m-1 rounded mx-auto card_purchase_btm">
                            <Card.Body>
                                <h3 className='py-2'>Payment Details</h3>
                                <input type="number" placeholder='Card Number' className='border-0 col-8 py-3 my-3'/>
                                <input type="date" className='border-0' />
                                <br />
                                <input type="text" placeholder='promo code' className='border-0 col-8 py-3 my-3' />
                                <a className='text-center mx-auto btn btn-outline-dark mx-2 px-5'>Apply</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className="mx-auto">

<Card border="light" className="m-1 rounded mx-auto card_purchase_btm">
                            <Card.Body>
                                <h3 className='py-2'>Order Summary</h3>
                                <p className='py-2'><b>Global Plan</b></p>
                                <p className='py-2'><b className='display-4'>$7199.95</b> billed annually in advance</p>
                                <a className='text-center mx-auto btn btn-outline-dark col-12 mx-2'>Purchase Now</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Row>

      </div>
    )
}
export default Purchase;