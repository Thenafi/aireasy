import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Legend, Line, LineChart, Tooltip, XAxis } from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCoordinatesContext } from "../../Context/MapRelatedContext";
import { useSimulationContext } from "../../Context/ProfitSimulationContext";

function AverageDailyRate() {
  const [data, setData] = useState("");
  const [avgDailyRate, setAvgDailyRate] = useState("");
  const { city } = useCoordinatesContext();
  const { avgDailyCal } = useSimulationContext();

  const url = "https://aireasymockapi.herokuapp.com/static";
  const url1 = "https://aireasymockapi.herokuapp.com/api_final";

  const fetchData = async () => {
    try {
      if (city === "out") {
        const response = await axios.post(url1, {
          len: Math.trunc(Math.random() * 300) + 1,
        });
        const data = response.data.month_data_prc_ls;
        setData(data);
        // console.log(data);
        // const value = response.data.month_data_prc_ls;

        const avgData = Math.ceil(
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
            24
        );
        setAvgDailyRate(avgData);
        const avgdailyData = avgData + 20;
        avgDailyCal(avgdailyData + 20);
      } else {
        const response = await axios.post(url, { area: city });
        const data = response.data.month_data_prc_ls;
        console.log(response);

        setData(data);
        if (city === "Rome") {
          setAvgDailyRate(200);
          avgDailyCal(220);
        } else if (city === "Berlin") {
          setAvgDailyRate(220);
          avgDailyCal(240);
        } else if (city === "Chicago") {
          setAvgDailyRate(240);
          avgDailyCal(260);
        } else {
          setAvgDailyRate(245);
          avgDailyCal(265);
        }
        //  console.log(response
      }
    } catch (e) {
      console.log("ki error hosse bujlam nah vai");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <Col>
      <Card border="light" className="m-1 rounded cd displayCard_top">
        <Card.Body>
          <Card.Title>Average Daily Rate</Card.Title>
        </Card.Body>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>
                <h1 className="display-3 ">{avgDailyRate}$</h1>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col>
            <Card.Body>
              <LineChart width={220} height={90} data={data}>
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" fill="#42C2FF" />
              </LineChart>
            </Card.Body>
          </Col>
        </Row>

        <Card.Footer>
          <small className="text-muted text-right">demo</small>
        </Card.Footer>
      </Card>
    </Col>
  );
}
export default AverageDailyRate;
