import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Assets/style.css";
import LeftMenu from "./component/LeftMenu/LeftMenu";
import SimilarProduct from "./component/SimilerProduct/SimilerProduct";
import TopMenu from './component/TopMenu/TopMenu';

export default function LeftTopTemplate() {
  

  return (
      <>
 
      <Container fluid className="m-0 p-0">
        <Row>
          {/* left menu */}

          <Col lg={2} className="md-2 m-0 p-0 SaidMenu">
            <LeftMenu />
          </Col>

          {/* main body */}
          <Col lg={10} className="m-0 pb-3">

            {/* top navigation */}
             <TopMenu/>
             <SimilarProduct  />
             <SimilarProduct  />
             <SimilarProduct  />
             <SimilarProduct  />
             <SimilarProduct  />
             </Col>
             </Row>
             </Container>
            
     </>
  )
}
