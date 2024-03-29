import React, { useState } from 'react';
import { Button, CardGroup, Col, Container, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Assets/style.css";
import AirbnbSize from "./component/AirbnbSize/AirbnbSize";
import Amenities from "./component/Amenities/Amenities";
import AverageDailyRate from "./component/AverageDailyRate/AverageDailyRate";
import LeftMenu from "./component/LeftMenu/LeftMenu";
import Mapp from "./component/Map/Mapp";
import MultiRangeSlider from "./component/multiRangeSlider/MultiRangeSlider";
import OccupancyRate from "./component/OccupancyRate/OccupancyRate";
import ProfitSimulation from "./component/ProfitSimulation/ProfitSimulation";
import RentalSetting from "./component/RentalSetting/RentalSetting";
import RentalSize from "./component/RentalSize/RentalSize";
import RentalType from "./component/RentalType/RentalType";
import Revenue from "./component/Revenue/Revenue";
//import SimilerProduct from "./component/SimilerProduct/SimilerProduct";
import SearchBar from "./SearchBar";
function AllFile() {
  
    const [click,setClick]=useState(false);
    const [clickLogin,setClicklogin]=useState(false);
    const [clickFilter,setClickFilter]=useState(false);

    

  return (
    <div className="body ">
      <Container fluid className="m-0 p-0">
        <Row>

          {/* left menu */}

          <Col xl={2} className="md-2 m-0 p-0 SaidMenu">

            <LeftMenu lg={12} style={{}} className="fixed-top" />

          </Col>

          {/* main body */}
          <Col xl={10} className="m-0 pb-3">
            
            {/* top navigation */}
            <Col lg={12}>

              <Navbar bg="light" expand="lg" className="">
                <Container fluid className="px-3">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-1" />
                  <Navbar.Collapse >
                
                  <SearchBar/>

                      <Nav.Link className="m-1 p-2 btn btn-secondary Button" href="#" style={{color: '#fff'}}>View Unlocked Market</Nav.Link>

                      <hr className="w-100 SimilarPropertiesQuary" />
                    
               
                      <Nav.Link className="m-1 p-2 btn btn-dark SimilarPropertiesQuary" style={{color: '#fff'}}>Overview</Nav.Link>
                 


             
                      <Nav.Link className="m-1 p-2 btn btn-dark SimilarPropertiesQuary"  style={{color: '#fff'}}>Similar Properties</Nav.Link>
                
                      
                      <hr className="w-100 SimilarPropertiesQuary" />
                        
                    <Nav
                      className="ms-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      <Nav.Link href="#" onClick={()=> setClick(true)} className="m-1 p-2 btn Button" style={{color: '#fff'}}>Sign Up</Nav.Link>

                        {/* signup modal */}
                        <Modal show={click}>

                          {/* <Modal.Header>Modal head</Modal.Header> */}

                          <Modal.Body>
                            <Form className="py-5 px-2">
                              <h1 className="text-dark text-center text-bolder">Sign Up</h1>
                              <hr variant="primary" className="py-1 bg-primary w-75 mx-auto" />
                              <Row>
                                <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="formBasicFirstName">
                                  <Form.Control type="text" placeholder="First Name" required />
                                </Form.Group>

                                <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="formBasicLastName">
                                  <Form.Control type="text" placeholder="Last Name" required />
                                </Form.Group>
                              </Row>

                              <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicUsername">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="text" placeholder="Enter Username" required />
                              </Form.Group>

                              <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" required />
                              </Form.Group>

                              <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" required />
                              </Form.Group>

                              <Form.Group className="mb-3 col-11 ms-4 text-muted" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I agree to the terms of service and the privacy policy" required />
                              </Form.Group>

                              <Button variant="primary" className="m-1 col-4 ms-4" type="submit" onClick={()=> setClick(false)}>
                                Submit
                              </Button>
                              <Button variant="primary" className="m-1 col-4 ms-4" onClick={()=> setClick(false)}>
                                Close
                              </Button>

                              <hr variant="primary" className="bg-primary w-75 mx-auto" />
                              <p className="text-center">I have an account <button onClick={()=> setClicklogin(true)} className="text-primary">Log In</button></p>

                            </Form>
                          </Modal.Body>


                          {/* <Modal.Footer></Modal.Footer> */}

                        </Modal>

                      <Nav.Link href="#" onClick={()=> setClicklogin(true)} className="m-1 p-2 btn Button" style={{color: '#fff'}}>Log In</Nav.Link>

                        {/* login modal */}
                        <Modal show={clickLogin}>

                          {/* <Modal.Header>Modal head</Modal.Header> */}

                          <Modal.Body>
                            <Form className="py-5 px-2">
                              <h1 className="text-dark text-center text-bolder">Log In</h1>
                              <hr variant="primary" className="py-1 bg-primary w-75 mx-auto" />
                              
                              <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicUsername">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="text" placeholder="Enter username" required />
                              </Form.Group>

                              <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" required />
                              </Form.Group>

                              <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" required />
                              </Form.Group>

                              <Form.Group className="mb-3 col-11 ms-4 text-muted" controlId="formBasicRemember">
                                <Form.Check type="checkbox" label="Remember Me" required />
                              </Form.Group>

                              <Button variant="primary" className="m-1 col-4 ms-4" type="submit" onClick={()=> setClicklogin(false)}>
                                Submit
                              </Button>
                              <Button variant="primary" className="m-1 col-4 ms-4" onClick={()=> setClicklogin(false)}>
                                Close
                              </Button>

                              <hr variant="primary" className="bg-primary w-75 mx-auto" />
                              <p className="text-center">I don't have an account <button onClick={()=> setClick(true)} className="text-primary">Sign Up</button></p>

                            </Form>
                          </Modal.Body>


                          {/* <Modal.Footer></Modal.Footer> */}

                        </Modal>

                      {/* <div className="vr mx-2"></div> */}
                      <Nav.Link href="#" onClick={()=> setClickFilter(true)} className="m-1 p-2 btn Button" style={{color: '#fff'}}>Filter</Nav.Link>
                        
                        {/* filter modal */}
                        <Modal show={clickFilter}>

                          {/* <Modal.Header>Modal head</Modal.Header> */}

                          <Modal.Body>
                            <Form className="py-5 px-2">
                              <h1 className="text-dark text-left text-bolder">Filter</h1>
                              <hr variant="primary" className="py-1 bg-primary mx-auto" />
                                
                              <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicType">
                                <Form.Label>Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                  <option>Rental Type</option>
                                  <option value="1">Entire Home</option>
                                  <option value="2">Private Room</option>
                                  <option value="3">Shared Room</option>
                                </Form.Select>
                              </Form.Group> 


                              <Form.Group className="mb-3 col-11 mx-auto my-2 pb-5" controlId="BedRoom">

                                <Form.Label>Bedrooms</Form.Label>
                                <MultiRangeSlider
                                  className="py-2"
                                  min={1} 
                                  max={8} 
                                  onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} 
                                />

                              </Form.Group>
                              <Form.Group className="mb-3 col-11 mx-auto my-2 pb-5" controlId="BathRoom">

                                <Form.Label>Bathrooms</Form.Label>
                                <MultiRangeSlider
                                  className="py-2"
                                  min={1} 
                                  max={6} 
                                  onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} 
                                />

                              </Form.Group>
                              <Form.Group className="mb-3 col-11 mx-auto my-2 pb-5" controlId="MinimumStay">

                                <Form.Label>minimum Stay</Form.Label>
                                <MultiRangeSlider
                                  className="py-2"
                                  min={1} 
                                  max={31} 
                                  onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} 
                                />

                              </Form.Group>

                              <Form.Group className="mb-3 col-11 mx-auto" controlId="formBasicAmenities">
                                <Form.Label>Amenities</Form.Label>
                                  <Row>
                                    <Col md={6}>
                                      <Form.Check 
                                        type="switch"
                                        id="custom-switch-1"
                                        label="Air Conditioning"
                                      />
                                      <Form.Check 
                                      type="switch"
                                      id="custom-switch-2"
                                      label="Heating"
                                      />
                                      <Form.Check 
                                      type="switch"
                                      id="custom-switch-3"
                                      label="Washer"
                                      />
                                      <Form.Check 
                                      type="switch"
                                      id="custom-switch-4"
                                      label="Dryer"
                                      />
                                      <Form.Check 
                                      type="switch"
                                      id="custom-switch-5"
                                      label="Kitchen"
                                      />
                                    </Col>
                                    <Col md={6}>
                                      <Form.Check 
                                        type="switch"
                                        id="custom-switch-6"
                                        label="Parking"
                                      />
                                      <Form.Check 
                                      type="switch"
                                      id="custom-switch-7"
                                      label="Internet"
                                      />
                                      <Form.Check 
                                      type="switch"
                                      id="custom-switch-8"
                                      label="Cable TV"
                                      />
                                      <Form.Check 
                                      type="switch"
                                      id="custom-switch-9"
                                      label="Pool"
                                      />
                                      <Form.Check 
                                      type="switch"
                                      id="custom-switch-10"
                                      label="hot Tub"
                                      />
                                    </Col>
                                  </Row>
                              </Form.Group>

                              <Button variant="primary" className="m-1 col-4 ms-4" onClick={()=> setClickFilter(false)}>
                                Update
                              </Button>

                              <Button variant="primary" className="m-1 col-4 ms-4" onClick={()=> setClickFilter(false)}>
                                Close
                              </Button>

                            
                            </Form>
                          </Modal.Body>


                          {/* <Modal.Footer></Modal.Footer> */}

                        </Modal>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

            </Col>
            
            {/* top 3 card */}
            <Col lg={12} className="mt-5">
              <Row >

                <CardGroup className="px-4 mt-4">

                  <AverageDailyRate />

                  <OccupancyRate />

                  <Revenue />

                </CardGroup>

              </Row>
            </Col>

            {/* Profit simulation and Map */}
            <Col lg={12}>
              <Row className="mt-3 px-4">

                {/* Profit simulation */}
                <Col lg={4}>
                  <ProfitSimulation />
                </Col>

                {/* Map */}
                <Col lg={8}>
                  <Mapp />
                  <RentalSetting />
                </Col>
              </Row>
            </Col>

            {/* Rental Type and Rental Size */}
            <Col lg={12}>
              <Row className="mt-3 px-4">

                {/* Rental Type */}
                <Col lg={6}>
                  <RentalType />
                </Col>

                {/* Rental Size */}
                <Col lg={6}>
                  <RentalSize />
                </Col>
              </Row>
            </Col>

            {/* Amenities and Airbnb Size */}
            <Col lg={12}>
              <Row className="mt-3 px-4">

                {/* Amenities */}
                <Col lg={6}>
                  <Amenities />
                </Col>

                {/* Airbnb Size */}
                <Col lg={6}>
                  <AirbnbSize />
                </Col>
              </Row>
            </Col>

            {/* Similer product*/}
            {/* <Col lg={12} id="SimilerProduct">
              <p className="display-3 py-5 m-1"> Similer Product </p>
              <SimilerProduct lg={12} className=" px-4"/>
              <SimilerProduct lg={12} className=" px-4" />
              <SimilerProduct lg={12} className=" px-4" />
              <SimilerProduct lg={12} className=" px-4" />
              <SimilerProduct lg={12} className=" px-4" />

            </Col> */}


            
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default AllFile;








import "./styles.css";
import React from "react";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  LabelList
} from "recharts";

const data = [
  {
    name: "Page",
    uv: 4000,
    pv: 6900,
    pvv: 2100,
    amt: 2400
  }
];

export default function App() {
  const renderCustomizedLabel = (props) => {
    const { content, ...rest } = props;

    return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
  };

  return (
    <ResponsiveContainer height={50} width={"100%"}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ left: 50, right: 50 }}
        stackOffset="expand"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis hide type="number" />
        <YAxis type="category" dataKey="name" stroke="#F888dF" fontSize="12" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8">
          <LabelList
            dataKey="uv"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
        <Bar dataKey="uv" stackId="a" fill="#82ca9d">
          <LabelList
            dataKey="pv"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
        <Bar dataKey="pvv" stackId="a" fill="#82dx9d">
          <LabelList
            dataKey="pvv"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
