import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AirEasy from "./../../Logo/aireasy.png";



function LeftMenu() {
    return(
      <div>
        <Card style={{height: '100vh',width: '16%'}} lg={12} className="bg-transparent leftMenuCard card_left border-0">
          <Card.Img variant="top" src={AirEasy} className="Image d-block mx-auto mt-5 mb-1"/>
          <Card.Body>
            <Card.Text>
              <Card.Body className="leftMenuCard_1 rounded p-0">
                <Card.Title>
                  {/* <h4 className="text-bolder p-2 center">Research</h4> */}
                </Card.Title>
                <Card.Text className="ml-0 mr-0">

                  <ListGroup className="list-group-flush listItem rounded bg-transparent py-2 border-0">

                    <ListGroupItem className="bg-transparent  border-0">
                    <LinkContainer to ='/dashboard'>
                      <Card.Link  className="btn btn-dark col-12">Overview</Card.Link>
                      </LinkContainer>
                    </ListGroupItem>


                    <ListGroupItem className="bg-transparent  border-0">
                      <LinkContainer to='/similarproperties'>
                      <Card.Link href="SimilerProduct" className="btn btn-dark col-12">Similar Properties</Card.Link>
                      </LinkContainer>
                    </ListGroupItem>

                  </ListGroup>

                </Card.Text>
              </Card.Body>
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <Card.Text>
              <h6 className="text-light pl-5">COPYRIGHT © 2022</h6>
            </Card.Text>
          </Card.Footer>

        </Card>
      </div>
    )
}
export default LeftMenu;