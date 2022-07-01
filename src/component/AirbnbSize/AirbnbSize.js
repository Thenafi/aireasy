import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCoordinatesContext } from "../../Context/MapRelatedContext";

function AirbnbSize() {
  const [data, setData] = useState("");
  const { city } = useCoordinatesContext();
  const [avgrating, SetAvgrating] = useState(null);
  const [upFour, setUpFour] = useState(null);

  const url = "https://aireasymockapi.herokuapp.com/static";
  const url1 = "https://aireasymockapi.herokuapp.com/api_v2";

  const fetchData = async () => {
    try {
      if (city === "out") {
        const response = await axios.post(url1, { len: 30 });
        const dataa = response.data.rechart_friendly.review_ls;
        const val = dataa[1].value;
        const value = Math.floor(val);
        setUpFour(value);
        const remainingArr = dataa.filter((data) => data.name !== "over_4.5");
        setData(remainingArr);

        //   var precision = 100; // 2 decimals
        // var randomnum = Math.floor(Math.random() * (3 * precision -  2.5 * precision) + 1 * precision) / (1*precision);

        let vale = Math.random() * (1.8 - 2.3 + 1) + 2.3;
        const ran = Number.parseFloat(vale).toFixed(2);
        SetAvgrating(ran);
      } else {
        const response = await axios.post(url, { area: city });
        const dataa = response.data.review_ls;
        //    const overFour = response.data.review_ls.1;
        const remainingArr = dataa.filter((data) => data.name !== "over_4.5");

        setData(remainingArr);
        let vale = Math.random() * (1.6 - 2.4 + 1) + 2.3;
        const ran = Number.parseFloat(vale).toFixed(2);
        SetAvgrating(ran);

        let overall =Math.floor(Math.random() * (98- 88 + 1) + 88)
         setUpFour(overall);
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      <Col lg={12}>
        <Card border="light" className="m-1 rounded displayCard_2">
          <Card.Body>
            <Card.Title>Airbnb Size</Card.Title>
            <Row>
              <Col lg={8}>
                <ResponsiveContainer width="90%" height={260}>
                  <RadarChart outerRadius={90} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={70} domain={[0, 5]} />
                    <Radar
                      name="Value"
                      dataKey="value"
                      stroke="#8884d8"
                      fill="#42C2FF"
                      fillOpacity={0.7}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </Col>
              <Col lg={4} className="py-5">
                <p className="h5">Overall Rating</p>
                <p className=" h5">{avgrating}</p>
                <br />
                <p className="h5">Reated at least 4.5 overall</p>
                <p className="h5">{upFour}%</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default AirbnbSize;
