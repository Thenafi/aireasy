import React from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Assets/style.css";
import AirbnbSize from "./component/AirbnbSize/AirbnbSize";
import Amenities from "./component/Amenities/Amenities";
import AverageDailyRate from "./component/AverageDailyRate/AverageDailyRate";
import LeftMenu from "./component/LeftMenu/LeftMenu";
import Mapp from "./component/Map/Mapp";
import OccupancyRate from "./component/OccupancyRate/OccupancyRate";
import ProfitSimulation from "./component/ProfitSimulation/ProfitSimulation";
import RentalSetting from "./component/RentalSetting/RentalSetting";
import RentalSize from "./component/RentalSize/RentalSize";
import RentalType from "./component/RentalType/RentalType";
import Revenue from "./component/Revenue/Revenue";
import TopMenu from './component/TopMenu/TopMenu';


function AllFile() {
  

  return (
    <div className="body ">
      <Container fluid className="m-0 p-0">
        <Row>

          {/* left menu */}

          <Col lg={2} className="md-2 m-0 p-0 SaidMenu">

            <LeftMenu />

          </Col>

          {/* main body */}
          <Col lg={10} className="m-0 pb-3">
            
            {/* top navigation */}
             <TopMenu />
            
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