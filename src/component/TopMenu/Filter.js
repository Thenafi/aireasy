import React,{ useState } from "react";
import { Button, Col, Form, Modal, Nav, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";

export default function Filter() {
  const [clickFilter, setClickFilter] = useState(false);

  return (
    <div >
      {/* <div className="vr mx-2"></div> */}
      <Nav.Link
        href="#"
        onClick={() => setClickFilter(true)}
        className="m-1 btn btn-dark"
        style={{ color: "#fff", borderRadius: "11px" }}
      >
        Filter
      </Nav.Link>

      {/* filter modal */}
      <Modal show={clickFilter}  className="modal_all">
        {/* <Modal.Header>Modal head</Modal.Header> */}

        <Modal.Body>
          <Form className="py-5 px-2">
            <h1 className="text-dark text-left text-bolder">Filter</h1>
            <hr variant="primary" className="py-1 bg-primary mx-auto" />

            <Form.Group
              className="mb-3 col-11 mx-auto"
              controlId="formBasicType"
            >
              <Form.Label>Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Rental Type</option>
                <option value="1">Entire Home</option>
                <option value="2">Private Room</option>
                <option value="3">Shared Room</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3 col-11 mx-auto my-2 pb-5"
              controlId="BedRoom"
            >
              <Form.Label>Bedrooms</Form.Label>
              <MultiRangeSlider
                className="py-2"
                min={1}
                max={8}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-11 mx-auto my-2 pb-5"
              controlId="BathRoom"
            >
              <Form.Label>Bathrooms</Form.Label>
              <MultiRangeSlider
                className="py-2"
                min={1}
                max={6}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-11 mx-auto my-2 pb-5"
              controlId="MinimumStay"
            >
              <Form.Label>minimum Stay</Form.Label>
              <MultiRangeSlider
                className="py-2"
                min={1}
                max={31}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-11 mx-auto"
              controlId="formBasicAmenities"
            >
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
                  <Form.Check type="switch" id="custom-switch-9" label="Pool" />
                  <Form.Check
                    type="switch"
                    id="custom-switch-10"
                    label="hot Tub"
                  />
                </Col>
              </Row>
            </Form.Group>

            <Button
              variant="primary"
              className="m-1 col-4 ms-4 Button"
              onClick={() => setClickFilter(false)}
            >
              Update
            </Button>
            <Button
              variant="primary"
              className="m-1 col-4 ms-4 Button"
              onClick={() => setClickFilter(false)}
            >
              Close
            </Button>

            {/* <Button variant="primary" className="m-1 col-4 ms-4" onClick={()=> setClickFilter(false)}>
                  Update
                </Button>

                <Button variant="primary" className="m-1 col-4 ms-4" onClick={()=> setClickFilter(false)}>
                  Close
                </Button> */}
          </Form>
        </Modal.Body>

        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </div>
  );
}
