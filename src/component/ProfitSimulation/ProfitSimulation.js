import React, { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSimulationContext } from "../../Context/ProfitSimulationContext";

function ProfitSimulation() {
  const {
    allCalculation,
    annualExpenses,
    startupCost,
    cashReturn,
    netRentalYield,
    annualRevenue,
    profitBeforeTax,
    data,
  } = useSimulationContext();
  const [click, setClick] = useState(false);

  const [values, setValues] = useState({
    propertyPrice: 800,
    managementFee: 0,
    propertyTax: 0,
    lodgningTax: 0,
    mortgageFees: 0,
    hqaFees: 0,
    maintenance: 23,
    insurance: 3,
    electricity: 12,
    wifi: 55,
    gas: 2,
    other: 55,
    occupancyRate: 3,
    nightlyRate: 55,
    cleaningFees: 11,
    numberofBookings: 4,
    homeFurnishings: 0,
    closingCost: 0,
  });

  const inputHandle = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    e.preventDefault();
  };

  const sub = (e) => {
    e.preventDefault();
    allCalculation(values);
  };

  return (
    <>
      <Col lg={12}>
        <Card border="light" className="m-1 rounded displayCard_1">
          <Card.Body>
            <Card.Title style={{ alignText: "center" }}>
              Profit Simulation
            </Card.Title>
            <Card.Text>
              <Row>
                <Col md={6}>
                  <Form.Label className="label">Annual Revenue</Form.Label>
                  <p className="h5">${annualRevenue}</p>
                </Col>
                <Col md={6}>
                  <Form.Label className="label">Annual Expenses</Form.Label>
                  <p className="h5">${annualExpenses}</p>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="">
                  <Form.Label className="label">Startup Cost</Form.Label>
                  <p className="h5 pb-5">${startupCost}</p>
                </Col>

                <Col md={6}>
                  <a
                    href="https://httpbin.org/status/404"
                    onClick={() => setClick(true)}
                    className="p-2 btn btn-dark mt-3"
                    style={{ color: "#fff" }}
                  >
                    Edit Details
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* signup modal */}
                  <Modal show={click}>
                    <Modal.Body>
                      <Form className="py-5 px-2" onSubmit={sub}>
                        <h1 className="text-dark text-center text-bolder">
                          Edit Details
                        </h1>
                        <hr
                          variant="primary"
                          className="py-1 bg-primary w-75 mx-auto"
                        />

                        <h3 className="text-dark text-center text-bolder py-2">
                          Annual Expenses
                        </h3>

                        <Row>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="ManagementFee"
                          >
                            <Form.Label
                              className="label"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Management Fee
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="managementFee"
                              // defaultValue={values.managementFee}
                              onChange={inputHandle}
                              value={values.managementFee}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="PropertyTax"
                          >
                            <Form.Label className="label">
                              Property Tax
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="propertyTax"
                              onChange={inputHandle}
                              value={values.propertyTax}
                            />
                          </Form.Group>
                        </Row>

                        <Row style={{ marginTop: "-1rem" }}>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="LodgningTax"
                          >
                            <Form.Label className="label">
                              Lodgning Tax
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="lodgningTax"
                              onChange={inputHandle}
                              value={values.lodgningTax}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="MortgageFee"
                          >
                            <Form.Label className="label">
                              Mortgage Fee
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="mortgageFees"
                              onChange={inputHandle}
                              value={values.mortgageFees}
                            />
                          </Form.Group>
                        </Row>
                        <Row style={{ marginTop: "-1rem" }}>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="HOAFee"
                          >
                            <Form.Label className="label">HOA Fee</Form.Label>
                            <Form.Control
                              type="number"
                              name="hqaFees"
                              onChange={inputHandle}
                              value={values.hqaFees}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="Maintenance"
                          >
                            <Form.Label className="label">
                              Maintenance
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="maintenance"
                              onChange={inputHandle}
                              value={values.maintenance}
                            />
                          </Form.Group>
                        </Row>
                        <Row style={{ marginTop: "-1rem" }}>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="Insurance"
                          >
                            <Form.Label className="label">Insurance</Form.Label>
                            <Form.Control
                              type="number"
                              name="insurance"
                              onChange={inputHandle}
                              value={values.insurance}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="Electricity"
                          >
                            <Form.Label className="label">
                              Electricity
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="electricity"
                              onChange={inputHandle}
                              value={values.electricity}
                            />
                          </Form.Group>
                        </Row>
                        <Row style={{ marginTop: "-1rem" }}>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="Wifi"
                          >
                            <Form.Label className="label">Wifi</Form.Label>
                            <Form.Control
                              type="number"
                              name="wifi"
                              onChange={inputHandle}
                              value={values.wifi}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="Gas"
                          >
                            <Form.Label className="label">Gas</Form.Label>
                            <Form.Control
                              type="number"
                              name="gas"
                              onChange={inputHandle}
                              value={values.gas}
                            />
                          </Form.Group>
                        </Row>
                        <Row style={{ marginTop: "-1rem" }}>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="Other"
                          >
                            <Form.Label className="label">Other</Form.Label>
                            <Form.Control
                              type="number"
                              name="other"
                              onChange={inputHandle}
                              value={values.other}
                            />
                          </Form.Group>
                        </Row>

                        <h3 className="text-dark text-center text-bolder py-2">
                          Annual Revenue
                        </h3>
                        <Row style={{ marginTop: "-1rem" }}>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="OccupancyRate"
                          >
                            <Form.Label className="label">
                              Occupancy Rate
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="occupancyRate"
                              onChange={inputHandle}
                              value={values.occupancyRate}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="NightlyRate"
                          >
                            <Form.Label className="label">
                              Nightly Rate
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="nightlyRate"
                              onChange={inputHandle}
                              value={values.nightlyRate}
                            />
                          </Form.Group>
                        </Row>
                        <Row style={{ marginTop: "-1rem" }}>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="CleaningFee"
                          >
                            <Form.Label className="label">
                              Cleaning Fee
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="cleaningFees"
                              onChange={inputHandle}
                              value={values.cleaningFees}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="NumberOfBooking"
                          >
                            <Form.Label className="label">
                              {" "}
                              Bookings Per Month
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="numberofBookings"
                              onChange={inputHandle}
                              value={values.numberofBookings}
                            />
                          </Form.Group>
                        </Row>

                        <h3 className="text-dark text-center text-bolder py-2">
                          Startup Cost and Property Price
                        </h3>
                        <Row style={{ marginTop: "-1rem" }}>
                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="HomeFurnishing"
                          >
                            <Form.Label className="label">
                              Home Furnishing
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="homeFurnishings"
                              onChange={inputHandle}
                              value={values.homeFurnishings}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="ClosingCost"
                          >
                            <Form.Label className="label">
                              Closing Cost
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="closingCost"
                              onChange={inputHandle}
                              value={values.closingCost}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3 m-2 col-5 mx-auto"
                            controlId="PropertyPrice"
                          >
                            <Form.Label className="label">
                              Property Price
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="propertyPrice"
                              onChange={inputHandle}
                              value={values.propertyPrice}
                            />
                          </Form.Group>
                        </Row>

                        <Button
                          variant="primary"
                          className="m-1 col-4 ms-4 Button"
                          type="submit"
                          onClick={() => setClick(false)}
                        >
                          {" "}
                          Submit{" "}
                        </Button>

                        <Button
                          variant="primary"
                          className="m-1 col-4 ms-4 Button"
                          onClick={() => setClick(false)}
                        >
                          Close{" "}
                        </Button>

                        {/* <a href="#"
                     onClick={()=> setClick(false)}
                      className="m-1 p-2 Button_1"
                       style={{color: '#fff'}}>Close </a> */}

                        <hr
                          variant="primary"
                          className="bg-primary w-75 mx-auto"
                        />
                      </Form>
                    </Modal.Body>

                    {/* <Modal.Footer></Modal.Footer> */}
                  </Modal>
                </Col>
                <Col md={4} className=""></Col>
              </Row>
              <Row>
                <Col md={10}>
                  <ResponsiveContainer width="95%" height={280}>
                    <BarChart
                      data={data}
                      margin={{
                        top: 10,
                        right: 0,
                        left: 4,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip cursor={{ fill: "transparent" }} />
                      <Legend />
                      <Bar dataKey="Expeses_and_Tax" fill="#85F4FF" />
                      <Bar dataKey="Revenue" fill="#42C2FF" />
                    </BarChart>
                  </ResponsiveContainer>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p className="">
              Cash Return: <b>${cashReturn}%</b>
            </p>
            <p className="">
              Profit Before Tax: <b>${profitBeforeTax}</b>
            </p>
            <p className="">
              Net Return Yied: <b>{netRentalYield}%</b>
            </p>
            <p className="">
              Net Operating Income: <b>$43,634</b>
            </p>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}
export default ProfitSimulation;
