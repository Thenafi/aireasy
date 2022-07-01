import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HelpMap from './HelpMap';

function Mapp() {
  
    return(
        <>     
         <Col lg={12}>
            <Card border="light" className="m-1 rounded displayCard">
                   <HelpMap/>    
            </Card>
        </Col>             
    
    </>
    )
}
export default Mapp;