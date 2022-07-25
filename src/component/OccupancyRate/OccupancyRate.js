import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Legend, Line, LineChart, Tooltip, XAxis } from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCoordinatesContext } from "../../Context/MapRelatedContext";
import { useSimulationContext } from "../../Context/ProfitSimulationContext";

function OccupancyRate() {
  const [data, setData] = useState("");
  const [occupancy, setOccupnacy] = useState(null);
  const { occuCal } = useSimulationContext();
  const { city } = useCoordinatesContext();

  const url = "https://aireasymockapi.herokuapp.com/static";
  const url1 = "https://aireasymockapi.herokuapp.com/api_final";

  const fetchData = async () => {
    try {
      if (city === "out") {
        const response = await axios.post(url1, {
          len: Math.trunc(Math.random() * 300) + 1,
        });
        console.log("city is out now");
        const data = response.data.month_data_ocu_ls;
        setData(data);

        const occData = Math.ceil(
          (data[0].value +
            data[1].value +
            data[2].value +
            data[3].value +
            data[4].value +
            data[5].value +
            data[6].value +
            data[7].value +
            data[8].value +
            data[9].value +
            data[10].value +
            data[11].value) /
            12
            
        );
        setOccupnacy(occData);
        const oc = Number((occData / 100) * 30);
        occuCal(oc);
      } else {
        const response = await axios.post(url, { area: city });
        console.log("now inside of city list");
        const data = response.data.month_data_ocu_ls;
        setData(data);
        if (city === "Rome") {
          setOccupnacy(40);
          const rom = Number((40 / 100) * 30);
          occuCal(rom);
        } else if (city === "Berlin") {
          setOccupnacy(45);
          const berlin = Number((45 / 100) * 30);
          occuCal(berlin);
        } else if (city === "Chicago") {
          setOccupnacy(35);
          const chi = Number((35 / 100) * 30);
          occuCal(chi);
        } else {
          setOccupnacy(50);
          const newYork = Number((50 / 100) * 30);
          occuCal(newYork);
        }
        //  console.log(response)
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <Col>
      <Card border="light" className="m-1 rounded displayCard_top">
        <Card.Body>
          <Card.Title>Occupancy Rate</Card.Title>
        </Card.Body>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>
                <h1 className="display-3 ">{occupancy}%</h1>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col>
            <Card.Body>
              <LineChart width={250} height={90} data={data}>
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" fill="#42C2FF" />
              </LineChart>
            </Card.Body>
          </Col>
        </Row>

        <Card.Footer>
          <small className="text-muted text-right"> demo </small>
        </Card.Footer>
      </Card>
    </Col>
  );
}
export default OccupancyRate;

// 🤦‍♀️👍😁🤣😂😒
