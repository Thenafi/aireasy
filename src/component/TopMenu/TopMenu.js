import React, { useState } from 'react';
import { Col, Container, Nav, Navbar } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../../Context/AuthContext';
import SearchBar from '../../SearchBar';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import UserName from '../Authentication/UserName';
import Filter from './Filter';


export default function TopMenu() {
  // const [mark, setMark] = useState(false)
  const { currentUser, life} = useAuth();
  return (
    <>
      <Col lg={12}>

        <Navbar bg="light" expand="lg" className="TopMenu">
          <Container fluid className="px-3">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-1" />
            <Navbar.Collapse > 
            <SearchBar lg={4}/>

                <Nav.Link className="m-1 p-2 Button_1 Button_1" style={{color: '#fff' , borderRadius: '15px'}}>View Unlocked Market</Nav.Link>

                <hr className="w-100 SimilarPropertiesQuary" />
                {/* <Nav.Link className="m-1 p-2 Button_1 SimilarPropertiesQuary" style={{color: '#fff'}}>Overview</Nav.Link>
          
                <Nav.Link className="m-1 p-2 Button_1 SimilarPropertiesQuary"  style={{color: '#fff'}}>Similar Properties</Nav.Link>
                <hr className="w-100 SimilarPropertiesQuary" /> */}

          
              <Nav
                className="ms-auto my-2 my-lg-0"
                // style={{ maxHeight: '100px' }}
                navbarScroll
              >
            {life && currentUser ? (
                  <>
                    <Filter/>
                    <UserName/>
                  </>
            ):
            (
              <>
                <Filter />
                <Signup />
                <Login />
              </>
            )}
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </Col>
    </>
  )
}
